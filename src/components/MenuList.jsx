import MenuItemCard from "./MenuItemCard.jsx";
function MenuList({ items, onAdd }) {
  return (
    <div className="grid">
      {items.map((item) => (
        <MenuItemCard key={item.id} item={item} onAdd={onAdd} />
      ))}
    </div>
  );
}
export default MenuList;
