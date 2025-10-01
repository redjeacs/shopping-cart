import { Link } from "react-router";
import styles from "./nav.module.css";

function Nav() {
  return (
    <header>
      <div className={styles.left}>
        <div className={styles.logo}>Logo</div>
        <div className={styles.shopLinks}>
          <Link to={styles.shop}>Shop</Link>
        </div>
      </div>
      <div className={styles.right}>
        <Link to="/">Home</Link>
        <Link to="cart">Cart</Link>
      </div>
    </header>
  );
}

export default Nav;
