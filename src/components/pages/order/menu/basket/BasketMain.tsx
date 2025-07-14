import styled from "styled-components";

export default function BasketMain() {
  return (
    <BasketMainStyled>
      <div className="bloc">
        <p>Total</p>
        <p>0,00 €</p>
      </div>
      <div className="main">
        <p>Votre commande est vide</p>
      </div>
      <div className="bloc" />
    </BasketMainStyled>
  );
}

const BasketMainStyled = styled.div`
  background: #f5f5f7;
  width: 350px;
  height: 80vh;
  border-bottom-left-radius: 15px;
  opacity: 1;
  position: fixed;
  z-index: 1000;
  display: flex;
  flex-direction: column;

  .bloc {
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
  }

  .main {
    flex: 1;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      font-family: Amatic SC;
      font-size: 36px;
      line-height: 72px;
      color: #747b91;
    }
  }
`;
