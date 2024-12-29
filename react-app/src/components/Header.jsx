import { Link } from "react-router-dom";
import "../styles/header.css";
import { useItemContext } from "./ItemContext";

function Header() {
  const { cartItems } = useItemContext();
  return (
    <div id="header">
      <div className="header-title">bing bong store</div>
      <nav>
        <ul>
          <li className="header-list-item">
            <Link to="/">home</Link>
          </li>

          <li className="header-list-item">
            <Link to="/store">store</Link>
          </li>
          <li className="header-list-item">
            <Link to="/cart">cart</Link>
          </li>
        </ul>
      </nav>
      <div>{Object.values(cartItems).reduce((a, b) => a + b, 0)} items</div>
    </div>
  );
}

export default Header;
