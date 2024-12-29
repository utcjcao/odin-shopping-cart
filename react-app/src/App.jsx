import Error from "./pages/Error";
import Home from "./pages/Home";
import ShoppingCart from "./pages/ShoppingCart";
import Store from "./pages/Store";
import Layout from "./pages/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ApiStateProvider } from "./components/ApiContext";
import { ItemStateProvider } from "./components/ItemContext";
import ItemPage from "./pages/ItemPage";

const App = () => {
  const routes = [
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "cart",
          element: <ShoppingCart />,
        },
        {
          path: "store",
          element: <Store />,
        },
        {
          path: "store/:id",
          element: <ItemPage />,
        },
      ],
    },
  ];

  const router = createBrowserRouter(routes);

  return (
    <ItemStateProvider>
      <ApiStateProvider>
        <RouterProvider router={router} />
      </ApiStateProvider>
    </ItemStateProvider>
  );
};

export default App;
