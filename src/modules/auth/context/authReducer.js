import { types } from "../types";

export const authReducer = (state, { type, payload }) => {
  switch (type) {
    case types.login:
      return {
        ...state,
        logged: true,
        user: {
          id: payload.id,
          name: payload.name,
        },
      };
    case types.logout:
      return {
        ...state,
        logged: false,
        user: {
          id: "",
          name: "",
        },
      };
    default:
      return state;
  }
};
