import { useContext } from "react";
import styled from "styled-components";
import { MenuContext } from "../../../../../../context/MenuContext";
import { formatPrice } from "../../../../../../utils/maths";

export default function TotalPrice() {
  const { basket } = useContext(MenuContext);

  const totalBasket = basket.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  return (
    <TotalPriceStyled>
      <p>Total</p>
      <p>{formatPrice(totalBasket)}</p>
    </TotalPriceStyled>
  );
}

const TotalPriceStyled = styled.div`
  background: black;
  color: #ffa01b;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 16px;

  p {
    font-family: "Amatic SC";
    font-style: normal;
    font-size: 36px;
    letter-spacing: 2px;
  }
`;
