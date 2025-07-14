import styled from "styled-components";

export default function TotalPrice() {
  return (
    <TotalPriceStyled>
      <p>Total</p>
      <p>0,00 €</p>
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
