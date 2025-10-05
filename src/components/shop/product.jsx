import { useContext, useState } from "react";
import styles from "./product.module.css";
import { CartContext } from "../context/cartContext";

function Product({ item }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  function handleDecrease() {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
    }
  }

  function handleIncrease() {
    if (quantity < 10) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
    }
  }

  function handleAddToCart(e) {
    e.preventDefault();
    addToCart(item, quantity);
  }

  return (
    <div className={styles.product} key={item.id}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={item.image} alt="item image" />
      </div>
      <p className={styles.productName}>{item.title}</p>
      <p className={styles.productPrice}>${item.price}</p>
      <form noValidate>
        <label htmlFor={`quantity-${item.id}`} className={styles.quantityLabel}>
          Quantity:
          <div className={styles.quantityContainer}>
            <button
              className={styles.quantityButton}
              onClick={(e) => {
                e.preventDefault();
                handleDecrease();
              }}
            >
              -
            </button>
            <input
              type="number"
              value={quantity}
              min="1"
              max="10"
              id={`quantity-${item.id}`}
              className={styles.quantityInput}
              onChange={(e) => {
                let newQuantity = Number(e.target.value);
                if (newQuantity < 1) newQuantity = 1;
                if (newQuantity > 10) newQuantity = 10;
                setQuantity(newQuantity);
              }}
            />
            <button
              className={styles.quantityButton}
              onClick={(e) => {
                e.preventDefault();
                handleIncrease();
              }}
            >
              +
            </button>
            <button
              className={styles.addToCartButton}
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </label>
      </form>
    </div>
  );
}

export default Product;
