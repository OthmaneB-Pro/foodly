import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function ErrorPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <Wrapper>
      <Title>404</Title>
      <Subtitle>Oups... Page introuvable !</Subtitle>
      <Text>La page que vous cherchez n’existe pas ou a été déplacée.</Text>
      <Button onClick={handleClick}>Retourner à l’accueil 🍔</Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background: linear-gradient(135deg, #fff5f5, #ffe3e3);
`;

const Title = styled.h1`
  font-size: 6rem;
  font-weight: 800;
  color: #f56a2c;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #1d3557;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  font-size: 1.1rem;
  color: #555;
  max-width: 400px;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  padding: 0.8rem 1.6rem;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  background-color: #f56a2c;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(230, 57, 70, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background-color: #f45b15;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(1px);
  }
`;
