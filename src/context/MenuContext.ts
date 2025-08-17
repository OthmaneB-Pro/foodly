import { createContext } from "react";
import type { MenuType, User } from "../fakeData/MenuType";

export type MenuContextType = {
  isAdmin: boolean;
  setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>;
  mode: "add" | "edit";
  setMode: React.Dispatch<React.SetStateAction<"add" | "edit">>;
  menu: MenuType[];
  setMenu: React.Dispatch<React.SetStateAction<MenuType[]>>;
  handleAdd: (inputValues: MenuType) => void;
  handleDelete: (idProduct: number) => void;
  isPanelOpen: boolean;
  setIsPanelOpen: React.Dispatch<React.SetStateAction<boolean>>;
  activeCardId: number | null;
  setActiveCardId: React.Dispatch<React.SetStateAction<number | null>>;
  selectedProduct: MenuType | null;
  setSelectedProduct: React.Dispatch<React.SetStateAction<MenuType | null>>;
  basket: MenuType[];
  setBasket: React.Dispatch<React.SetStateAction<MenuType[]>>;
  handleDeleteBasket: (idProduct: number) => void;
  handleAddBasket: (product: MenuType) => void;
  // loading: boolean;
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};

export const MenuContext = createContext<MenuContextType>({
  isAdmin: false,
  setIsAdmin: () => {},
  mode: "add",
  setMode: () => {},
  menu: [],
  setMenu: () => {},
  handleAdd: () => {},
  handleDelete: () => {},
  isPanelOpen: false,
  setIsPanelOpen: () => {},
  activeCardId: null,
  setActiveCardId: () => {},
  selectedProduct: null,
  setSelectedProduct: () => {},
  basket: [],
  setBasket: () => {},
  handleAddBasket: () => {},
  handleDeleteBasket: () => {},
  // loading: true,
  user: { username: "", password: "", role: "" },
  setUser: () => {},
});
