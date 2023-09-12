import { useReducer } from "react";
import { types } from "../types";
import { AuthContext } from "./";
import { authReducer } from "./";

const initialState = {
  logged: false,
  user: {
    id: "",
    name: ""
  },
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = (name = "") =>
    dispatch({ type: types.login, payload: { id: "ABC", name } });

  const logout = () => dispatch({ type: types.login, payload: {id: "", name: ""} });

  return (
    <AuthContext.Provider value={{ state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
