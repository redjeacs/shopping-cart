import { Link } from "react-router";
import styles from "./nav.module.css";
import { House, ShoppingCart } from "lucide-react";

function Nav() {
  return (
    <header>
      <div className={styles.centeringDiv}></div>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Link to="/shop">EveryShop</Link>
        </div>
        <div className={styles.shopLinks}>
          <Link to="/shop/men">Men</Link>
          <Link to="/shop/women">Women</Link>
          <Link to="/shop/electronics">Electronics</Link>
          <Link to="/shop/jewelry">Jewelry</Link>
        </div>
      </div>
      <div className={styles.right}>
        <Link to="/">
          <House />
          <p>Home</p>
        </Link>
        <Link to="cart">
          <ShoppingCart />
          <p>Cart</p>
        </Link>
      </div>
    </header>
  );
}

export default Nav;
