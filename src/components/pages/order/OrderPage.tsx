import { useNavigate, useParams } from "react-router-dom";
import Logo from "../../reusable-ui/Logo";
import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";

export default function OrderPage() {
  const navigate = useNavigate();
  const { username } = useParams();

  const handleClick = () => {
    navigate(`/`);
  };
  return (
    <OrderPageStyled>
      <Logo />
      <div>
        <div>
          <h1>Hey, {username} </h1>
          <button onClick={handleClick}>Se déconnecter</button>
        </div>
        <FaUserCircle />
      </div>
    </OrderPageStyled>
  );
}

const OrderPageStyled = styled.div`
`;
