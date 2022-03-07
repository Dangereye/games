import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import DropdownMenu from "./DropdownMenu";
import MenuLink from "./MenuLink";

function Menu({ title, data }) {
  const { themeState } = useContext(ThemeContext);
  return (
    <div
      className="menu"
      style={{ color: themeState.text.primary, fill: themeState.text.primary }}
    >
      <div className="menu-title">{title}</div>
      <div className="menu__items">
        {data.map((item) => {
          if (item.dropdown) {
            return <DropdownMenu data={item} key={item.title} />;
          }
          return <MenuLink data={item} key={item.title} />;
        })}
      </div>
    </div>
  );
}
export default Menu;
