import { FaUserCircle } from "react-icons/fa";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import Profile from "./Profile";
import ToggleButton from "./ToggleButton";
import { useState } from "react";
import { toastNotification } from "./toastNotification";

type NavbarType = {
  username?: string;
};

export default function RightNavbar({ username }: NavbarType) {
  const [isModeAdmin, setIsModeAdmin] = useState(false);

  const handleToggle = () => {
    setIsModeAdmin(!isModeAdmin);
    if (!isModeAdmin) {
      toastNotification();
    }
  };

  return (
    <RightNavbarStyled>
      <ToggleButton
        labelIfUnchecked="Activer le mode Admin"
        labelIfChecked="Désactiver le mode admin"
        onToggle={handleToggle}
        isChecked={isModeAdmin}
      />
      <div className="profile">
        <Profile username={username} />
        <FaUserCircle className="icon" />
      </div>
    </RightNavbarStyled>
  );
}

const RightNavbarStyled = styled.div`
  padding-right: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.colors.greyBlue};
  width: 360px;

  .profile {
    display: flex;
  }
  .icon {
    margin-left: 10px;
    width: ${theme.fonts.P4};
    height: ${theme.fonts.P4};
  }
`;
