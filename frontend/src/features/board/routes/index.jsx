import { Route, Routes } from 'react-router-dom';
import { Board } from './Board';

export const BoardRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Board />} />
    </Routes>
  );
};
