import MenuItemCard from "./MenuItemCard.jsx";
import useCart from "../hooks/useCart.js";

function MenuList({ items }) {
  const { addToCart } = useCart();
  return (
    <div className="grid">
      {items.map((item) => (
        <MenuItemCard key={item.id} item={item} onAdd={addToCart} />
      ))}
    </div>
  );
}
export default MenuList;
