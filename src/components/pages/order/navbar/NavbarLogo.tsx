import styled from "styled-components";
import Logo from "../../../reusable-ui/Logo";

export default function NavbarLogo() {
  return (
    <NavbarLogoStyled onClick={() => window.location.reload()}>
      <Logo />
    </NavbarLogoStyled>
  );
}

const NavbarLogoStyled = styled.div`
  width: 0px;
  margin-left: 20px;
  transform: scale(0.4);
  cursor: pointer;
`;
