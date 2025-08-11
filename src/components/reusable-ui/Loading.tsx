import styled from "styled-components";

type LoadingType = {
  text: string;
};

export default function Loading({ text }: LoadingType) {
  return <LoadingStyled>{text}</LoadingStyled>;
}

const LoadingStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Amatic SC";
  margin-left: 150px;
  width: 1400px;
  height: 80vh;
  font-size: 36px;
  color: #747B91;
`;
