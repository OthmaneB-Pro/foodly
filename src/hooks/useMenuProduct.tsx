import { useState } from "react";
import type { MenuType } from "../fakeData/MenuType";
import { fakeMenu2 } from "../fakeData/fakeMenu";

export const useMenuProduct = () => {
  const [menu, setMenu] = useState(fakeMenu2);
  const [basket, setBasket] = useState<MenuType[]>([]);

  const handleAdd = (inputValues: MenuType) => {
    const newMenu = [inputValues, ...menu];
    setMenu(newMenu);
  };

  const handleDelete = (idProduct: number) => {
    const newMenu = menu.filter((product) => product.id !== idProduct);
    const newBasket = basket.filter((product) => product.id !== idProduct);

    console.log("Basket before:", basket);
    console.log("Basket after:", newBasket);

    setMenu(newMenu);
    setBasket(newBasket);
  };


  const handleDeleteBasket = (idProduct: number) => {
    const basketCopy = [...basket];
    const deleteProductBasket = basketCopy.filter(
      (product) => product.id !== idProduct
    );
    setBasket(deleteProductBasket);
  };

  return { menu, setMenu, basket, setBasket, handleAdd, handleDelete, handleDeleteBasket };
};
