import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import MenuGroupItem from "./MenuGroupItem";

function MenuGroup({ title, data }) {
  const { themeState } = useContext(ThemeContext);
  return (
    <div className="menu-group">
      <div
        className="menu-group__title"
        style={{ color: themeState.text.primary }}
      >
        {title}
      </div>
      <div className="menu-group__items">
        {data.map((item) => (
          <MenuGroupItem data={item} key={item.title} />
        ))}
      </div>
    </div>
  );
}
export default MenuGroup;
