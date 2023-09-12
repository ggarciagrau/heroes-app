import { useContext, useMemo } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../modules/auth/context";

export const PrivateRoute = ({ children }) => {
  const { state } = useContext(AuthContext);
  const {pathname, search} = useLocation();

  useMemo(() => localStorage.setItem('lastPath', pathname + search), [pathname, search]);

  return state?.logged ? children : <Navigate to="/login" />;
};
