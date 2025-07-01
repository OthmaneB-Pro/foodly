import styled from "styled-components";
import { theme } from "../../theme";

type ButtonType = {
  text: string;
  Logo: React.ReactElement;
};

export default function Button({ text, Logo }: ButtonType) {
  return (
    <ButtonStyled>
      {text} {Logo && Logo}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.primary_burger};
  color: ${theme.colors.white};

  border: 1px ${theme.colors.primary_burger};
  border-radius: 5px;
  margin-top: 18px;

  height: 53px;
  width: 400px;

  font-size: ${theme.fonts.P0};
  font-weight: ${theme.weights.bold};
  svg {
    margin-left: 10px;
    width: 15px;
    height: 15px;
  }

  &:hover{
    cursor: pointer;
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary_burger};
    border: 10px ${theme.colors.primary_burger};
  }
`;
