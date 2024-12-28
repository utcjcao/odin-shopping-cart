import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import PropTypes from "prop-types";

function Layout({ cartItems }) {
  return (
    <div>
      <Header cartItems={cartItems} />
      <div id="container">
        <Outlet />
      </div>
    </div>
  );
}

Layout.propTypes = {
  cartItems: PropTypes.object.isRequired,
};

export default Layout;
