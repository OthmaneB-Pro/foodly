import styled from "styled-components";
import { theme } from "../../../theme";

export default function LoginLogo() {
  return (
    <LoginLogoStyled>
      <p>CRAZEE</p>
      <img src="img/logo-orange.png" alt="burger-logo" />
      <p>BURGER</p>
    </LoginLogoStyled>
  );
}

const LoginLogoStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 110px;
  font-family: "Amatic SC";
  color: ${theme.colors.primary};
  img {
    width: 200px;
    height: 150px;
  }
`;
