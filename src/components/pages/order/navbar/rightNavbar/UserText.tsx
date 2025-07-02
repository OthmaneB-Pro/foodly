import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../../../theme";

type UserTextType = {
  username?: string;
};
export default function UserText({ username }: UserTextType) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/`);
  };

  return (
    <UserTextStyled>
      <p>
        Hey, <span>{username}</span>
      </p>
      <button onClick={handleClick}>Se déconnecter</button>
    </UserTextStyled>
  );
}

const UserTextStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  span {
    color: ${theme.colors.primary};
    font-weight: ${theme.weights.bold};
  }

  p {
    font-size: 14px;
    margin-bottom: 4px;
    margin-top: 0px;
  }
  button {
    background: none;
    border: none;
    font-size: 10px;
    padding: 0;
    color: ${theme.colors.greyBlue};
    cursor: pointer;
    &:hover {
      text-decoration: underline;
      text-underline-offset: 3px;
    }
  }
`;
