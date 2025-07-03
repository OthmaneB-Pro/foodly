import styled from "styled-components";
import { theme } from "../../../../theme";
import Card from "../../../reusable-ui/Card";
import { formatPrice } from "../../../../utils/maths.js";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu.js";

export default function Menu() {
  return (
    <MenuStyled>
      <div className="card-container">
        {fakeMenu2.length > 0
          ? fakeMenu2.map((fakeData) => (
              <Card
                key={fakeData.id}
                src={fakeData.imageSource}
                alt={fakeData.title}
                title={fakeData.title}
                price={formatPrice(fakeData.price)}
              />
            ))
          : "C'est vide"}
      </div>
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  width: 1400px;
  min-height: 80vh;
  max-height: 80vh;
  border-radius: 0px 0px 15px 15px;
  box-shadow: ${theme.shadows.strong};
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  .card-container {
    padding: 50px 92.5px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 85px;
    row-gap: 60px;
  }
`;
