import styled from "styled-components";
import { theme } from "../../../../../../theme";

export default function TextEdit() {
  return (
    <TextEditStyled>
      Cliquer sur un produit du menu pour le modifier <span>en temps réel</span>
    </TextEditStyled>
  );
}

const TextEditStyled = styled.p`
  color: ${theme.colors.primary};
  font-family: Open Sans;
  span {
    text-decoration: underline 1px;
  }
`;
