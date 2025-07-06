import { AiOutlinePlus } from "react-icons/ai";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { MdModeEditOutline } from "react-icons/md";
import styled from "styled-components";
import { theme } from "../../../../theme";
import { useState } from "react";

export default function AdminPanel() {
  const [isButtonOpen, setIsButtonOpen] = useState(false);
  const [isButton2Open, setIsButton2Open] = useState(false);
  const [isButton3Open, setIsButton3Open] = useState(false);

  const handleClick = () => {
    setIsButton2Open(true)
    setIsButton3Open(false)
    setIsButtonOpen(true)
  }
  const handleClick2 = () => {
    setIsButton3Open(true)
    setIsButton2Open(false)
    setIsButtonOpen(true)
  }
  return (
    <AdminPanelStyled>
      <button
        className={isButtonOpen ? "white" : "dark"}
        onClick={() => setIsButtonOpen(!isButtonOpen)}
      >
        {isButtonOpen ? <FiChevronDown /> : <FiChevronUp />}
      </button>
      <button
        onClick={handleClick}
        className={isButton2Open ? "dark" : "white"}
      >
        <AiOutlinePlus />
        <span>Ajouter un produit</span>
      </button>
      <button
        onClick={handleClick2}
        className={isButton3Open ? "dark" : "white"}
      >
        <MdModeEditOutline /> <span>Modifier un produit</span>
      </button>
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  position: sticky;
  bottom: 0;
  padding-left: 70px;
  display: flex;
  gap: 1px;

  
  .white {
    background: ${theme.colors.white};
    color: ${theme.colors.greySemiDark};
    border: 1px solid ${theme.colors.greyLight};
  }

  .dark {
    background: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    border: 1px solid ${theme.colors.background_dark};
  }
  button {
    height: 43px;
    border-radius: 5px 5px 0px 0px;
    border-bottom: none;
    padding: 13px 22px 13px 22px;
    display: flex;
    cursor: pointer;
    box-shadow: 0px -6px 8px -2px #0000001a;

    span {
      margin-left: 13px;

      &:hover {
        text-decoration: underline;
      }
    }
    svg {
      width: 16px;
      height: 16px;
    }
  }
`;
