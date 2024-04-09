import { Link } from "react-router-dom";

import "./styles.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container half-inline">
        <Link to="/">
          <img className="logo" src="/emumba-logo.png" alt="emumba" />
        </Link>
      </div>
      <div className="links-container half-inline">
        <Link to="/">Home</Link>
        <Link to="/catalogue">Catalogue</Link>
        <Link to="/cart">
          <i className="fa fa-shopping-basket" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
