import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>ErrorPage</h1>
      <button onClick={handleClick}>Retourner vers la page d'accueil</button>
    </div>
  );
}
