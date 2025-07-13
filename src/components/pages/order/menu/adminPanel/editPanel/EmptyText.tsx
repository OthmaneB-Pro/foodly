import { HiCursorClick } from "react-icons/hi";
import styled from "styled-components";

export default function EmptyText() {
  return (
    <EmptyTextStyled>
      Cliquer sur un produit pour le modifier <HiCursorClick />
    </EmptyTextStyled>
  );
}

const EmptyTextStyled = styled.p`
  font-family: Amatic SC;
  font-weight: 400;
  font-style: Regular;
  font-size: 24px;
  color: #747b91;
`;
