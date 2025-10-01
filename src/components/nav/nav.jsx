import { Link } from "react-router";
import styles from "./nav.module.css";
import { House, ShoppingCart } from "lucide-react";

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
        <Link to="/">
          <House />
        </Link>
        <Link to="cart">
          <ShoppingCart />
        </Link>
      </div>
    </header>
  );
}

export default Nav;
