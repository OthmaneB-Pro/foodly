import styled from "styled-components";
import BasketCard from "../../../../../reusable-ui/BasketCard";
import { useContext } from "react";
import { MenuContext } from "../../../../../../context/MenuContext";
import { formatPrice } from "../../../../../../utils/maths";

export default function BasketCardContainer() {
  const { basket, handleDeleteBasket, isAdmin } = useContext(MenuContext);

  return (
    <BasketCardContainerStyled>
      {basket.map((basketProduct) => (
        <BasketCard
          key={basketProduct.id}
          title={basketProduct.title}
          price={formatPrice(basketProduct.price)}
          quantity={basketProduct.quantity}
          alt={basketProduct.title}
          img={basketProduct.imageSource}
          onDeleteBasket={() => handleDeleteBasket(basketProduct.id)}
          isAdmin={isAdmin}
        />
      ))}
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
