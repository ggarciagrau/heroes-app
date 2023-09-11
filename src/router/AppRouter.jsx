import { Routes, Route, Navigate } from "react-router-dom";
import { HeroesRoutes } from "../modules/heroes/routes/HeroesRoutes";
import { LoginPage } from "../modules/auth";
import { Navbar } from "../modules/ui";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/*" element={<HeroesRoutes />}/>
      </Routes>
    </>
  );
};