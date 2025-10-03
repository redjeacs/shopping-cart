import { Link } from "react-router";
import styles from "./default.module.css";

function DefaultShop() {
  return (
    <div className={styles.shopContainer}>
      <div className={styles.discountContainer}>
        <h2>VIP Sale: extra 30% off</h2>
        <p>
          Savings on regular & already-reduced prices. Extra 10-30% off children
          products.
        </p>
      </div>
      <div className={styles.latestContainer}>
        <div className={styles.left}>
          <p>summer apparels</p>
        </div>
        <div className={styles.main}>
          <h2>Fresh looks for your wardrobe</h2>
        </div>
        <div className={styles.right}>
          <p>breathable fabric</p>
        </div>
      </div>
      <div className={styles.categoriesContainer}>
        <h2>Featured Categories</h2>
        <div className={styles.links}>
          <Link to="men" className={styles.link}>
            <div className={styles.menImage}></div>
            <p>Men</p>
          </Link>
          <Link to="women" className={styles.link}>
            <div className={styles.womenImage}></div>
            <p>Women</p>
          </Link>
          <Link to="children" className={styles.link}>
            <div className={styles.childrenImage}></div>
            <p>Kids</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DefaultShop;
