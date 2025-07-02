import styled from "styled-components";
import { theme } from "../../theme";

type ButtonType = {
  text: string;
  Icon: React.ReactElement;
};

export default function Button({ text, Icon }: ButtonType) {
  return (
    <ButtonStyled>
      {text} {Icon && Icon}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.primary_burger};
  color: ${theme.colors.white};

  border: 1px solid ${theme.colors.primary_burger};
  border-radius: ${theme.borderRadius.round};
  margin-top: 18px;

  height: 53px;
  width: 400px;

  font-size: ${theme.fonts.P0};
  font-weight: ${theme.weights.bold};
  transition: all 0.1s ease-in-out;
  svg {
    margin-left: 10px;
    width: 15px;
    height: 15px;
  }

  &:hover {
    cursor: pointer;
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary_burger};
  }
  &:active {
    background-color: ${theme.colors.primary_burger};
    color: ${theme.colors.white};
  }
`;
