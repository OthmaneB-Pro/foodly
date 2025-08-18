import { render, screen } from "@testing-library/react";
import { describe, test } from "vitest";
import NavbarLogo from "../components/pages/order/navbar/NavbarLogo";
import userEvent from "@testing-library/user-event";

Object.defineProperty(window, "location", {
  value: {
    ...window.location,
    reload: vi.fn(),
  },
  writable: true,
});

const reload = vi.spyOn(window.location, "reload");

describe("NavbarLogo render logo element and onClick method", () => {
  test("NavbarLogo render logo element", () => {
    render(<NavbarLogo />);
    const logoElement = screen.getByRole("img");
    expect(logoElement).toHaveAttribute("src", "../img/logo-orange.png");
    expect(logoElement).toHaveAttribute("alt", "burger-logo");

    const firstTextElement = screen.getByText(/Crazee/i);
    expect(firstTextElement).toBeInTheDocument();

    const secondTextElement = screen.getByText(/Burger/i);
    expect(secondTextElement).toBeInTheDocument();
  });

  test("NavbarLogo => onClick element reload", async () => {
    render(<NavbarLogo />);
    const logoElementClick = screen.getByRole("img");

    const user = userEvent.setup();
    await user.click(logoElementClick);

    expect(reload).toHaveBeenCalled();
  });
});
