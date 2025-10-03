import App from "./App";
import Home from "./components/home/home";
import Shop from "./components/shop/shop";
import Cart from "./components/cart/cart";
import ErrorPage from "./components/error";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shop/",
        element: <Shop />,
      },
      {
        path: "shop/:name",
        element: <Shop />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
];

export default routes;
