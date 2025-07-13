import { useContext } from "react";
import Card from "../../../reusable-ui/Card";
import { formatPrice } from "../../../../utils/maths";
import styled from "styled-components";
import { MenuContext } from "../../../../context/MenuContext";
import type { MenuType } from "../../../../fakeData/MenuType";

export default function CardContainer() {
  const {
    menu,
    isAdmin,
    handleDelete,
    setMode,
    setIsPanelOpen,
    activeCardId,
    setActiveCardId,
    setSelectedProduct,
    selectedProduct,
  } = useContext(MenuContext);

  const handleToggleActive = (product: MenuType) => {
    setActiveCardId((prev) => (prev === product.id ? null : product.id));
    setMode("edit");
    setSelectedProduct(product);
    setIsPanelOpen(true);
  };

  return (
    <CardContainerStyled>
      {menu.length > 0 &&
        menu.map((product) => {
          const isActive = activeCardId === product.id;
          const cardData =
            isActive && selectedProduct ? selectedProduct : product;

          return (
            <Card
              key={product.id}
              src={cardData.imageSource}
              alt={cardData.title}
              title={cardData.title}
              price={formatPrice(cardData.price)}
              onDelete={() => handleDelete(product.id)}
              isAdmin={isAdmin}
              isActive={isActive}
              onToggleActive={() => handleToggleActive(product)}
            />
          );
        })}
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
