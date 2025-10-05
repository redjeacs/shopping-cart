import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import styles from "./cart.module.css";
import CartItem from "./cartItem";
import { Link } from "react-router";

function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  function calculateTotal() {
    let subtotal = 0;
    cart.map((item) => {
      const itemPrice = item.price * item.quantity;
      subtotal += itemPrice;
    });
    return Math.round(subtotal * 1000) / 1000;
  }
  function displayCart() {
    if (cart.length > 0) {
      return (
        <>
          <div className={styles.cart}>
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className={styles.orderSummary}>
            <p className={styles.summaryTitle}>Order Summary</p>
            <div className={styles.lineBreak}></div>
            <div className={styles.priceCalculation}>
              <div className={styles.subtotal}>
                Subtotal <p>${calculateTotal()}</p>
              </div>
              <div className={styles.shipping}>
                Shipping <p>$0.00</p>
              </div>
            </div>
            <div className={styles.lineBreak}></div>
            <div className={styles.total}>
              Total <p>${calculateTotal()}</p>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <div className={styles.emptyCartContainer}>
          <div className={styles.emptyCart}>Your Cart is Empty!</div>
          <Link to="/shop" className={styles.shopBtn}>
            Continue Shopping
          </Link>
        </div>
      );
    }
  }
  return (
    <div className={styles.cartPage}>
      <h2 className={styles.pageHeader}>Your Cart</h2>
      <div className={styles.cartContainer}>{displayCart()}</div>
    </div>
  );
}

export default Cart;
