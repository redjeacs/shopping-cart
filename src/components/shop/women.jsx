import { useOutletContext } from "react-router";
import styles from "./men.module.css";
import Product from "./product";

function Women() {
  const { womensClothing } = useOutletContext();

  return (
    <div className={styles.shopContainer}>
      <div className={styles.shopCategory}>
        <h2 className={styles.title}>
          Women's Fashion & Accessories <p>({womensClothing.length})</p>
        </h2>
      </div>
      <div className={styles.products}>
        {womensClothing.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Women;
