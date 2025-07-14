import { useState } from "react";
import type { MenuType } from "../fakeData/MenuType";
import { fakeMenu2 } from "../fakeData/fakeMenu";

export const useMenuProduct = () => {
  const [menu, setMenu] = useState(fakeMenu2);

  const handleAdd = (inputValues: MenuType) => {
    const copyMenu = [...menu];
    const newMenu = [inputValues, ...copyMenu];
    setMenu(newMenu);
  };
  const handleDelete = (idProduct: number) => {
    const menuCopy = [...menu];
    setMenu(menuCopy.filter((product) => product.id !== idProduct));
  };

  return { menu, setMenu, handleAdd, handleDelete };
};
