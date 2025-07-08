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
  
`;
