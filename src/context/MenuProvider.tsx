import React, { useState } from "react";
import { MenuContext } from "./MenuContext";
import type { MenuType, User } from "../fakeData/MenuType";
import { useMenuProduct } from "../hooks/useMenuProduct";

export function MenuProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>({
    username: "",
    password: "",
    role: "",
  });
  const [isAdmin, setIsAdmin] = useState(false);
  const [mode, setMode] = useState<"add" | "edit">("add");
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [activeCardId, setActiveCardId] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<MenuType | null>(null);
  const {
    menu,
    setMenu,
    basket,
    setBasket,
    handleAdd,
    handleDelete,
    handleAddBasket,
    handleDeleteBasket,
    loading,
  } = useMenuProduct();

  const value = {
    isAdmin,
    setIsAdmin,
    mode,
    setMode,
    menu,
    setMenu,
    handleAdd,
    handleDelete,
    isPanelOpen,
    setIsPanelOpen,
    activeCardId,
    setActiveCardId,
    selectedProduct,
    setSelectedProduct,
    basket,
    setBasket,
    handleAddBasket,
    handleDeleteBasket,
    loading,
    user,
    setUser,
  };

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}
