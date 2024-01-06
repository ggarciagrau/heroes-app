import { authReducer } from "../../../../src/modules/auth/context";
import { types } from "../../../../src/modules/auth/types";

const initialState = {
  logged: false,
  user: {
    id: "",
    name: "",
  },
};

const loginPayload = {
  id: 1,
  name: "Roberto",
};

describe("Tests for authReducer", () => {
  it("should return the same default state", () => {
    const state = authReducer(initialState, { type: "peri", payload: {} });

    expect(state).toEqual(initialState);
  });

  it("should call login functionality and store session data", () => {
    const expected = {
      logged: true,
      user: loginPayload,
    };

    const state = authReducer(initialState, {
      type: types.login,
      payload: loginPayload,
    });

    expect(state).toEqual(expected);
  });

  it("should call logout functionality and remove session data", () => {
    const expected = {
      logged: false,
      user: {
        id: "",
        name: "",
      },
    };

    let state = authReducer(initialState, {
      type: types.login,
      payload: loginPayload,
    });
    state = authReducer(state, { type: types.logout });

    expect(state).toEqual(expected);
  });
});
