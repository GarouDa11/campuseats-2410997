import { useContext } from "react";
import { CartContext } from "../context/cart-context.js";

function useCart() {
  const context = useContext(CartContext);
  if (context === null) {
    throw new Error("useCart must be used inside a <CartProvider>.");
  }
  return context;
}

export default useCart;
