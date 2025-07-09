import styled from "styled-components";
import { useContext, useState } from "react";
import { MenuContext } from "../../../../../../context/MenuContext";
import type { MenuType } from "../../../../../../fakeData/MenuType";
import ButtonText from "./ButtonText";
import RightInput from "./RightInput";
import ImagePreview from "./ImagePreview";

export default function AddPanel() {
  const [isSubmit, setIsSubmit] = useState(false);
  const [inputValues, setInputValues] = useState<MenuType>({
    id: Date.now(),
    title: "",
    imageSource: "",
    price: 0,
    quantity: 1,
    isAvailable: true,
    isAdvertised: false,
  });
  const { setMenu, menu } = useContext(MenuContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setInputValues((prevValues) => ({ ...prevValues, [name]: value }));
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newMenu = [inputValues, ...menu];
    if (inputValues.imageSource.length === 0) {
      inputValues.imageSource = "../img/coming-soon.png";
    }
    setIsSubmit(true);
    setTimeout(() => {
      setIsSubmit(false);
    }, 2000);
    setMenu(newMenu);
  };

  return (
    <AddPanelStyled onSubmit={handleSubmit}>
      <ImagePreview imageSource={inputValues.imageSource} />

      <div>
        <RightInput inputValues={inputValues} onChange={handleChange} />
        <ButtonText isSubmit={isSubmit} />
      </div>
    </AddPanelStyled>
  );
}

const AddPanelStyled = styled.form`
  display: flex;
  gap: 20px;
  position: absolute;
  left: 70px;
`;
