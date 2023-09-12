import { types } from "../types";

export const authReducer = (state, { type, payload }) => {
  switch (type) {
    case types.login:
        return {
          ...state,
          logged: true,
          name: payload
        };
    case types.logout:
      return {
        ...state,
        logged: true,
        name: ""
      };
    default:
        return state;
  }
};
