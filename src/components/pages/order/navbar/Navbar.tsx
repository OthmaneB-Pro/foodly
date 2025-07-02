import styled from "styled-components";
import { theme } from "../../../../theme";
import NavbarLogo from "./NavbarLogo";
import RightNavbar from "./rightNavbar/RightNavbar";

type NavbarType = {
  username?: string;
};

export default function Navbar({ username }: NavbarType) {
  return (
    <NavbarStyled>
      <NavbarLogo />
      <RightNavbar username={username} />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  background: ${theme.colors.white};
  width: 1400px;
  height: 98px;
  border-radius: 15px 15px 0px 0px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
