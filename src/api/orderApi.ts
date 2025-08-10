import axios from "axios";

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


