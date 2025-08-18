import { render, screen } from "@testing-library/react";
import { describe, test } from "vitest";
import Basket from "../components/pages/order/menu/basket/Basket";
import { MenuContext, type MenuContextType } from "../context/MenuContext";
import BasketMain from "../components/pages/order/menu/basket/BasketMain";
import BasketCardContainer from "../components/pages/order/menu/basket/basketMenu/BasketCardContainer";

const contextBasketValues: Partial<MenuContextType> = {
  basket: [
    {
      id: 1,
      imageSource: "aaa",
      isAdvertised: true,
      isAvailable: true,
      title: "pizza",
      price: 12,
      quantity: 2,
    },
  ],
};

const contextBasketEmpty: Partial<MenuContextType> = {
  basket: [],
};

describe("Basket Test", () => {
  test("TotalPrice render with reduce function equal 0", () => {
    render(<Basket />);
    const paragraphElement = screen.getByText(/total/i);
    expect(paragraphElement).toBeInTheDocument();
    const reduceRenderElement = screen.getByText(/0,00 €/i);
    expect(reduceRenderElement).toBeInTheDocument();
  });

  test("BasketMain is Empty", () => {
    render(<Basket />);
    const emptyBasket = screen.getByText(/Votre commande est vide/i);
    expect(emptyBasket).toBeInTheDocument();
  });

  test("basket empty render", () => {
    render(
      <MenuContext.Provider value={contextBasketEmpty as MenuContextType}>
        <BasketMain />
      </MenuContext.Provider>
    );

    const basketEmpty = screen.getByText(/Votre commande est vide/i);
    expect(basketEmpty).toBeInTheDocument();
  });

  test("basket empty render", () => {
    render(
      <MenuContext.Provider value={contextBasketValues as MenuContextType}>
        <BasketCardContainer />
      </MenuContext.Provider>
    );

    const titleBasketElement = screen.getByRole("heading", { level: 3 });
    expect(titleBasketElement).toBeInTheDocument();

    const imageBasketElement = screen.getByAltText(/Pizza/i);
    expect(imageBasketElement).toBeInTheDocument();

    const quantityBasketElement = screen.getByText(/x 2/i);
    expect(quantityBasketElement).toBeInTheDocument();
  });
});
