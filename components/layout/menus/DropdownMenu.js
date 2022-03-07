import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import DropdownLink from "./DropdownLink";

function DropdownMenu({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="menu__title ">
        <div className="menu__icon">{data.icon}</div>
        <div className="menu__text" onClick={toggleMenu}>
          {data.title}
          <MdArrowDropDown />
        </div>
      </div>
      <div
        className={
          isOpen ? "menu__dropdown__items active" : "menu__dropdown__items"
        }
      >
        {data.items.map((item, i) => (
          <DropdownLink data={item} />
        ))}
      </div>
    </>
  );
}
export default DropdownMenu;
