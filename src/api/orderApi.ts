import axios from "axios";
import type { MenuType } from "../fakeData/MenuType";

type CartOrderType = {
  userId: number | null;
  menuId: number;
  quantity: number;
};

const token = localStorage.getItem("jwt");

export const addCartToOrder = async ({
  userId,
  menuId,
  quantity,
}: CartOrderType) => {
  try {
    const res = await axios.post(
      "http://localhost:8080/cart/add",
      { userId, menuId, quantity },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    console.log(res.data.items);
  } catch (err) {
    console.error("Erreur lors de l'ajout au panier", err);
  }
};

export const getCartOrder = async (
  setBasket: React.Dispatch<React.SetStateAction<MenuType[]>>
) => {
  try {
    const res = await axios.get("http://localhost:8080/cart", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setBasket(res.data[0].items);
  } catch (err) {
    console.log("Erreur lors de la récupération du panier", err);
  }
};

export const deleteCartOrder = async (itemId: number) => {
  try {
    const res = await axios.delete(
      `http://localhost:8080/cart/item/${itemId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("delete", res.data);
  } catch (err) {
    console.log("Erreur lors de la suppresion de l'élément du panier", err);
  }
};
