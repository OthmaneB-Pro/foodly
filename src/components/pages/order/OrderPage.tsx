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
        <Logo />

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

  .navbar {
    background: ${theme.colors.background_white};
    width: 1400px;
    height: 98px;
    border-radius: 15px 15px 0px 0px;
  }
  .menu {
    background-color: red;
    width: 1400px;
    height: 80vh;
    border-radius: 0px 0px 15px 15px;
  }
`;
