import { CartContext } from "./cart-context.js";
import useLocalStorage from "../hooks/useLocalStorage.js";

function CartProvider({ children }) {
  const [cart, setCart] = useLocalStorage("campuseats-cart", []); // { item, qty, note }
  const [orders, setOrders] = useLocalStorage("campuseats-orders", []);

  const count = cart.reduce((sum, line) => sum + line.qty, 0);
  const total = cart.reduce((sum, line) => sum + line.item.price * line.qty, 0);

  function addToCart(item) {
    setCart((prev) => {
      const existing = prev.find((line) => line.item.id === item.id);
      if (existing) {
        return prev.map((line) =>
          line.item.id === item.id ? { ...line, qty: line.qty + 1 } : line,
        );
      }
      return [...prev, { item, qty: 1, note: "" }];
    });
  }

  function changeQty(itemId, delta) {
    setCart((prev) =>
      prev
        .map((line) =>
          line.item.id === itemId ? { ...line, qty: line.qty + delta } : line,
        )
        .filter((line) => line.qty > 0),
    );
  }

  function changeNote(itemId, note) {
    setCart((prev) =>
      prev.map((line) => (line.item.id === itemId ? { ...line, note } : line)),
    );
  }

  function removeFromCart(itemId) {
    setCart((prev) => prev.filter((line) => line.item.id !== itemId));
  }

  // Saves the order, empties the cart, and returns the order for the caller.
  function placeOrder(details) {
    const order = {
      id: Date.now(),
      ...details,
      lines: cart,
      total,
      placedAt: new Date().toISOString(),
    };
    setOrders((prev) => [...prev, order]);
    setCart([]);
    return order;
  }
  function receiveOrder(orderId) {
    setOrders((prev) => prev.filter((order) => order.id !== orderId));
  }
  const value = {
    cart,
    orders,
    count,
    total,
    addToCart,
    changeQty,
    changeNote,
    removeFromCart,
    placeOrder,
    receiveOrder,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartProvider;
