import styles from "./home.module.css";
import { Link } from "react-router";

function Home() {
  return (
    <section>
      <img src="../src/assets/home-image.jpg" alt="" />
      <div className={styles.shopRedirect}>
        <h2>Welcome to SweatShop!</h2>
        <p>Your one stop for all your clothing needs</p>
        <Link className={styles.shopLink} to="shop">
          Shop Now
        </Link>
      </div>
    </section>
  );
}

export default Home;
