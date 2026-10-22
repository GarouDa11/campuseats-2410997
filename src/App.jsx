import { useEffect, useState } from "react";
import { Loading, ErrorMessage } from "./components/Status.jsx";

function App() {
  // Fetched data: one piece of state for each situation
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reloadKey, setReloadKey] = useState(0); // bump it to fetch again
  const [selectedVendorId, setSelectedVendorId] = useState(null);
  const [cart, setCart] = useState([]); // lines of { item, qty }
  const [view, setView] = useState("menu"); // 'menu' | 'cart' | 'done'
  const [lastOrder, setLastOrder] = useState(null);

  function handleAddToCart(item) {
    setCart((prevCart) => [...prevCart, item]); // a NEW array, never cart.push()
  }
  const cartCount = cart.reduce((total, line) => total + line.qty, 0);
  let content;
  if (view === "cart") {
    content = (
      <CartPage
        cart={cart}
        onChangeQty={handleChangeQty}
        onRemove={handleRemove}
        onPlaceOrder={handlePlaceOrder}
      />
    );
  } else if (view === "done") {
    content = <p>Order placed.</p>; // TODO (B5): show pickup time and total
  } else if (loading) {
    content = <Loading />;
  } else if (error) {
    content = (
      <ErrorMessage
        message={error}
        onRetry={() => setReloadKey((k) => k + 1)}
      />
    );
  } else {
    content = <>{/* TODO: your Week 2 vendor cards + MenuList go here */}</>;
  }
  return (
    <>
      <Header
        cartCount={cartCount}
        onShowMenu={() => setView("menu")}
        onShowCart={() => setView("cart")}
      />
      <main className="container">{content}</main>
      <Footer />
    </>
  );
}
export default App;
