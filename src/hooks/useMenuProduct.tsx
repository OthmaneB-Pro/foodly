import { useEffect, useState } from "react";
import type { MenuType } from "../fakeData/MenuType";
import { addProductToMenu, deleteMenu, getListMenu } from "../api/menuApi";
import { addCartToOrder, deleteCartOrder, getCartOrder } from "../api/orderApi";

export const useMenuProduct = () => {
  const [menu, setMenu] = useState<MenuType[]>([]);
  const [basket, setBasket] = useState<MenuType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        setLoading(true);
        getListMenu(setMenu);
        getCartOrder(setBasket);
      } catch (err) {
        console.error("Erreur récupération menu :", err);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 200);
      }
    };

    fetchMenu();
  }, []);

  const handleAdd = (inputValues: MenuType) => {
    const newMenu = [inputValues, ...menu];
    setMenu(newMenu);
    addProductToMenu({
      user: { id: 15 },
      id : inputValues.id,
      title: inputValues.title,
      imageSource: inputValues.imageSource,
      price: inputValues.price,
      quantity: 1,
      isAdvertised: inputValues.isAdvertised,
      isAvailable: inputValues.isAvailable,
    });
  };

  const handleDelete = (idProduct: number) => {
    const newMenu = menu.filter((product) => product.id !== idProduct);
    const newBasket = basket.filter((product) => product.id !== idProduct);
    deleteMenu(idProduct);
    deleteCartOrder(idProduct);
    setMenu(newMenu);
    setBasket(newBasket);
  };

  const handleAddBasket = async (product: MenuType) => {
    const existingProduct = basket.find((item) => item.id === product.id);
    if (existingProduct) {
      setBasket(
        basket.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
      addCartToOrder({
        userId: 15,
        menuId: product.id,
        quantity: 1,
      });
    } else {
      setBasket([{ ...product, quantity: 1 }, ...basket]);
      addCartToOrder({
        userId: 15,
        menuId: product.id,
        quantity: 1,
      });
    }
  };

  const handleDeleteBasket = async (idProduct: number) => {
    setBasket(basket.filter((p) => p.id !== idProduct));
    await deleteCartOrder(idProduct);
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
