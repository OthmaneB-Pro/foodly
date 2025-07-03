import styled from "styled-components";
import { theme } from "../../../../theme";

export default function Menu() {
  return (
    <MenuStyled>
      <div className="card-container">
        <div className="card">
          <img src="/img/burger-bacon-egg.png" alt="burger-bacon-egg" />
          <div className="text">
            <h2>BURGER SMOKE BBQ</h2>
            <div className="price-button">
              <p>5,60€</p>
              <button>Ajouter</button>
            </div>
          </div>
        </div>
        <div className="card">
          <img src="/img/burger-bacon-egg.png" alt="burger-bacon-egg" />
          <div className="text">
            <h2>BURGER SMOKE BBQ</h2>
            <div className="price-button">
              <p>5,60€</p>
              <button>Ajouter</button>
            </div>
          </div>
        </div>
        <div className="card">
          <img src="/img/burger-bacon-egg.png" alt="burger-bacon-egg" />
          <div className="text">
            <h2>BURGER SMOKE BBQ</h2>
            <div className="price-button">
              <p>5,60€</p>
              <button>Ajouter</button>
            </div>
          </div>
        </div>
        <div className="card">
          <img src="/img/burger-bacon-egg.png" alt="burger-bacon-egg" />
          <div className="text">
            <h2>BURGER SMOKE BBQ</h2>
            <div className="price-button">
              <p>5,60€</p>
              <button>Ajouter</button>
            </div>
          </div>
        </div>
        <div className="card">
          <img src="/img/burger-bacon-egg.png" alt="burger-bacon-egg" />
          <div className="text">
            <h2>BURGER SMOKE BBQ</h2>
            <div className="price-button">
              <p>5,60€</p>
              <button>Ajouter</button>
            </div>
          </div>
        </div>
        <div className="card">
          <img src="/img/burger-bacon-egg.png" alt="burger-bacon-egg" />
          <div className="text">
            <h2>BURGER SMOKE BBQ</h2>
            <div className="price-button">
              <p>5,60€</p>
              <button>Ajouter</button>
            </div>
          </div>
        </div>
      </div>
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  width: 1400px;
  height: 80vh;
  border-radius: 0px 0px 15px 15px;
  box-shadow: ${theme.shadows.strong};

  .card-container {
    margin-top: 50px;
    margin-left: 92.5px;
    margin-right: 92.5px;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 85px;
    row-gap: 60px;
  }

  .card {
    width: 240px;
    height: 330px;
    border-radius: 15px;
    background-color: ${theme.colors.white};
    box-shadow: -8px 8px 20px 0px #00000033;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .text {
      width: 190px;
      height: 105px;
      display: flex;
      flex-direction: column;
      position: relative;

      padding: 0px 5px 5px 5px;

      h2 {
        font-family: "Amatic SC";
        font-weight: ${theme.weights.bold};
        font-size: 36px;
        line-height: 100%;
        color: ${theme.colors.dark};
        height: 46px;
      }

      .price-button {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 66px;
        position: relative;
        bottom: 20px;

        p {
          color: ${theme.colors.primary};
        }
        button {
          width: 95px;
          height: 38px;
          border-radius: 5px;
          border: 1px solid #ff9f1b;
          background-color: ${theme.colors.primary_burger};
          color: white;
          cursor: pointer;
        }
      }
    }

    img {
      width: 200px;
      height: 145px;
      object-fit: contain;
      position: relative;
      top: 10px;
    }
  }
`;
