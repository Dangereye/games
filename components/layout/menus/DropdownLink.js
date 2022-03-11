import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import Link from "next/link";

function DropdownLink({ data }) {
  const { themeState } = useContext(ThemeContext);

  return (
    <Link href={data.link}>
      <a className="menu__title" style={{ color: themeState.text.tertiary }}>
        <span className="menu__icon"></span>
        <span className="menu__text">{data.name}</span>
      </a>
    </Link>
  );
}
export default DropdownLink;
