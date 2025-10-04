import { useOutletContext } from "react-router";
import styles from "./men.module.css";

function Men() {
  const { mensClothing } = useOutletContext();

  console.log(mensClothing);
  return (
    <div className={styles.shopContainer}>
      <div className={styles.shopCategory}>
        <h2 className={styles.title}>
          Men's Fashion & Accessories <p>({mensClothing.length})</p>
        </h2>
      </div>
      <div className={styles.products}>
        {mensClothing.map((item) => (
          <div className={styles.product} key={item.id}>
            <div className={styles.imageContainer}>
              <img className={styles.image} src={item.image} alt="item image" />
            </div>
            <p className={styles.productName}>{item.title}</p>
            <p className={styles.productPrice}>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Men;
