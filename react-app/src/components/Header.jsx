import { Link } from "react-router-dom";

function Header() {
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
    </div>
  );
}

export default Header;
