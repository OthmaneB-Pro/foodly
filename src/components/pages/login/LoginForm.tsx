import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import InputValue from "../../reusable-ui/InputValue";
import { FaUserCircle } from "react-icons/fa";
import Button from "../../reusable-ui/Button";
import { IoIosArrowForward } from "react-icons/io";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/order/${username}`);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  return (
    <FormStyled onSubmit={handleSubmit}>
      <h2>Bienvenue chez nous !</h2>
      <div className="rod" />
      <h3>Connectez-vous</h3>

      <InputValue Logo={<FaUserCircle />} onChange={handleChange} placeholder="Entrez votre prénom" required={true} value={username} type="text" />
      <Button text="Accéder à mon espace" Logo={<IoIosArrowForward />} />
    </FormStyled>
  );
}

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  
  font-family: "Amatic SC";
  font-weight: ${theme.weights.bold};

  h2 {
    font-size: ${theme.fonts.P5};
  }
  .rod {
    height: 3px;
    width: 400px;
    background: #F56A2C;
  }
  h3 {
    font-size: ${theme.fonts.P4};
    margin-bottom: 18px;
  }

 
`;
