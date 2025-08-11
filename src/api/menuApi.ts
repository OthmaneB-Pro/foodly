import axios from "axios";
import type { MenuType } from "../fakeData/MenuType";

type ProductType = {
  user: {
    id: number;
  };
  id: number;
  title: string;
  imageSource: string;
  price: number;
  quantity: number;
  isAdvertised: boolean;
  isAvailable: boolean;
};
const token = localStorage.getItem("jwt");

export const getListMenu = async (
  setMenu: React.Dispatch<React.SetStateAction<MenuType[]>>
) => {
  try {
    const res = await axios.get("http://localhost:8080/menu", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setMenu(res.data);
  } catch (err) {
    console.error("impossible de récuperer le menu de l'utilisateur", err);
  }
};

export const addProductToMenu = async ({
  user,
  title,
  price,
  imageSource,
  isAvailable,
  isAdvertised,
}: ProductType) => {
  try {
    const res = await axios.post(
      "http://localhost:8080/menu",
      { user, title, price, imageSource, isAvailable, isAdvertised },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    console.log(res.data);
  } catch (err) {
    console.error("Erreur lors de l'ajout du produit au menu", err);
  }
};

export const deleteMenu = async (id: number) => {
  try {
    const res = await axios.delete(`http://localhost:8080/menu/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res.data);
  } catch (err) {
    console.error("Erreur lors de la suppresion du produit", err);
  }
};
