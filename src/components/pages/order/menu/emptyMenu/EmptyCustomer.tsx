import styled from "styled-components";

export default function EmptyCustomer() {
  return (
    <EmptyStyled>
      <p>Victime de notre succès ! :D</p>
      <p>De nouvelles recettes sont en cours de préparation.</p>
      <p>À très vite !</p>
    </EmptyStyled>
  );
}

const EmptyStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1400px;
  height: 85vh;

  p{
    font-family: 'Amatic SC';
    font-style: bold;
    font-size: 36px;

  }
`;
