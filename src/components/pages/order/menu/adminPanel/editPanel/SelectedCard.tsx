import { useContext } from "react";
import { MenuContext } from "../../../../../../context/MenuContext";
import styled from "styled-components";
import RightInput from "../panel/RightInput";
import type { MenuType } from "../../../../../../fakeData/MenuType";
import ImagePreview from "../panel/ImagePreview";
import TextEdit from "./TextEdit";

export default function SelectedCard() {
  const { selectedProduct, setSelectedProduct } = useContext(MenuContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { value, name } = event.target;
    setSelectedProduct(
      (prevValues) => ({ ...prevValues, [name]: value } as MenuType)
    );
  };

  return (
    <SelectedCardStyled>
      <ImagePreview imageSource={selectedProduct?.imageSource as string} />

      <div>
        <RightInput
          inputValues={selectedProduct as MenuType}
          onChange={handleChange}
        />
        <TextEdit />
      </div>
    </SelectedCardStyled>
  );
}

const SelectedCardStyled = styled.div`
  display: flex;
  gap: 20px;
  position: relative;
  bottom: 47px;
  left: 1px;
`;
