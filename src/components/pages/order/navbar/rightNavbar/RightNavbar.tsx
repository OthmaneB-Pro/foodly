import { FaUserCircle } from "react-icons/fa";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import UserText from "./Profile";

type NavbarType = {
  username?: string;
};

export default function RightNavbar({ username }: NavbarType) {
  return (
    <RightNavbarStyled>
      <UserText username={username} />
      <FaUserCircle className="icon" />
    </RightNavbarStyled>
  );
}

const RightNavbarStyled = styled.div`
  margin-right: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.colors.greyBlue};
  width: 120px;

  .icon {
    width: ${theme.fonts.P4};
    height: ${theme.fonts.P4};
  }
`;
