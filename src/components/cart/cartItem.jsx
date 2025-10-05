import { useContext } from "react";
import styles from "./cartItem.module.css";
import { Trash } from "lucide-react";
import { CartContext } from "../context/cartContext";

function CartItem({ item }) {
  const { removeFromCart } = useContext(CartContext);

  function totalItemPrice() {
    return item.quantity * item.price;
  }

  function removeItem() {
    removeFromCart(item.id);
  }

  return (
    <div className={styles.item}>
      <img className={styles.itemImg} src={item.image} alt="item image" />
      <div className={styles.itemSummary}>
        <p>{item.title}</p>
        <div className={styles.itemInfo}>
          <div className={styles.itemQuantity}>
            <p>Quantity: {item.quantity}</p>
            <button className={styles.removeItemBtn} onClick={removeItem}>
              <Trash />
            </button>
          </div>

          <div className={styles.totalPrice}>${totalItemPrice()}</div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
