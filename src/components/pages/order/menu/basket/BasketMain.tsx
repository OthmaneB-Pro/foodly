import styled from "styled-components";
import EmptyBasket from "./basketMenu/EmptyBasket";
import { useContext } from "react";
import { MenuContext } from "../../../../../context/MenuContext";
import BasketCardContainer from "./basketMenu/BasketCardContainer";

export default function BasketMain() {
  const { basket } = useContext(MenuContext);
  return (
    <BasketMainStyled>
      {basket.length !== 0 ? <BasketCardContainer /> : <EmptyBasket />}
    </BasketMainStyled>
  );
}

const BasketMainStyled = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;

  scrollbar-width: none;
  -ms-overflow-style: none;
`;
