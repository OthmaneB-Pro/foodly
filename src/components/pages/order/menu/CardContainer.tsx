import { useContext } from "react";
import Card from "../../../reusable-ui/Card";
import { formatPrice } from "../../../../utils/maths";
import styled from "styled-components";
import { MenuContext } from "../../../../context/MenuContext";

export default function CardContainer() {
  const { menu, setMenu, isAdmin } = useContext(MenuContext);

  const handleDelete = (idProduct: number) => {
    const deleteProduct = menu.filter((product) => product.id !== idProduct);
    setMenu(deleteProduct);
  };
  return (
    <CardContainerStyled>
      {menu.length > 0 && (
        menu.map((product) => (
          <Card
            key={product.id}
            src={product.imageSource}
            alt={product.title}
            title={product.title}
            price={formatPrice(product.price)}
            onDelete={() => handleDelete(product.id)}
            isAdmin={isAdmin}
          />
        ))
      )}
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
