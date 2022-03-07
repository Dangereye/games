import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { useRouter } from "next/router";

function DropdownLink({ data }) {
  const { themeState } = useContext(ThemeContext);
  const router = useRouter();

  const followLink = () => {
    router.push(data.link);
  };

  return (
    <>
      <div className="menu__title" style={{ color: themeState.text.tertiary }}>
        <div className="menu__icon"></div>
        <div className="menu__text" onClick={followLink}>
          {data.name}
        </div>
      </div>
    </>
  );
}
export default DropdownLink;
