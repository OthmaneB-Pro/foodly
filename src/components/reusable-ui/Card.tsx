import styled from "styled-components";
import { theme } from "../../theme";

type CardType = {
  src: string;
  alt: string;
  title: string;
  price: string;
};

export default function Card({ src, alt, title, price }: CardType) {
  return (
    <CardStyled>
      <img src={src} alt={alt} />
      <div className="text">
        <h2>{title}</h2>
        <div className="price-button">
          <p>{price}</p>
          <button>Ajouter</button>
        </div>
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  width: 240px;
  height: 330px;
  border-radius: 15px;
  background-color: ${theme.colors.white};
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);

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
`;
