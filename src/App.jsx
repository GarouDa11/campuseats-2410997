import { useState } from "react";
import { Loading, ErrorMessage } from "./components/Status.jsx";
import useVendors from "../hooks/useVendors.js";
import useLocalStorage from "../hooks/useLocalStorage.js";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import CartPage from "./pages/CartPage.jsx";
import VendorCard from "./components/VendorCard.jsx";
import MenuList from "./components/MenuList.jsx";

function App() {
  // Fetched data: one piece of state for each situation
  const { vendors, loading, error, reload } = useVendors();
  const [selectedVendorId, setSelectedVendorId] = useState(null);
  const [view, setView] = useState("menu"); // 'menu' | 'cart' | 'done'
  const [lastOrder, setLastOrder] = useState(null);

  const selectedVendor =
    vendors.find((v) => v.id === selectedVendorId) ?? vendors[0];

  let content;
  if (view === "cart") {
    content = (
      <CartPage
        onOrderPlaced={(order) => {
          setLastOrder(order);
          setView("done");
        }}
      />
    );
  } else if (view === "done") {
    content = (
      <section className="card">
        <h2>Order placed</h2>
        <p>
          Thank you, {lastOrder.name}. Pick up at {lastOrder.pickupTime}
          (Mahallah {lastOrder.mahallah}). Total RM {lastOrder.total.toFixed(2)}
          .
        </p>
        <button className="btn" onClick={() => setView("menu")}>
          Back to menus
        </button>
      </section>
    );
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
    content = (
      <div className="dashboard">
        <section className="vendors-container">
          <h2>Available Vendors</h2>
          <div className="vendor-grid">
            {vendors.map((vendor) => (
              <VendorCard
                key={vendor.id}
                vendor={vendor}
                isSelected={selectedVendor?.id === vendor.id}
                onSelect={(id) => setSelectedVendorId(id)}
              />
            ))}
          </div>
        </section>

        {selectedVendor && (
          <section className="menu-container">
            <h2>{selectedVendor.name} - Menu</h2>
            <MenuList items={selectedVendor.menu} />
          </section>
        )}
      </div>
    );
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
