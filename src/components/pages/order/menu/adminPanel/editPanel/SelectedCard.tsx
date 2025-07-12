import { useContext } from "react";
import { MenuContext } from "../../../../../../context/MenuContext";
import styled from "styled-components";
import RightInput from "../addPanel/RightInput";
import type { MenuType } from "../../../../../../fakeData/MenuType";

export default function SelectedCard() {
  const { selectedProduct, setSelectedProduct } = useContext(MenuContext);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setSelectedProduct((prevValues) => ({ ...prevValues, [name]: value } as MenuType));
    
  }
  return (
    <SelectedCardStyled>
      <RightInput inputValues={selectedProduct as MenuType} onChange={handleChange} />
    </SelectedCardStyled>
  );
}

const SelectedCardStyled = styled.div`

`
