import { useParams } from "react-router";
import Men from "./men";
import Women from "./women";
import Children from "./children";
import DefaultShop from "./default";

function Shop() {
  const { name } = useParams();

  return (
    <div className="shopContainer">
      {name === "men" ? (
        <Men />
      ) : name === "women" ? (
        <Women />
      ) : name === "children" ? (
        <Children />
      ) : (
        <DefaultShop />
      )}
    </div>
  );
}

export default Shop;
