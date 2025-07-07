import { createContext } from "react";
import type { MenuType } from "../fakeData/menuType";

type MenuContextType = {
  isAdmin: boolean;
  setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>;
  mode: "add" | "edit";
  setMode: React.Dispatch<React.SetStateAction<"add" | "edit">>;
  menu : MenuType[];
  setMenu : React.Dispatch<React.SetStateAction<MenuType[]>>;
};

export const MenuContext = createContext<MenuContextType>({
  isAdmin: false,
  setIsAdmin: () => {},
  mode: "add",
  setMode: () => {},
  menu: [],
  setMenu: () => {},
});
