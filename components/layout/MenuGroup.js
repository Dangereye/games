import MenuGroupItem from "./MenuGroupItem";

function MenuGroup({ title, data }) {
  return (
    <div className="menu-group">
      <div className="menu-group__title">{title}</div>
      <div className="menu-group__items">
        {data.map((item) => (
          <MenuGroupItem data={item} key={item.title} />
        ))}
      </div>
    </div>
  );
}
export default MenuGroup;
