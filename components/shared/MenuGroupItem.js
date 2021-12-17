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

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const titleLink = () => {
    appDispatch({ type: "LOADING" });
    if (data.id) {
      router.push(`${data.link}/${data.id}`);
    } else {
      router.push(data.link);
    }
  };

  const dropdownLink = (item) => {
    appDispatch({ type: "LOADING" });
    router.push(`${data.link}/${item.id}`);
  };

  return (
    <div className="menu-group__item">
      <div className="menu-group__item__header">
        {data.icon && (
          <div
            className="menu-group__item__header__icon"
            style={{ fill: themeState.text.primary }}
          >
            {data.icon}
          </div>
        )}
        <div
          className={
            !data.dropdown
              ? "menu-group__item__header__title link"
              : "menu-group__item__header__title"
          }
          onClick={titleLink}
        >
          {data.title}
        </div>
        {data.dropdown && (
          <div
            className="menu-group__item__header__dropdown-button"
            onClick={toggleOpen}
          >
            <IoMdArrowDropdown />
          </div>
        )}
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
