import { Link } from "react-router-dom";
import { useUserContext } from "../Context/UserContext";
import Logo from "./logo.jsx";


function Header() {
const { Username } = useUserContext();
  return (
    <header className="header">

      <div className="logo">
        <Logo/>
          ClinScope
      </div>

      <nav className="navigation">
        <a href="#">Home</a>
        <a href="#">Movies</a>
        <a href="#">TV Shows</a>
        <a href="#">Discover</a>
        <a href="#">{Username}</a>

      </nav>

      <div className="header-actions">
        <button>Search</button>
        <Link to="/register">
          <button>Register</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;