import styled from "styled-components";
import { theme } from "../../../../theme";
import CardContainer from "./CardContainer.js";
import AdminPanel from "./AdminPanel.js";

export default function Menu() {
  return (
    <MenuStyled>
      <CardContainer />
      <AdminPanel/>
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  width: 1400px;
  min-height: 80vh;
  max-height: 80vh;
  border-radius: 0px 0px 15px 15px;
  box-shadow: ${theme.shadows.strong};
  overflow-y: auto;
  scrollbar-width: none;
  position: relative;
  z-index: 1;
  &::-webkit-scrollbar {
    display: none;
  }
`;
