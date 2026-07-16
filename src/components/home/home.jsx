import styles from "./home.module.css";
import { Link } from "react-router";
import homeImage from "../../assets/home-image.jpg";

function Home() {
  return (
    <section>
      <img src={homeImage} alt="" />
      <div className={styles.shopRedirect}>
        <h2>Welcome to EveryShop!</h2>
        <p>Your one stop for all your clothing needs</p>
        <Link className={styles.shopLink} to="shop">
          Shop Now
        </Link>
      </div>
    </section>
  );
}

export default Home;
