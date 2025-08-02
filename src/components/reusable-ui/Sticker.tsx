import styled from "styled-components"
import { theme } from "../../theme"

type StickerType = {
  label : string;
  className : string;
}

export default function Sticker({ label = "new", className } : StickerType) {
  return <StickerStyled className={className}>{label}</StickerStyled>
}

const StickerStyled = styled.span`
  font-size: 8px;
  padding: 1em;
  width: 15px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${theme.colors.redSecondary};
  border: none;
  color: white;
  text-transform: uppercase;
`
