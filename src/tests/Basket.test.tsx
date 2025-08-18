import { render, screen } from "@testing-library/react";
import { describe, test } from "vitest";
import Basket from "../components/pages/order/menu/basket/Basket";

describe("Basket Test", () => {
  test("TotalPrice render with reduce function", () => {
    render(<Basket />);
    const paragraphElement = screen.getByText(/total/i);
    expect(paragraphElement).toBeInTheDocument();
    const reduceRenderElement = screen.getByText(/0,00 €/i);
    expect(reduceRenderElement).toBeInTheDocument();
  });
});
