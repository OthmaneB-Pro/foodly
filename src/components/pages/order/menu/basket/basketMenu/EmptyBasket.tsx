import styled from "styled-components";

export default function EmptyBasket() {
  return (
    <EmptyBasketStyled>
      <p>Votre commande est vide</p>
    </EmptyBasketStyled>
  );
}

const EmptyBasketStyled = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-family: Amatic SC;
    font-size: 36px;
    line-height: 72px;
    color: #747b91;
  }
`;
