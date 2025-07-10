import styled from "styled-components";
import { useContext, useState } from "react";
import { MenuContext } from "../../../../../../context/MenuContext";
import type { MenuType } from "../../../../../../fakeData/MenuType";
import ButtonText from "./ButtonText";
import RightInput from "./RightInput";
import ImagePreview from "./ImagePreview";
import { EmptyMenu } from "../../../../../../fakeData/fakeMenu";

export default function AddPanel() {
  const [isSubmit, setIsSubmit] = useState(false);
  const [inputValues, setInputValues] = useState<MenuType>(EmptyMenu);
  const { handleAdd } = useContext(MenuContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setInputValues((prevValues) => ({ ...prevValues, [name]: value }));
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputValues.imageSource === "") {
      inputValues.imageSource = "../img/coming-soon.png";
    }
    setIsSubmit(true);
    setTimeout(() => {
      setIsSubmit(false);
    }, 2000);

    handleAdd(inputValues);
    setInputValues(EmptyMenu);
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
