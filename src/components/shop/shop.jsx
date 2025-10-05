import { useParams } from "react-router";
import Men from "./men";
import Women from "./women";
import Electronics from "./electronics";
import Jewelery from "./jewelery";
import DefaultShop from "./default";

function Shop() {
  const { name } = useParams();

  return (
    <div className="shopContainer">
      {name === "men" ? (
        <Men />
      ) : name === "women" ? (
        <Women />
      ) : name === "electronics" ? (
        <Electronics />
      ) : name === "jewelery" ? (
        <Jewelery />
      ) : (
        <DefaultShop />
      )}
    </div>
  );
}

export default Shop;
