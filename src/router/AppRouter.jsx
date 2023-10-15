import { Route, Routes } from 'react-router-dom';

import { LoginPage } from '../auth';
import { HeroesRoutes } from '../heroes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

function AppRouter() {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />

      <Route
        path="/*"
        element={
          <PrivateRoute>
            <HeroesRoutes />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
export default AppRouter;
