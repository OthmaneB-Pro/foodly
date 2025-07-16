import styled from "styled-components";
import BasketCard from "../../../../reusable-ui/BasketCard";

export default function BasketMain() {
  return (
    <BasketMainStyled>
      <BasketCard/>
      
    </BasketMainStyled>
  );
}

const BasketMainStyled = styled.div`
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
`;
