import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { useApiContext } from "../components/ApiContext";
import { useItemContext } from "../components/ItemContext";
import "../styles/layout.css";

function Layout() {
  const { error, loading } = useApiContext();
  const { cartItems } = useItemContext();

  return (
    <div className="main-container">
      <Header cartItems={cartItems} />
      <div id="container">
        {loading ? (
          <div className="loading-container">LOADING...</div>
        ) : error ? (
          <div className="error-container">ERROR: {error}</div>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
}

export default Layout;
