import styled from "styled-components";

export default function EmptyCustomer() {
  return (
    <EmptyStyled>
      <p className="title">Victime de notre succès ! :D</p>
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

  color: #747b91;
  .title {
    font-weight: 700;
  }
  p {
    font-family: "Amatic SC";
    font-size: 36px;
    margin: 21px;
  }
`;
