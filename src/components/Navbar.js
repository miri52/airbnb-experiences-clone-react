import logo from "../images/airbnb-logo.png";

function Navbar() {
  return (
    <nav className="nav">
      <img className="nav__logo" src={logo} alt="airbnb logo" />
    </nav>
  );
}

export default Navbar;
