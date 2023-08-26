import { BoardRoutes } from 'features/board/routes';
import { Route, Routes } from 'react-router-dom';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<BoardRoutes />} />
    </Routes>
  );
};
