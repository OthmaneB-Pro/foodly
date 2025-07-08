import { FaHamburger } from "react-icons/fa";
import Input from "../../../../../reusable-ui/Input";
import Button from "../../../../../reusable-ui/Button";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import { FiCheck } from "react-icons/fi";
import styled from "styled-components";
import { useContext, useState } from "react";
import { MenuContext } from "../../../../../../context/MenuContext";
import type { MenuType } from "../../../../../../fakeData/MenuType";

export default function AddPanel() {
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
        <div className="button-text">
          <Button label="Ajouter un nouveau produit au menu" />
          <p>
            <FiCheck /> Ajouté avec succès !
          </p>
        </div>
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

  .button-text {
    display: flex;
    align-items: center;
    height: 35px;
    gap: 5px;
    margin-top: 8px;

    p {
      color: #60bd4f;
      margin-left: 10px;
      display: flex;
      align-items: center;

      svg {
        border: 1px solid #60bd4f;
        border-radius: 100%;
        width: 18px;
        height: 18px;
        margin-right: 5px;
      }
    }

    button {
      width: 275px;
      height: 35px;
      background: #60bd4f;
      border-color: #60bd4f;
      font-size: 12px;
      margin: 0px;

      &:hover {
        color: #60bd4f;
        background-color: white;
      }
      &:active {
        background-color: #60bd4f;
        color: white;
      }
    }
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
