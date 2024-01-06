import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "../../src/modules/auth/context";
import { GuestRoute } from "../../src/router/GuestRoute";

describe("Tests for GuestRoute", () => {
  it("should display the children if it isn't authenticated", () => {
    const contextValue = {
      logged: false,
      user: {
        id: "",
        name: "",
      },
    };
    const childrenContent = "Guest route test";

    render(
      <AuthContext.Provider value={{ state: contextValue }}>
        <GuestRoute>
          <h1>{childrenContent}</h1>
        </GuestRoute>
      </AuthContext.Provider>
    );

    expect(screen.getByText(childrenContent)).toBeTruthy();
  });

  it("should navigate if it is authenticated", () => {
    const contextValue = {
      logged: true,
      user: {
        id: "1",
        name: "roberto",
      },
    };
    const rootPageContent = "Root page";
    const childrenContent = "Guest route test";

    render(
      <AuthContext.Provider value={{ state: contextValue }}>
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route
              path="/login"
              element={
                <GuestRoute>
                  <h1>{childrenContent}</h1>
                </GuestRoute>
              }
            />
            <Route path="/" element={<h1>{rootPageContent}</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText(rootPageContent)).toBeTruthy();
  });
});
