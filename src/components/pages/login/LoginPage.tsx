import { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`Bonjour  ${username}`);
    setUsername("");
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Bienvenue chez nous !</h2>
      <h3>Connectez-vous</h3>

      <input
        value={username}
        onChange={handleChange}
        placeholder="Entrez votre prénom"
        type="text"
        required
      />
      <button>Accédez à votre espace</button>
    </form>
  );
}
