import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import PropTypes from "prop-types";
import { useApiContext } from "../components/ApiContext";

function Layout({ cartItems }) {
  const { data, error, loading } = useApiContext();

  return (
    <div>
      <Header cartItems={cartItems} />
      <div id="container">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>error: {error}</div>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
}

Layout.propTypes = {
  cartItems: PropTypes.object.isRequired,
};

export default Layout;
