import useVendors from "../hooks/useVendors.js";
import { Loading, ErrorMessage } from "../components/Status.jsx";
import VendorCard from "../components/VendorCard.jsx";

function HomePage() {
  const { vendors, loading, error, reload } = useVendors();

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} onRetry={reload} />;

  return (
    <section className="vendors-container">
      <h2>Available Vendors</h2>
      <div className="vendor-grid">
        {vendors.map((vendor) => (
          <VendorCard key={vendor.id} vendor={vendor} />
        ))}
      </div>
    </section>
  );
}
export default HomePage;
