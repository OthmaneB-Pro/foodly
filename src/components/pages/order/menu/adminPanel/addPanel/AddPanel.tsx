import { FaHamburger } from "react-icons/fa";
import Input from "../../../../../reusable-ui/Input";
import Button from "../../../../../reusable-ui/Button";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import { FiCheck } from "react-icons/fi";
import styled from "styled-components";

export default function AddPanel() {
  const handleChange = () => {};
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <AddPanelStyled onSubmit={handleSubmit}>
      <div className="image-container">
        <img src="../img/coming-soon.png" alt="Aucune Image" />
      </div>

      <div>
        <div className="right-input">
          <Input
            placeholder="Nom du produit (ex: Super Burger)"
            Icon={<FaHamburger />}
            type="text"
            value=""
            onChange={handleChange}
            className="input"
          />
          <Input
            placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
            Icon={<BsFillCameraFill />}
            type="text"
            value=""
            onChange={handleChange}
            className="input"
          />
          <Input
            placeholder="Prix"
            Icon={<MdOutlineEuro />}
            type="text"
            value=""
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
    background: red;
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

  .button-text{
    display: flex;
    align-items: center;
    height: 35px;
    gap: 5px;
    margin-top: 8px;

    p{
        color: #60bd4f;
        margin-left: 10px;
        display: flex;
        align-items: center;

        svg{
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
    width: 215px;
    height: 120px;
    border: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100px;
    }
  }
`;
