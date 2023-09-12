import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../modules/auth/context";

export const GuestRoute = ({children}) => {
  const { state } = useContext(AuthContext);

  return state?.logged ? <Navigate to="/"/> : children; 
};
