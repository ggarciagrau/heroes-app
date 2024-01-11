import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/modules/auth/context";
import { AppRouter } from "../../src/router/AppRouter";

describe("Tests for AppRouter", () => {
  it("should load the login page if the user is not authenticated", () => {
    const contextValue = {
      logged: false,
      user: {
        id: "",
        name: "",
      },
    };

    render(
      <MemoryRouter initialEntries={["/marvel"]}>
        <AuthContext.Provider value={{ state: contextValue }}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.findByText("Login")).toBeTruthy();
  });

  it("should navigate to marvel component if the user is authenticated", () => {
    const contextValue = {
      logged: true,
      user: {
        id: "1",
        name: "roberto",
      },
    };

    render(
      <MemoryRouter initialEntries={["/login"]}>
        <AuthContext.Provider
          value={{ state: contextValue }}
        >
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText("Marvel Comics", { selector: "h1"})).toBeTruthy();
  });
});
