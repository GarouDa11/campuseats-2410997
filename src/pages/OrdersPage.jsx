import { Link } from "react-router";
import useCart from "../hooks/useCart.js";

function OrdersPage() {
  const { orders } = useCart();

  if (orders.length === 0) {
    return (
      <p className="muted">
        No orders yet. <Link to="/">Browse menus</Link>
      </p>
    );
  }

  return (
    <section>
      <h2>Your orders</h2>
      {[...orders].reverse().map((order) => (
        <article key={order.id} className="card">
          <h3>
            {order.name} · Mahallah {order.mahallah}
          </h3>
          <p className="muted">
            Pickup {order.pickupTime} · placed{" "}
            {new Date(order.placedAt).toLocaleString()}
          </p>
          <ul>
            {order.lines.map((line) => (
              <li key={line.item.id}>
                {line.qty} × {line.item.name}
                {line.note?.trim() && (
                  <span className="muted"> ({line.note})</span>
                )}
              </li>
            ))}
          </ul>
          <p className="cart-total">Total: RM {order.total.toFixed(2)}</p>
        </article>
      ))}
    </section>
  );
}
export default OrdersPage;
