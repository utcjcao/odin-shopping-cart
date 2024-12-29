import Error from "./pages/Error";
import Home from "./pages/Home";
import ShoppingCart from "./pages/ShoppingCart";
import Store from "./pages/Store";
import Layout from "./pages/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import { ApiStateProvider } from "./components/ApiContext";

const App = () => {
  const [cartItems, setCartItems] = useState({});
  // cart items: collection of ids, and their quanitites. get data values, etc per component, don't get it here
  const handleCartItemChange = (id, quantity) => {
    console.log(id, quantity);
    if (quantity + cartItems[id] <= 0) {
      console.log("del");
      let newItems = { ...cartItems };
      delete newItems[id];
      setCartItems(newItems);
    } else {
      console.log("hi");
      setCartItems((prevItems) => ({
        ...prevItems,
        [id]: (prevItems[id] || 0) + quantity,
      }));
    }
  };

  const routes = [
    {
      path: "/",
      element: <Layout cartItems={cartItems} />,
      errorElement: <Error />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "cart",
          element: (
            <ShoppingCart
              cartItems={cartItems}
              handleCartItemChange={handleCartItemChange}
            />
          ),
        },
        {
          path: "store",
          element: <Store handleCartItemChange={handleCartItemChange} />,
        },
      ],
    },
  ];

  const router = createBrowserRouter(routes);

  return (
    <ApiStateProvider>
      <RouterProvider router={router} />
    </ApiStateProvider>
  );
};

export default App;
