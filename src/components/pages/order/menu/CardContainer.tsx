import { useContext } from "react";
import Card from "../../../reusable-ui/Card";
import { formatPrice } from "../../../../utils/maths";
import styled from "styled-components";
import { MenuContext } from "../../../../context/MenuContext";
import type { MenuType } from "../../../../fakeData/MenuType";
import { theme } from "../../../../theme";

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
    handleAddBasket,
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
              onAddBasket={() => handleAddBasket(product)}
              isAdvertised={cardData.isAdvertised}
            />
          );
        })}
    </CardContainerStyled>
  );
}

const CardContainerStyled = styled.div`
  padding: 50px 89px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 76px;
  row-gap: 60px;
  min-height: 85vh;
  margin-left: 350px;
  box-shadow: ${theme.shadows.strong};
`;
