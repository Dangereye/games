import { useState, useContext } from "react";
import { useRouter } from "next/router";
import { ThemeContext } from "../../contexts/ThemeContext";
import { AppContext } from "../../contexts/AppContext";
import { IoMdArrowDropdown } from "react-icons/io";

function MenuGroupItem({ data }) {
  const { themeState } = useContext(ThemeContext);
  const { appDispatch } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const titleLink = () => {
    if (data.dropdown) {
      setIsOpen(!isOpen);
    } else {
      appDispatch({ type: "LOADING" });
      router.push(data.link);
    }
  };

  const dropdownLink = (item) => {
    appDispatch({ type: "LOADING" });
    router.push(item.link);
  };

  return (
    <div className="menu-group__item">
      <div className="menu-group__item__header" onClick={titleLink}>
        {data.icon && (
          <div
            className="menu-group__item__header__icon"
            style={{ fill: themeState.text.primary }}
          >
            {data.icon}
          </div>
        )}
        <div className="menu-group__item__header__title">
          <span>{data.title}</span>
          {data.dropdown && <IoMdArrowDropdown />}
        </div>
      </div>
      {data.items && (
        <div
          className={
            isOpen
              ? "menu-group__item__dropdown-menu active"
              : "menu-group__item__dropdown-menu"
          }
        >
          {data.items.map((item) => (
            <div
              className="menu-group__item__dropdown-menu__item"
              onClick={() => dropdownLink(item)}
              key={item.name}
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MenuGroupItem;
