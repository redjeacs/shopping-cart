import { Link } from "react-router";
import styles from "./nav.module.css";
import { House, ShoppingCart } from "lucide-react";

function Nav() {
  return (
    <header>
      <div className={styles.centeringDiv}></div>
      <div className={styles.left}>
        <div className={styles.logo}>SweatShop</div>
        <div className={styles.shopLinks}>
          <Link to="shop">Men</Link>
          <Link to="shop">Women</Link>
          <Link to="shop">Children</Link>
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
