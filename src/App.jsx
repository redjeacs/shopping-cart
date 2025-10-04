import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/nav/nav";
import { Outlet } from "react-router";

function App() {
  const [mensClothing, setMensClothing] = useState("");
  const [womensClothing, setWomensClothing] = useState("");
  const [jewelery, setJewelery] = useState("");
  const [electronics, setElectronics] = useState("");

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
          (product) => product.category === "men's clothing"
        );
        const womenData = response.filter(
          (product) => product.category === "women's clothing"
        );
        const jeweleryData = response.filter(
          (product) => product.category === "jewelery"
        );
        const electronicsData = response.filter(
          (product) => product.category === "electronics"
        );
        setMensClothing(menData);
        setWomensClothing(womenData);
        setJewelery(jeweleryData);
        setElectronics(electronicsData);
      });
  }, []);
  return (
    <>
      <Nav />
      <main>
        <Outlet
          context={{
            mensClothing,
            womensClothing,
            jewelery,
            electronics,
          }}
        />
      </main>
    </>
  );
}

export default App;
