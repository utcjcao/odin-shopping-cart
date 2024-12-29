import { Link } from "react-router-dom";

function Header({ cartItems }) {
  return (
    <div id="header">
      <div id="title">your store title</div>
      <nav>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/cart">cart</Link>
          </li>
          <li>
            <Link to="/store">store</Link>
          </li>
        </ul>
      </nav>
      <div>{Object.values(cartItems).reduce((a, b) => a + b, 0)}</div>
    </div>
  );
}

export default Header;
