import { types } from "../../../../src/modules/auth/types";

describe("Tests for types", () => {
  it("should return these types", () => {
    expect(types).toEqual({
      login: "[Auth] Login",
      logout: "[Auth] Logout",
    });
  });
});
