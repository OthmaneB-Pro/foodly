import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import { logout } from "../../../../../api/userApi";

type ProfileType = {
  username?: string;
};
export default function Profile({ username }: ProfileType) {
  const navigate = useNavigate();
  const handleClick = () => {
    try{
      logout();
      navigate(`/`);
    }
    catch(err){
      console.error("Erreur lors de la déconnexion", err)
    }
    
  };

  return (
    <ProfileStyled>
      <p>
        Hey, <span>{username}</span>
      </p>
      <button onClick={handleClick}>Se déconnecter</button>
    </ProfileStyled>
  );
}

const ProfileStyled = styled.div`
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
