import { useContext, useState } from "react";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import Card from "../../../reusable-ui/Card";
import { formatPrice } from "../../../../utils/maths";
import styled from "styled-components";
import { MenuContext } from "../../../../context/MenuContext";

export default function CardContainer() {
  const [menu, setMenu] = useState(fakeMenu2);
  const { isAdmin } = useContext(MenuContext);

  return (
    <CardContainerStyled>
      {menu.length > 0
        ? menu.map((fakeData) => (
            <Card
              key={fakeData.id}
              src={fakeData.imageSource}
              alt={fakeData.title}
              title={fakeData.title}
              price={formatPrice(fakeData.price)}
              onDelete={() => {}}
              isAdmin={isAdmin}
            />
          ))
        : "C'est vide"}
    </CardContainerStyled>
  );
}

const CardContainerStyled = styled.div`
  padding: 50px 92.5px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 85px;
  row-gap: 60px;
`;
