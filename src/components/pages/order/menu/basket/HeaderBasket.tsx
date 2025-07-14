import styled from "styled-components";

export default function HeaderBasket() {
  return <HeaderBasketStyled />;
}

const HeaderBasketStyled = styled.div`
  background: black;
  color: #ffa01b;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 16px;
  border-bottom-left-radius: 15px;
`;
