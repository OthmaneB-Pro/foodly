import { FiCheck } from "react-icons/fi";
import Button from "../../../../../reusable-ui/Button";
import styled from "styled-components";

type ButtonTextType = {
  isSubmit: boolean;
};

export default function ButtonText({ isSubmit }: ButtonTextType) {
  return (
    <ButtonTextStyled>
      <Button label="Ajouter un nouveau produit au menu" />

      {isSubmit && (
        <p>
          <FiCheck /> Ajouté avec succès !
        </p>
      )}
    </ButtonTextStyled>
  );
}

const ButtonTextStyled = styled.div`
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
`;
