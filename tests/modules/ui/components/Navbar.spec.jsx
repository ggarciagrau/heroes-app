import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Navbar } from "../../../../src/modules/ui/components/Navbar";
import { AuthContext } from "../../../../src/modules/auth/context";

const contextValue = {
  logged: true,
  user: {
    id: "1",
    name: "Roberto",
  },
};

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Tests for Navbar", () => {
  it("should display the sesion name", () => {
    render(
      <MemoryRouter>
        <AuthContext.Provider value={{ state: contextValue }}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText(contextValue.user.name)).toBeTruthy();
  });

  it("should logout succesfully", () => {
    const mockLogout = jest.fn();

    render(
      <MemoryRouter>
        <AuthContext.Provider value={{ state: contextValue, logout: mockLogout }}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    const logoutButton = screen.getByText("Logout");
    fireEvent.click(logoutButton);

    expect(mockLogout).toHaveBeenCalled()
    expect(mockNavigate).toHaveBeenCalled
  });
});
