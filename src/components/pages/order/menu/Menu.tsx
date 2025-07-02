import styled from "styled-components";
import { theme } from "../../../../theme";

export default function Menu() {
  return <MenuStyled></MenuStyled>;
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  width: 1400px;
  height: 80vh;
  border-radius: 0px 0px 15px 15px;
  box-shadow: ${theme.shadows.strong};
`;
