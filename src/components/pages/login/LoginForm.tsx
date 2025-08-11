import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import InputValue from "../../reusable-ui/Input";
import { FaUserCircle } from "react-icons/fa";
import Button from "../../reusable-ui/Button";
import { IoIosArrowForward } from "react-icons/io";
import FormTitle from "./FormTitle";
import { RiLockPasswordLine } from "react-icons/ri";
import { loginUser, registerUser } from "../../../api/userApi";
import { MenuContext } from "../../../context/MenuContext";

export default function LoginForm() {
  const { user, setUser } = useContext(MenuContext);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let userWithRole;
    if (user.username == "Othlazdoaz") {
      userWithRole = { ...user, role: "ROLE_ADMIN" };
    } else {
      userWithRole = { ...user, role: "ROLE_USER" };
    }
    try {
      await registerUser(userWithRole);
      navigate(`/order/${user.username}`);
    } catch (err) {
      console.log("L'utilisateur à déjà un compte ", err);
      try {
        await loginUser(userWithRole);
        navigate(`/order/${user.username}`);
      } catch (err) {
        console.log(err);
      }
    }
    setUser(userWithRole);
  };
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setUser((lastUser) => ({ ...lastUser, [name]: value }));
  };
  return (
    <FormStyled onSubmit={handleSubmit}>
      <FormTitle />
      <InputValue
        Icon={<FaUserCircle />}
        onChange={handleChange}
        placeholder="Entrez votre prénom"
        required={true}
        value={user.username}
        type="text"
        name="username"
        className="input-username"
      />

      <InputValue
        Icon={<RiLockPasswordLine />}
        onChange={handleChange}
        placeholder="Entrez votre mot de passe"
        required={true}
        value={user.password}
        type="password"
        name="password"
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

  .input-username {
    margin-bottom: 10px;
  }
`;
