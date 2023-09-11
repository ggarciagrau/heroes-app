import { Routes, Route, Navigate } from "react-router-dom";
import { MarvelPage } from "../modules/heroes";
import { DcPage } from "../modules/heroes";
import { LoginPage } from "../modules/auth";
import { Navbar } from "../modules/ui";

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="dc" element={<DcPage />} />
        <Route path="marvel" element={<MarvelPage />} />

        <Route path="/" element={<Navigate to={"login"} />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </>
  );
};
