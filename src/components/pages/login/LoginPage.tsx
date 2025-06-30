import styled from "styled-components";
import LoginForm from "./LoginForm";
import LoginLogo from "./LoginLogo";

export default function LoginPage() {
  return (
    <LoginPageStyled>
      <LoginLogo />
      <LoginForm />
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.body`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("img/burger-background.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-blend-mode: darken;
  
  height: 100vh;
  overflow: hidden;
 
`;
