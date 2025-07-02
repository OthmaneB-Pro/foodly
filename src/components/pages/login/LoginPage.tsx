import styled from "styled-components";
import LoginForm from "./LoginForm";
import LoginLogo from "../../reusable-ui/Logo";

export default function LoginPage() {
  return (
    <LoginPageStyled>
      <LoginLogo />
      <LoginForm />
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("img/burger-background.jpg") center / cover no-repeat;
  background-blend-mode: darken;
  height: 100vh;
`;
