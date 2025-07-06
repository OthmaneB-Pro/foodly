import { AiOutlinePlus } from "react-icons/ai";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { MdModeEditOutline } from "react-icons/md";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import { useContext, useState } from "react";
import { MenuContext } from "../../../../../context/MenuContext";

export default function AdminPanel() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const { mode, setMode } = useContext(MenuContext);

  const handleTogglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  const handleSelectMode = (selectedMode: "add" | "edit") => {
    setMode(selectedMode);
    setIsPanelOpen(true);
  };

  return (
    <AdminPanelStyled isPanelOpen={isPanelOpen}>
      <div className="button">
        <button
          className={!isPanelOpen ? "dark" : "white"}
          onClick={handleTogglePanel}
        >
          {isPanelOpen ? <FiChevronDown /> : <FiChevronUp />}
        </button>

        <button
          onClick={() => handleSelectMode("add")}
          className={mode === "add" ? "dark" : "white"}
        >
          <AiOutlinePlus />
          <span>Ajouter un produit</span>
        </button>

        <button
          onClick={() => handleSelectMode("edit")}
          className={mode === "edit" ? "dark" : "white"}
        >
          <MdModeEditOutline />
          <span>Modifier un produit</span>
        </button>
      </div>

      {isPanelOpen && (
        <div className="bloc">
          {mode === "add" ? "Ajouter un produit" : "Modifier un produit"}
        </div>
      )}
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div<{ isPanelOpen: boolean }>`
  position: sticky;
  bottom: 0;

  .bloc {
    height: 210px;
    background-color: white;
    border-top: 1px solid #e4e5e9;
    box-shadow: 0px -6px 8px -2px #0000001a;
    padding: 20px;
  }
  .button {
    padding-left: 70px;
    display: flex;
    gap: 1px;
  }
  .white {
    background: ${theme.colors.white};
    color: ${theme.colors.greySemiDark};
    border: 1px solid ${theme.colors.greyLight};
    border-bottom: ${(props) =>
      props.isPanelOpen && "2px solid" + theme.colors.greyLight};

    &:hover {
      border-bottom: 2px solid white;
    }
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
