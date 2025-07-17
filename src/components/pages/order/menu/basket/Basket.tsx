import styled from "styled-components";
import TotalPrice from "./header/TotalPrice";
import FooterBasket from "./footer/FooterBasket";
import BasketMain from "./BasketMain";

export default function Basket() {
  return (
    <BasketStyled>
      <TotalPrice />
      <BasketMain />
      <FooterBasket />
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  background: #f5f5f7;
  width: 350px;
  height: 80vh;
  border-bottom-left-radius: 15px;
  opacity: 1;
  position: fixed;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 20px 0px #00000033 inset;
`;
