import { Link, useParams } from "react-router-dom";
import useVendors from "../hooks/useVendors.js";
import { Loading, ErrorMessage } from "../components/Status.jsx";
import MenuList from "../components/MenuList.jsx";

function VendorPage() {
  const { id } = useParams(); // always a string
  const { vendors, loading, error, reload } = useVendors();

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} onRetry={reload} />;

  const vendor = vendors.find((v) => String(v.id) === id);
  if (!vendor) {
    return (
      <section className="card">
        <h2>Vendor not found</h2>
        <Link to="/">Back to vendors</Link>
      </section>
    );
  }

  return (
    <section className="menu-container">
      <Link to="/">← All vendors</Link>
      <h2>{vendor.name} - Menu</h2>
      <MenuList items={vendor.menu} />
    </section>
  );
}
export default VendorPage;
