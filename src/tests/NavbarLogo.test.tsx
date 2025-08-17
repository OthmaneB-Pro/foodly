import { render, screen } from "@testing-library/react";
import { describe, test } from "vitest";
import NavbarLogo from "../components/pages/order/navbar/NavbarLogo";

describe("NavbarLogo render logo element and onClick method", () => {
    test('NavbarLogo render logo element', () => { 
        render(<NavbarLogo/>)
        const logoElement = screen.getByRole("img");
        expect(logoElement).toHaveAttribute( 'src', '../img/logo-orange.png')

        const firstTextElement = screen.getByText(/Crazee/i)
        expect(firstTextElement).toBeInTheDocument()

        const secondTextElement = screen.getByText(/Burger/i)
        expect(secondTextElement).toBeInTheDocument()
     })
} )
