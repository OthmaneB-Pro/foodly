import { useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import Navbar from "./navbar/Navbar";
import Menu from "./menu/Menu";
import { useState } from "react";
import { MenuContext } from "../../../context/MenuContext";
import type { MenuType } from "../../../fakeData/MenuType";
import { useMenuProduct } from "../../../hooks/useMenuProduct";

export default function OrderPage() {
  const { username } = useParams();
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

  const MenuContextValue = {
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
    loading
  };

  return (
    <MenuContext.Provider value={MenuContextValue}>
      <OrderPageStyled>
        <Navbar username={username} />
        <Menu />
      </OrderPageStyled>
    </MenuContext.Provider>
  );
}

const OrderPageStyled = styled.div`
  background-color: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Open Sans", sans-serif;
  overflow-y: hidden;
`;
