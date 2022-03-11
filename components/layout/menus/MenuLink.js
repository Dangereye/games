import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import Link from "next/link";

function MenuLink({ data }) {
  const { themeState } = useContext(ThemeContext);
  return (
    <Link href={data.link}>
      <a
        className="menu__title"
        style={{
          fill: themeState.text.primary,
          color: themeState.text.primary,
        }}
      >
        <span className="menu__icon">{data.icon}</span>
        <span className="menu__text">{data.title}</span>
      </a>
    </Link>
  );
}

export default MenuLink;
