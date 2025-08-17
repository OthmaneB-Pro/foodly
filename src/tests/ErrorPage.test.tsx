import { render, screen } from "@testing-library/react";
import ErrorPage from "../components/pages/error/ErrorPage";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

const mockedNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockedNavigate,
  };
});

test("Error Page render Title Element", () => {
  render(
    <MemoryRouter>
      <ErrorPage />
    </MemoryRouter>
  );
  const TitleElement = screen.getByRole("heading", { level: 1 });
  expect(TitleElement).toHaveTextContent("404");
});

test("Error Page render Title h2 Element", () => {
  render(
    <MemoryRouter>
      <ErrorPage />
    </MemoryRouter>
  );
  const Title2Element = screen.getByRole("heading", { level: 2 });
  expect(Title2Element).toHaveTextContent(/Oups... Page introuvable !/i);
});

test("Error Page render Text Element", () => {
  render(
    <MemoryRouter>
      <ErrorPage />
    </MemoryRouter>
  );
  const TextElement = screen.getByRole("paragraph");
  expect(TextElement).toHaveTextContent(
    /La page que vous cherchez n’existe pas ou a été déplacée./i
  );
});

test("Error Page render Button Element", async () => {
  render(
    <MemoryRouter>
      <ErrorPage />
    </MemoryRouter>
  );
  const ButtonElement = screen.getByRole("button", {
    name: /Retourner à l’accueil 🍔/i,
  });
  expect(ButtonElement).toBeInTheDocument();

  const user = userEvent.setup();

  expect(ButtonElement).toHaveStyle({ "background-color": "#f56a2c" });
  await user.click(ButtonElement);

  expect(mockedNavigate).toHaveBeenCalledWith("/");
});
