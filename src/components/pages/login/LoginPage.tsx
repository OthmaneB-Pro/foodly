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
  margin: 0;
  align-items: center;
   background-image: 
    linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), 
    url("img/burger-background.jpg");                        
  background-blend-mode: darken;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;

  box-shadow: 0px 4px 4px 0px #00000040; 
  overflow: hidden;
`;
