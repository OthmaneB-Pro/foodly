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
 
`;
