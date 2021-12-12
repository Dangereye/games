import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from "next/link";

function DropdownList({ list }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleState = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-list">
      <div className="dropdown-list__header">
        <div className="dropdown-list__title">{list.title}</div>
        <div
          className={
            isOpen ? "dropdown-list__button active" : "dropdown-list__button"
          }
          onClick={toggleState}
        >
          <RiArrowDropDownLine />
        </div>
      </div>
      <div
        className={
          isOpen ? "dropdown-list__items active" : "dropdown-list__items"
        }
      >
        {list.items.map((item) => (
          <Link
            href={`/platforms/${item.id}`}
            key={`${item.id}-${item.name}`}
            passHref
          >
            <div className="dropdown-list__item">{item.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default DropdownList;
