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
        <div>
          <h1>Hey, {username} </h1>
          <button onClick={handleClick}>Se déconnecter</button>
        </div>
        <FaUserCircle />
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
  font-family: 'Open Sans', sans-serif;

  .logo{
    transform: scale(0.4);
  }

  .navbar {
    background: ${theme.colors.white};
    width: 1400px;
    height: 98px;
    border-radius: 15px 15px 0px 0px;
    z-index: 1;
  }
  .menu {
    background: ${theme.colors.background_white};
    width: 1400px;
    height: 80vh;
    border-radius: 0px 0px 15px 15px;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset ;
  }
`;
