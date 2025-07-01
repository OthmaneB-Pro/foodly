import styled from "styled-components";
import { theme } from "../../../theme";

export default function FormTitle() {
  return (
    <FormTitleStyled>
      <h2>Bienvenue chez nous !</h2>
      <div className="rod" />
      <h3>Connectez-vous</h3>
    </FormTitleStyled>
  );
}

const FormTitleStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: ${theme.fonts.P5};
  }
  .rod {
    height: 3px;
    width: 400px;
    background: #f56a2c;
  }
  h3 {
    font-size: ${theme.fonts.P4};
    margin-bottom: 18px;
  }
`;
