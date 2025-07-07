import { useContext } from "react";
import { MenuContext } from "../../../../../context/MenuContext";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import ButtonPanel from "./ButtonPanel";
import { getButtonLists } from "./getButtonLists";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

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

  const buttons = getButtonLists(mode, handleSelectMode);

  return (
    <ListPanelStyled isPanelOpen={isPanelOpen}>
      <ButtonPanel
        Icon={isPanelOpen ? <FiChevronDown /> : <FiChevronUp />}
        className={!isPanelOpen ? "dark" : "white"}
        onClick={handleTogglePanel}
      />

      {buttons.map((btn, index) => (
        <ButtonPanel
          key={index}
          label={btn.label}
          Icon={btn.Icon}
          className={btn.className}
          onClick={btn.onClick}
        />
      ))}
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
`;
