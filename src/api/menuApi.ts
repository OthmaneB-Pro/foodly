import axios from "axios";
import type { MenuType } from "../fakeData/MenuType";

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

export const deleteMenu = async (id: number) => {
  try {
    const res = await axios.delete(`http://localhost:8080/menu/${id}`, {
      headers: {
        Authoratization: `Bearer ${token}`,
      },
    });
    console.log(res.data);
  } catch (err) {
    console.error("Erreur lors de la suppresion du produit", err);
  }
};
