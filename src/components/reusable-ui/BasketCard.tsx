import { MdDeleteForever } from "react-icons/md";
import styled from "styled-components";
import Sticker from "./Sticker";

type BasketCardType = {
  title: string;
  price: string;
  quantity: number;
  img: string;
  alt: string;
  onDeleteBasket: () => void;
  isAdmin: boolean;
  onEditBasket: () => void;
  isActive?: boolean;
  isAdvertised : boolean;
};

export default function BasketCard({
  title,
  price,
  quantity,
  img,
  alt,
  onDeleteBasket,
  isAdmin,
  onEditBasket,
  isActive,
  isAdvertised,
}: BasketCardType) {
  return (
    <BasketCardStyled
      onClick={onEditBasket}
      className={`${isAdmin ? "click" : ""} ${isActive ? "active" : ""}`}
    >
      <img src={img} alt={alt}></img>
      {isAdvertised && <Sticker/>}
      <div className="info">
        <div className="left-info">
          <h3>{title}</h3>
          <span>{price}</span>
        </div>
        <div className="right-info">
          <span>x {quantity}</span>
        </div>
      </div>
      <button onClick={onDeleteBasket}>
        <MdDeleteForever />
      </button>
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

  &.click {
    cursor: pointer;
  }
  &.click.active {
    background: #ffa01b;
    span {
      color: white;
    }
  }

  img {
    width: 85px;
    height: 70px;
    object-fit: contain;
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
      width: 110px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
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
  button {
    position: absolute;
    opacity: 0;
    left: 258px;
    width: 76px;
    height: 86px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border: none;
    cursor: pointer;
    background: #e25549;
    &:hover {
      svg {
        color: black;
      }
    }
    &:active {
      svg {
        color: white;
      }
    }
    svg {
      width: 24px;
      height: 24px;
      color: white;
    }
  }

  &:hover {
    button {
      opacity: 1;
    }
  }
`;
