import { useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import Navbar from "./navbar/Navbar";
import Menu from "./menu/Menu";
import { useState } from "react";
import { MenuContext } from "../../../context/MenuContext";
import { fakeMenu2 } from "../../../fakeData/fakeMenu";
import type { MenuType } from "../../../fakeData/MenuType";

export default function OrderPage() {
  const { username } = useParams();
  const [isAdmin, setIsAdmin] = useState(false);
  const [mode, setMode] = useState<"add" | "edit">("add");
  const [menu, setMenu] = useState(fakeMenu2);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const handleAdd = (inputValues: MenuType) => {
    const copyMenu = [...menu];
    const newMenu = [inputValues, ...copyMenu];
    setMenu(newMenu);
  };
  const handleDelete = (idProduct: number) => {
    const menuCopy = [...menu];
    setMenu(menuCopy.filter((product) => product.id !== idProduct));
  };

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
