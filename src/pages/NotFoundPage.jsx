import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <section className="card">
      <h2>Page not found</h2>
      <Link to="/">Go home</Link>
    </section>
  );
}
export default NotFoundPage;
