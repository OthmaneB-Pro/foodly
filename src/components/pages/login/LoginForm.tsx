import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import InputValue from "../../reusable-ui/Input";
import { FaUserCircle } from "react-icons/fa";
import Button from "../../reusable-ui/Button";
import { IoIosArrowForward } from "react-icons/io";
import FormTitle from "./FormTitle";

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
      <FormTitle />

      <InputValue
        Icon={<FaUserCircle />}
        onChange={handleChange}
        placeholder="Entrez votre prénom"
        required={true}
        value={username}
        type="text"
      />
      <Button label="Accéder à mon espace" Icon={<IoIosArrowForward />} />
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
`;

