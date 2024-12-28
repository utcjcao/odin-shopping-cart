import Error from "./pages/Error";
import Home from "./pages/Home";
import ShoppingCart from "./pages/ShoppingCart";
import Store from "./pages/Store";
import Layout from "./pages/Layout";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const [cartItems, setCartItems] = useState({});
  // cart items: collection of ids, and their quanitites. get data values, etc per component, don't get it here

  const addCartItem = ({ id, quantity }) => {
    setCartItems((prevItems) => ({
      ...prevItems,
      [id]: prevItems.id + quantity,
    }));
  };

  const deleteCartItem = ({ id, quantity }) => {
    if (quantity >= cartItems.id) {
      const newItems = { ...cartItems };
      delete newItems.id;
      setCartItems(newItems);
    } else {
      setCartItems((prevItems) => ({
        ...prevItems,
        [id]: prevItems.id - quantity,
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
              addCartItem={addCartItem}
              deleteCartItem={deleteCartItem}
            />
          ),
        },
        {
          path: "store",
          element: <Store addCartItem={addCartItem} />,
        },
      ],
    },
  ];

  const router = BrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default App;
