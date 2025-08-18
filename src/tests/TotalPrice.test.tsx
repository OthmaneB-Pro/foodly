import { screen } from "@testing-library/dom";
import TotalPrice from "../components/pages/order/menu/basket/header/TotalPrice";
import { MenuContext, type MenuContextType } from "../context/MenuContext";
import { render } from "@testing-library/react";

const contextBasketValues: Partial<MenuContextType> = {
  basket: [
    {
      id: 1,
      imageSource: "",
      isAdvertised: true,
      isAvailable: true,
      title: "",
      price: 12,
      quantity: 2,
    },
    {
      id: 2,
      imageSource: "",
      isAdvertised: true,
      isAvailable: true,
      title: "",
      price: 12,
      quantity: 2,
    },
  ],
};

test("Reduce function with values ", () => {
  render(
    <MenuContext.Provider value={contextBasketValues as MenuContextType}>
      <TotalPrice />
    </MenuContext.Provider>
  );
  const reduceRenderElement = screen.getByText(/48,00 €/i);
  expect(reduceRenderElement).toBeInTheDocument();
});
