import { useEffect, useState } from "react";
import type { MenuType } from "../fakeData/MenuType";
import { getListMenu } from "../api/menuApi";
import { fakeMenu2 } from "../fakeData/fakeMenu";

export const useMenuProduct = () => {
  const [menu, setMenu] = useState<MenuType[]>(fakeMenu2);
  const [basket, setBasket] = useState<MenuType[]>([]);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
    const fetchMenu = async () => {
      try {
        setLoading(true);
        await getListMenu(setMenu); 
      } catch (err) {
        console.error("Erreur récupération menu :", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  const handleAdd = (inputValues: MenuType) => {
    const newMenu = [inputValues, ...menu];
    setMenu(newMenu);
  };

  const handleDelete = (idProduct: number) => {
    const newMenu = menu.filter((product) => product.id !== idProduct);
    const newBasket = basket.filter((product) => product.id !== idProduct);
    setMenu(newMenu);
    setBasket(newBasket);
  };

  const handleAddBasket = (product: MenuType) => {
    const existingProduct = basket.find((item) => item.id === product.id);
    if (existingProduct) {
      const updatedBasket = basket.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setBasket(updatedBasket);
      return;
    }
    const basketCopy = [...basket];
    const newBasket = [product, ...basketCopy];
    setBasket(newBasket);
  };

  const handleDeleteBasket = (idProduct: number) => {
    const basketCopy = [...basket];
    const deleteProductBasket = basketCopy.filter(
      (product) => product.id !== idProduct
    );
    setBasket(deleteProductBasket);
  };

  return {
    menu,
    setMenu,
    basket,
    setBasket,
    handleAdd,
    handleDelete,
    handleAddBasket,
    handleDeleteBasket,
    loading,
  };
};
