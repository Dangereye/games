import { useState, useContext } from "react";
import { useRouter } from "next/router";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AppContext } from "../contexts/AppContext";

function DropdownList({ list }) {
  const { appDispatch } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleState = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (item) => {
    appDispatch({ type: "LOADING", payload: true });
    router.push(`${item.link}/${item.id}`);
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
          <div
            className="dropdown-list__item"
            key={`${item.id}-${item.name}`}
            onClick={() => handleClick(item)}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}
export default DropdownList;
