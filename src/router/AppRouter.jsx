import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { HeroesRoutes } from "../modules/heroes/routes/HeroesRoutes";
import { LoginPage } from "../modules/auth";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />

        <Route
          path="/*"
          element={
            <PrivateRoute>
              <HeroesRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};
