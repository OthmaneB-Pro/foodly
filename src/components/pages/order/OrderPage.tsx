import { useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import Navbar from "./navbar/Navbar";
import Menu from "./menu/Menu";
import { useState } from "react";
import { MenuContext } from "../../../context/MenuContext";

export default function OrderPage() {
  const { username } = useParams();
  const [isAdmin, setIsAdmin] = useState(false);

  const MenuContextValue = {
    isAdmin, setIsAdmin,
  }

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
