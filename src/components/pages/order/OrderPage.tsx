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
      <Menu/>
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

  .logo {
    width: 0px;
    margin-left: 20px;
    transform: scale(0.4);
    cursor: pointer;
  }

  .navbar {
    background: ${theme.colors.white};
    width: 1400px;
    height: 98px;
    border-radius: 15px 15px 0px 0px;
    z-index: 1;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .rightNavbar {
      margin-right: 70px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: ${theme.colors.greyBlue};
      width: 120px;
      .user {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;

        .username {
          color: ${theme.colors.primary};
          font-weight: ${theme.weights.bold};
        }
      }
      p {
        font-size: 14px;
        margin-bottom: 4px;
        margin-top: 0px;
      }
      button {
        background: none;
        border: none;
        font-size: 10px;
        padding: 0;
        color: ${theme.colors.greyBlue};
        cursor: pointer;
        &:hover {
          text-decoration: underline;
          text-underline-offset: 3px;
        }
      }
      .icon {
        width: 36px;
        height: 36px;
      }
    }
  }
  .menu {
    background: ${theme.colors.background_white};
    width: 1400px;
    height: 80vh;
    border-radius: 0px 0px 15px 15px;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  }
`;
