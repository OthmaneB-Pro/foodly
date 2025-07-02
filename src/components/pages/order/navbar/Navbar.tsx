import { FaUserCircle } from "react-icons/fa";
import Logo from "../../../reusable-ui/Logo";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../../theme";
import NavbarLogo from "./NavbarLogo";

type NavbarType = {
  username?: string;
};

export default function Navbar({ username }: NavbarType) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/`);
  };
  return (
    <NavbarStyled>
      <NavbarLogo />
      <div className="rightNavbar">
        <div className="user">
          <p>
            Hey, <span className="username"> {username}</span>
          </p>
          <button onClick={handleClick}>Se déconnecter</button>
        </div>
        <FaUserCircle className="icon" />
      </div>
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  background: ${theme.colors.white};
  width: 1400px;
  height: 98px;
  border-radius: 15px 15px 0px 0px;
  z-index: 1;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .rightNavbar {
    margin-right: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${theme.colors.greyBlue};
    width: 120px;
    .user {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;

      .username {
        color: ${theme.colors.primary};
        font-weight: ${theme.weights.bold};
      }
    }
    p {
      font-size: 14px;
      margin-bottom: 4px;
      margin-top: 0px;
    }
    button {
      background: none;
      border: none;
      font-size: 10px;
      padding: 0;
      color: ${theme.colors.greyBlue};
      cursor: pointer;
      &:hover {
        text-decoration: underline;
        text-underline-offset: 3px;
      }
    }
    .icon {
      width: 36px;
      height: 36px;
    }
  }
`;
