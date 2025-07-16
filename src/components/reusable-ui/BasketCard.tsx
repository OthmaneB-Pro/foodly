import styled from "styled-components";

export default function BasketCard() {
  return (
    <BasketCardStyled>
      <img src="../img/fries3.png" />
      <div className="info">
        <div className="left-info">
          <h3>New York Fries</h3>
          <span>3,17€</span>
        </div>
        <div className="right-info">
          <span>x 13</span>
        </div>
      </div>
    </BasketCardStyled>
  );
}

const BasketCardStyled = styled.div`
  width: 318px;
  height: 86px;
  display: flex;
  align-items: center;
  background-color: white;
  box-shadow: -4px 4px 15px 0px #00000033;
  border-radius: 5px;

  img {
    width: 85px;
    padding: 8px 16px;
  }
  .info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 200px;
    height: 70px;
    padding: 8px 16px 8px 5px;

    h3 {
      font-family: "Amatic SC";
      color: #17161a;
      font-weight: 700;
      font-size: 24px;
      margin: 0;
    }
    span {
      color: #ffa01b;
      font-size: 15px;
    }
    .right-info {
      padding: 25px 20px;
    }
    .left-info {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  }
`;
