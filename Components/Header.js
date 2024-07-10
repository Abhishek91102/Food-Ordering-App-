import { LOGO_URL } from "../Utils/Constant";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  return (
    <div className="header">
      <div>
        <img className="logo-container" src={LOGO_URL} />
      </div>
      <div className="Nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li><Link to="/Contact">Contact</Link></li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
