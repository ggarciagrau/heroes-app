import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { GuestRoute } from "./GuestRoute";
import { HeroesRoutes } from "../modules/heroes/routes/HeroesRoutes";
import { LoginPage } from "../modules/auth";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        {/* <Route
          path="login"
          element={
            <GuestRoute>
              <LoginPage />
            </GuestRoute>
          }
        /> */}

        <Route
          path="login/*"
          element={
            <GuestRoute>
              <Routes>
                <Route path="/*" element={<LoginPage />} />
              </Routes>
            </GuestRoute>
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
    </>
  );
};
