import { useOutletContext } from "react-router";
import styles from "./men.module.css";
import Product from "./product";

function Electronics() {
  const { electronics } = useOutletContext();

  return (
    <div className={styles.shopContainer}>
      <div className={styles.shopCategory}>
        <h2 className={styles.title}>
          Men's Fashion & Accessories <p>({electronics.length})</p>
        </h2>
      </div>
      <div className={styles.products}>
        {electronics.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Electronics;
