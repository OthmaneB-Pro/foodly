import { FaUserCircle } from "react-icons/fa";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import Profile from "./Profile";
import ToggleButton from "./ToggleButton";
import { useContext } from "react";
import { toastNotification } from "./toastNotification";
import { MenuContext } from "../../../../../context/MenuContext";

export default function RightNavbar() {
  const { isAdmin, setIsAdmin, user } = useContext(MenuContext);

  const handleToggle = () => {
    setIsAdmin(!isAdmin);
    if (!isAdmin) {
      toastNotification();
    }
  };

  return (
    <RightNavbarStyled>
      {user.role == "" ? (
        <ToggleButton
          labelIfUnchecked="Activer le mode Admin"
          labelIfChecked="Désactiver le mode admin"
          onToggle={handleToggle}
          isChecked={isAdmin}
        />
      ) : (
        <div className="role_admin"/>
      )}
      <div className="profile">
        <Profile />
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
  .role_admin{
    margin-left: 200px;
  }
`;
