import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/nav/nav";
import { Outlet } from "react-router";
import { CartProvider } from "./components/context/cartContext";

function App() {
  const [mensClothing, setMensClothing] = useState([]);
  const [womensClothing, setWomensClothing] = useState([]);
  const [jewelry, setjewelry] = useState([]);
  const [electronics, setElectronics] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => {
        const menData = response.filter(
          (product) => product.category === "men's clothing",
        );
        const womenData = response.filter(
          (product) => product.category === "women's clothing",
        );
        const jewelryData = response.filter(
          (product) => product.category === "jewelry",
        );
        const electronicsData = response.filter(
          (product) => product.category === "electronics",
        );
        setMensClothing(menData);
        setWomensClothing(womenData);
        setjewelry(jewelryData);
        setElectronics(electronicsData);
      });
  }, []);
  return (
    <CartProvider>
      <Nav />
      <main>
        <Outlet
          context={{
            mensClothing,
            womensClothing,
            jewelry,
            electronics,
          }}
        />
      </main>
    </CartProvider>
  );
}

export default App;
