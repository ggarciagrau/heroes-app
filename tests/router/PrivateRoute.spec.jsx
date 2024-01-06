import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/modules/auth/context";
import { PrivateRoute } from "../../src/router/PrivateRoute";

describe("Tests for PrivateRoute", () => {
  it("should display the children if it isn't authenticated", () => {
    const contextValue = {
      logged: true,
      user: {
        id: "1",
        name: "roberto",
      },
    };
    const route = '/birds';
    const childrenContent = "Private route test";

    Storage.prototype.setItem = jest.fn();

    render(
      <AuthContext.Provider value={{ state: contextValue }}>
        <MemoryRouter initialEntries={[route]}>
          <PrivateRoute>
            <h1>{childrenContent}</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText(childrenContent)).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", route);
  });
});
