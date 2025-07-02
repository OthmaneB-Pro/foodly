import { useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import Navbar from "./navbar/Navbar";
import Menu from "./menu/Menu";

export default function OrderPage() {
  const { username } = useParams();

  return (
    <OrderPageStyled>
      <Navbar username={username} />
      <Menu />
    </OrderPageStyled>
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
`;
