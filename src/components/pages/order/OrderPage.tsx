import { useNavigate, useParams } from "react-router-dom";

export default function OrderPage() {
  const navigate = useNavigate();
  const {username} = useParams()

  const handleClick = () => {
    navigate(`/`);
  };
  return (
    <div>
      <h1>Bonjour {username} </h1>
      <button onClick={handleClick}>Déconnexion</button>
    </div>
  );
}
