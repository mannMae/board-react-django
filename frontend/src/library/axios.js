import Axios from 'axios';
import { API_URL } from 'config';

const axiosRequestInterceptor = (config) => {
  config.headers.Accept = 'application/json';
  return config;
};

export const axios = Axios.create({
  baseURL: 'http://127.0.0.1:8000/api/v1/',
});

axios.interceptors.request.use(axiosRequestInterceptor);
