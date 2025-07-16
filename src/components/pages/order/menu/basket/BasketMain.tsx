import styled from "styled-components";
import EmptyBasket from "./basketMenu/EmptyBasket";

export default function BasketMain() {
  return (
    <BasketMainStyled>
      <EmptyBasket />
    </BasketMainStyled>
  );
}

const BasketMainStyled = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
`;
