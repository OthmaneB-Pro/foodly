import { render, screen } from "@testing-library/react";
import { describe, test, vi, beforeEach } from "vitest";
import LoginForm from "../components/pages/login/LoginForm";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { MenuContext, type MenuContextType } from "../context/MenuContext";
import type { JSX } from "react";

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

const renderWithProviders = (ui: JSX.Element) =>
  render(
    <MemoryRouter>
      <MenuContext.Provider value={contextValue as MenuContextType}>
        {ui}
      </MenuContext.Provider>
    </MemoryRouter>
  );

beforeEach(() => {
  vi.clearAllMocks();
});

describe("LoginForm tests", () => {
  test("renders main title", () => {
    renderWithProviders(<LoginForm />);
    const title = screen.getByRole("heading", {
      level: 2,
      name: /Bienvenue chez nous !/i,
    });
    expect(title).toBeInTheDocument();
  });

  test("renders subtitle", () => {
    renderWithProviders(<LoginForm />);
    const subtitle = screen.getByRole("heading", {
      level: 3,
      name: /Connectez-vous/i,
    });
    expect(subtitle).toBeInTheDocument();
  });

  test("inputs are functional", async () => {
    renderWithProviders(<LoginForm />);

    const userInput = screen.getByPlaceholderText("Entrez votre prénom");
    const passwordInput = screen.getByPlaceholderText(
      "Entrez votre mot de passe"
    );

    expect(userInput).toHaveValue("Othmane");
    expect(passwordInput).toHaveValue("1234");

    const user = userEvent.setup();
    await user.type(userInput, "Othmane123");
    await user.type(passwordInput, "12345");

    expect(mockSetUser).toHaveBeenCalled();
  });

  test("renders submit button", () => {
    renderWithProviders(<LoginForm />);
    const button = screen.getByRole("button", {
      name: /Accéder à mon espace/i,
    });
    expect(button).toBeInTheDocument();
  });

  test("submit button navigates correctly", async () => {
    renderWithProviders(<LoginForm />);

    const button = screen.getByRole("button");

    const user = userEvent.setup();
    await user.click(button);

    expect(mockedNavigate).toHaveBeenCalledWith(`/order/Othmane`);
  });
});
