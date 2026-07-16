import { useOutletContext } from "react-router";
import styles from "./shopCategories.module.css";
import Product from "./product";

function jewelry() {
  const { jewelry } = useOutletContext();

  return (
    <div className={styles.shopContainer}>
      <div className={styles.shopCategory}>
        <h2 className={styles.title}>
          Men's Fashion & Accessories <p>({jewelry.length})</p>
        </h2>
      </div>
      <div className={styles.products}>
        {jewelry.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default jewelry;
