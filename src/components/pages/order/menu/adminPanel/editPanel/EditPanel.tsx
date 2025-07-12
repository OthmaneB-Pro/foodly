import { useContext } from "react";
import styled from "styled-components";
import { MenuContext } from "../../../../../../context/MenuContext";
import EmptyText from "./EmptyText";
import SelectedCard from "./SelectedCard";

export default function EditPanel() {
  const { activeCardId } = useContext(MenuContext);
  return (
    <EditPanelStyled>
      {activeCardId ? <SelectedCard /> : <EmptyText />}
    </EditPanelStyled>
  );
}

const EditPanelStyled = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 110px;
  left: 70px;
`;
