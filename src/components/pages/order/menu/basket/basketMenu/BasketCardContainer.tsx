import styled from "styled-components";
import BasketCard from "../../../../../reusable-ui/BasketCard";

export default function BasketCardContainer() {
  return (
    <BasketCardContainerStyled>
      <BasketCard />
    </BasketCardContainerStyled>
  );
}

const BasketCardContainerStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  gap: 20px;
`;
