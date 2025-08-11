import styled from "styled-components";
import { theme } from "../../../../theme";
import NavbarLogo from "./NavbarLogo";
import RightNavbar from "./rightNavbar/RightNavbar";

export default function Navbar() {
  return (
    <NavbarStyled>
      <NavbarLogo />
      <RightNavbar />
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
