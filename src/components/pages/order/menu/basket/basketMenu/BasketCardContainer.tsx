import styled from "styled-components";
import BasketCard from "../../../../../reusable-ui/BasketCard";
import { useContext } from "react";
import { MenuContext } from "../../../../../../context/MenuContext";
import { formatPrice } from "../../../../../../utils/maths";
import type { MenuType } from "../../../../../../fakeData/MenuType";

export default function BasketCardContainer() {
  const {
    basket,
    handleDeleteBasket,
    isAdmin,
    selectedProduct,
    setSelectedProduct,
    setActiveCardId,
    setIsPanelOpen,
    setMode,
    activeCardId,
  } = useContext(MenuContext);

  const handleEditBasket = (basketProduct: MenuType) => {
    setActiveCardId(basketProduct.id);
    setSelectedProduct(basketProduct);
    setIsPanelOpen(true);
    setMode("edit");
  };

  return (
    <BasketCardContainerStyled>
      {basket.map((basketProduct) => {
        const cardData =
          basketProduct.id === activeCardId && selectedProduct
            ? selectedProduct
            : basketProduct;
        return (
          <BasketCard
            key={basketProduct.id}
            title={cardData.title}
            price={formatPrice(cardData.price)}
            quantity={basketProduct.quantity}
            alt={basketProduct.title}
            img={cardData.imageSource}
            onDeleteBasket={() => handleDeleteBasket(basketProduct.id)}
            onEditBasket={() => handleEditBasket(basketProduct)}
            isAdmin={isAdmin}
            isActive={basketProduct.id === activeCardId}
          />
        );
      })}
    </BasketCardContainerStyled>
  );
}

const BasketCardContainerStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  gap: 20px;
`;
