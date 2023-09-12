import { useReducer } from "react";
import { AuthContext } from "./";
import { authReducer } from "./";

const initialState = {
  logged: false,
  name: "",
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
