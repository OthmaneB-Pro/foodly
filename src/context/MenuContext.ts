import { createContext } from "react";
import type { MenuType } from "../fakeData/MenuType";

type MenuContextType = {
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
});
