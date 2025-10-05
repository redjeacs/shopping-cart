import { useOutletContext } from "react-router";
import styles from "./shopCategories.module.css";
import Product from "./product";

function Jewelery() {
  const { jewelery } = useOutletContext();

  return (
    <div className={styles.shopContainer}>
      <div className={styles.shopCategory}>
        <h2 className={styles.title}>
          Men's Fashion & Accessories <p>({jewelery.length})</p>
        </h2>
      </div>
      <div className={styles.products}>
        {jewelery.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Jewelery;
