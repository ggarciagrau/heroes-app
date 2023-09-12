import { useReducer } from "react";
import { types } from "../types";
import { AuthContext } from "./";
import { authReducer } from "./";

const initialState = {
  logged: false,
  user: {
    id: "",
    name: "",
  },
};

const localStorageUserId = "user";

const initializer = () => {
  try {
    const user = JSON.parse(localStorage.getItem(localStorageUserId));
    return { ...initialState, logged: true, user };
  } catch {
    return initialState;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState, initializer);

  const login = (name = "") => {
    const payload = { id: "ABC", name };

    localStorage.setItem(localStorageUserId, JSON.stringify(payload));
    dispatch({ type: types.login, payload });
  };

  const logout = () => {
    localStorage.removeItem(localStorageUserId);
    dispatch({ type: types.login, payload: { id: "", name: "" } });
  };

  return (
    <AuthContext.Provider value={{ state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
