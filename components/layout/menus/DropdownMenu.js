import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import DropdownLink from "./DropdownLink";

function DropdownMenu({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleKeyPress = (e) => {
    if (e.code === "Enter") {
      setIsOpen(!isOpen);
    }
  };

  return (
    <>
      <div
        className="menu__title"
        tabIndex="0"
        onClick={handleClick}
        onKeyPress={handleKeyPress}
      >
        <span className="menu__icon">{data.icon}</span>
        <span className="menu__text">
          {data.title}
          <MdArrowDropDown />
        </span>
      </div>
      <div
        className={
          isOpen ? "menu__dropdown__items active" : "menu__dropdown__items"
        }
      >
        {data.items.map((item, i) => (
          <DropdownLink key={`dropdown-${i}`} data={item} />
        ))}
      </div>
    </>
  );
}
export default DropdownMenu;
