import { render, screen } from "@testing-library/react";
import { describe, test } from "vitest";
import Profile from "../components/pages/order/navbar/rightNavbar/Profile";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { MenuContext, type MenuContextType } from "../context/MenuContext";

const mockedNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockedNavigate,
  };
});

const mockSetUser = vi.fn();

const contextValue: Partial<MenuContextType> = {
  user: { username: "Othmane", password: "1234", role: "" },
  setUser: mockSetUser,
};

describe("Profile => logout and username render", () => {
  test("button with logout", async () => {
    render(
      <MemoryRouter>
        <Profile />
      </MemoryRouter>
    );
    const buttonElement = screen.getByRole("button", {
      name: /Se déconnecter/i,
    });
    expect(buttonElement).toBeInTheDocument();

    const user = userEvent.setup();
    await user.click(buttonElement);

    expect(mockedNavigate).toHaveBeenCalledWith("/");
  });

  test("paragraph render username from connection", () => {
    render(
      <MemoryRouter>
        <MenuContext.Provider value={contextValue as MenuContextType}>
          <Profile />
        </MenuContext.Provider>
      </MemoryRouter>
    );

    const paragraphElement = screen.getByText(/Hey,/i);
    expect(paragraphElement).toBeInTheDocument();

    const usernameSpan = screen.getByText("Othmane");
    expect(usernameSpan).toBeInTheDocument();
  });
});
