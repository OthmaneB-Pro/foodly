import { FaHamburger } from "react-icons/fa";
import Input from "../../../../../reusable-ui/Input";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import styled from "styled-components";
import { useContext, useState } from "react";
import { MenuContext } from "../../../../../../context/MenuContext";
import type { MenuType } from "../../../../../../fakeData/MenuType";
import ButtonText from "./ButtonText";

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
      {inputValues.imageSource ? (
        <div className="image-container2">
          <img src={inputValues.imageSource} alt="Aucune Image" />
        </div>
      ) : (
        <div className="image-container">
          <p>Aucune Image</p>
        </div>
      )}

      <div>
        <div className="right-input">
          <Input
            placeholder="Nom du produit (ex: Super Burger)"
            Icon={<FaHamburger />}
            type="text"
            value={inputValues.title}
            name="title"
            onChange={handleChange}
            className="input"
          />
          <Input
            placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
            Icon={<BsFillCameraFill />}
            type="text"
            value={inputValues.imageSource}
            name="imageSource"
            onChange={handleChange}
            className="input"
          />
          <Input
            placeholder="Prix"
            Icon={<MdOutlineEuro />}
            type="text"
            value={inputValues.price}
            name="price"
            onChange={handleChange}
            className="input"
          />
        </div>
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

  .input {
    padding: 8px 16px;
    width: 613px;
    background: #f5f5f7;

    input {
      width: 570px;
      background: #f5f5f7;
    }
  }
  .right-input {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .image-container {
    border: 1px solid #e4e5e9;
    border-radius: 5px;
    width: 215px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100px;
    }
    p {
      color: #93a2b1;
    }
  }
  .image-container2 {
    border-radius: 5px;
    width: 215px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 1px;

    img {
      width: 100px;
    }
  }
`;
