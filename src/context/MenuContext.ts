import { createContext } from "react";

type MenuContextType = {
  isAdmin: boolean;
  setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MenuContext = createContext<MenuContextType>({
  isAdmin: false,
  setIsAdmin: () => {},
});
