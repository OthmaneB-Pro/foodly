import { FaUserCircle } from "react-icons/fa";
import Logo from "../../../reusable-ui/Logo";
import { useNavigate } from "react-router-dom";

type NavbarType = {
    username? : string;
}

export default function Navbar({username} : NavbarType) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/`);
  };
  return (
    <div className="navbar">
      <div className="logo" onClick={() => window.location.reload()}>
        <Logo />
      </div>
      <div className="rightNavbar">
        <div className="user">
          <p>
            Hey, <span className="username"> {username}</span>
          </p>
          <button onClick={handleClick}>Se déconnecter</button>
        </div>
        <FaUserCircle className="icon" />
      </div>
    </div>
  );
}
