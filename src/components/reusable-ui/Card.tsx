import styled from "styled-components";
import { theme } from "../../theme";
import Button from "./Button";
import { TiDelete } from "react-icons/ti";
import Ribbon from "./Ribbon";

type CardType = {
  src: string;
  alt: string;
  title: string;
  price: string;
  onDelete: () => void;
  isAdmin: boolean;
  isActive?: boolean;
  onToggleActive?: () => void;
  onAddBasket: () => void;
  isAvailable : boolean;
  isAdvertised: boolean;
};

export default function Card({
  src,
  alt,
  title,
  price,
  onDelete,
  isAdmin,
  isActive = false,
  onToggleActive,
  onAddBasket,
  isAvailable,
  isAdvertised,
}: CardType) {
  return (
    <CardStyled
      className={`${isAdmin ? "admin" : ""} ${isActive ? "active" : ""}`}
      onClick={isAdmin ? onToggleActive : undefined}
    >
      <div className="available">{isAvailable && <img src="/img/stock-epuise.png" />}</div>
      {isAdvertised && <Ribbon label="Nouveau" />}
      {isAdmin && (
        <button onClick={onDelete} className="delete-button">
          <TiDelete />
        </button>
      )}
      <img src={src} alt={alt} />
      <div className="text">
        <h2>{title}</h2>
        <div className="price-button">
          <p>{price}</p>
          <Button onClick={onAddBasket} label="Ajouter" />
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
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .available{
    position: absolute;
    z-index: 1;
    box-shadow: -8px 8px 20px 0px #00000033 transparent;
    background-color: rgba(255, 255, 255, 0.6);
    width: 240px;
    height: 330px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;

  }
  .delete-button {
    width: 30px;
    height: 30px;
    background: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 15px;
    left: 195px;
    padding: 0;

    svg {
      cursor: pointer;
      width: 30px;
      height: 30px;
      color: #ffa01b;

      &:hover {
        color: #e25549;
      }
    }
  }

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
      white-space: nowrap;
      text-overflow: ellipsis;
      width: 190px;
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
        margin: 0;
        font-size: 11px;
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

  &.admin:hover {
    cursor: pointer;
    transform: scale(1.05);
    box-shadow: 0px 0px 8px 0px #ff9a23;
  }

  &.admin.active {
    background: #ffa01b;

    svg,
    p {
      color: white;
    }

    .price-button button {
      background: white;
      color: #ffa01b;
    }
    svg:hover {
      color: #e25549;
      &:active {
        color: white;
      }
    }
  }
`;
