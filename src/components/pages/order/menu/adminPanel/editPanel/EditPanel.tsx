import { useContext } from "react";
import { HiCursorClick } from "react-icons/hi";
import styled from "styled-components";
import { MenuContext } from "../../../../../../context/MenuContext";

export default function EditPanel() {
  const { activeCardId, selectedProduct } = useContext(MenuContext);
  return (
    <EditPanelStyled>
      {activeCardId ? (
        <div>
          <p>{selectedProduct?.title}</p>
          <p>{selectedProduct?.imageSource}</p>
          <p>{selectedProduct?.price}</p>
        </div>
      ) : (
        <p>
          Cliquer sur un produit pour le modifier <HiCursorClick />
        </p>
      )}
    </EditPanelStyled>
  );
}

const EditPanelStyled = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 110px;
  left: 70px;

  p {
    font-family: Amatic SC;
    font-weight: 400;
    font-style: Regular;
    font-size: 24px;
    color: #747b91;
  }
`;
