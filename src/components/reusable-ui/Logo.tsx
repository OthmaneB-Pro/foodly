import styled from "styled-components";
import { theme } from "../../theme";

export default function Logo() {
  return (
    <LogoStyled>
      <p>CRAZEE</p>
      <img src="../img/logo-orange.png" alt="burger-logo" />
      <p>BURGER</p>
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  font-weight: ${theme.weights.bold};
  font-size: 110px;
  font-family: "Amatic SC";
  color: ${theme.colors.primary};
  letter-spacing: 1.5px;
  height: 200px;
  p {
    padding: 10px;
  }
  img {
    width: 200px;
    height: 150px;
  }
`;
