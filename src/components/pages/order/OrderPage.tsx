import { useNavigate, useParams } from "react-router-dom";
import Logo from "../../reusable-ui/Logo";
import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";
import { theme } from "../../../theme";

export default function OrderPage() {
  const navigate = useNavigate();
  const { username } = useParams();

  const handleClick = () => {
    navigate(`/`);
  };
  return (
    <OrderPageStyled>
      <div className="navbar">
        <div className="logo">
          <Logo />
        </div>
        <div className="rightNavbar">
          <div className="user">
            <p>Hey, {username} </p>
            <button onClick={handleClick}>Se déconnecter</button>
          </div>
          <FaUserCircle className="icon" />
        </div>
      </div>
      <div className="menu"></div>
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
    margin-left: 20px;
    transform: scale(0.4);
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
          text-underline-offset: 4px;
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
