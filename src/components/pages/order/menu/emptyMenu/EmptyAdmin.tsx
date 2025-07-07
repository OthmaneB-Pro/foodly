import styled from "styled-components";
import Button from "../../../../reusable-ui/Button";
import { useContext } from "react";
import { MenuContext } from "../../../../../context/MenuContext";
import { fakeMenu2 } from "../../../../../fakeData/fakeMenu";

export default function EmptyAdmin() {
  const { setMenu } = useContext(MenuContext);
  return (
    <EmptyStyled>
      <p className="title">Le menu est vide ?</p>
      <p>Cliquez ci-dessous pour le réinitialiser</p>
      <Button
        label="Générer de nouveaux produits"
        onClick={() => setMenu(fakeMenu2)}
      />
    </EmptyStyled>
  );
}

const EmptyStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1400px;
  height: 85vh;

  color: #747b91;
  .title {
    font-weight: 700;
    margin: 0;
  }
  p {
    font-family: "Amatic SC";
    font-size: 36px;
    margin: 21px;
  }
  button {
    display: flex;
    width: 225px;
    height: 50px;
    margin-top: 10px;
    font-size: 12px;
  }
`;
