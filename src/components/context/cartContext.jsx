import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(product, quantity = 1) {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        // Update quantity if already in cart
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      // Add new product to cart
      return [...prevCart, { ...product, quantity }];
    });
  }

  function removeFromCart(productId) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
