import CartItem from "../components/CartItem.jsx";
import CheckoutForm from "..components/CheckoutForm.jsx";
import useCart from "../hooks/useCart.js";

function CartPage({ onPlaceOrder }) {
  const { cart, total, changeQty, changeNote, removeFromCart, placeOrder } =
    useCart();

  if (cart.length === 0) {
    return (
      <p className="muted">
        Your cart is empty. Pick something from a menu first.
      </p>
    );
  }
  function handlePlaceOrder(details) {
    const order = placeOrder(details);
    onOrderPlaced(order);
  }
  return (
    <div className="cart-layout">
      <div className="card">
        <ul className="cart-list">
          {cart.map((line) => (
            <CartItem
              key={line.item.id}
              line={line}
              onChangeQty={changeQty}
              onChangeNote={changeNote}
              onRemove={removeFromCart}
            />
          ))}
        </ul>

        <p className="cart-total">Total: RM {total.toFixed(2)}</p>
      </div>
      <CheckoutForm onPlaceOrder={handlePlaceOrder} />
    </div>
  );
}
export default CartPage;
