import { useContext } from "react";
import { MenuContext } from "../../../../../context/MenuContext";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import styled from "styled-components";
import { theme } from "../../../../../theme";

type ListPanelType = {
  isPanelOpen: boolean;
  setIsPanelOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ListPanel({
  isPanelOpen,
  setIsPanelOpen,
}: ListPanelType) {
  const { mode, setMode } = useContext(MenuContext);

  const handleTogglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  const handleSelectMode = (selectedMode: "add" | "edit") => {
    setMode(selectedMode);
    setIsPanelOpen(true);
  };
  return (
    <ListPanelStyled isPanelOpen={isPanelOpen}>
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
    </ListPanelStyled>
  );
}

const ListPanelStyled = styled.div<{ isPanelOpen: boolean }>`
  padding-left: 70px;
  display: flex;
  gap: 1px;

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
