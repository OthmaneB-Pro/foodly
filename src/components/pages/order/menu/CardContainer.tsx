import { useContext, useState } from "react";
import Card from "../../../reusable-ui/Card";
import { formatPrice } from "../../../../utils/maths";
import styled from "styled-components";
import { MenuContext } from "../../../../context/MenuContext";

export default function CardContainer() {
  const { menu, isAdmin, handleDelete, setMode, setIsPanelOpen } = useContext(MenuContext);
  const [activeCardId, setActiveCardId] = useState<number | null>(null);

  const handleToggleActive = (id: number) => {
    setActiveCardId((prev) => (prev === id ? null : id));
    setMode("edit");
    setIsPanelOpen(true);
  };

  return (
    <CardContainerStyled>
      {menu.length > 0 &&
        menu.map((product) => (
          <Card
            key={product.id}
            src={product.imageSource}
            alt={product.title}
            title={product.title}
            price={formatPrice(product.price)}
            onDelete={() => handleDelete(product.id)}
            isAdmin={isAdmin}
            isActive={activeCardId === product.id}
            onToggleActive={() => handleToggleActive(product.id)}
          />
        ))}
    </CardContainerStyled>
  );
}

const CardContainerStyled = styled.div`
  padding: 50px 92.5px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 85px;
  row-gap: 60px;
  min-height: 85vh;
`;
