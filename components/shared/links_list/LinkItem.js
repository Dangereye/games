import Link from "next/link";
import { useRouter } from "next/router";

function LinkItem({
  itemClasses,
  itemStyles,
  icon,
  href,
  linkClasses,
  linkStyles,
  name,
}) {
  const router = useRouter();

  const followLink = (e) => {
    e.stopPropagation();
    router.push(href);
  };

  return (
    <li className={`links-list__item ${itemClasses}`} styles={itemStyles}>
      {icon && (
        <div className="links-list__icon">
          <span className="icon"></span>
        </div>
      )}
      <Link href={href}>
        <a className={`links-list__link ${linkClasses}`} style={linkStyles}>
          <span className="link">{name}</span>
        </a>
      </Link>
    </li>
  );
}

LinkItem.defaultProps = {
  itemClasses: "",
  itemStyles: {},
  icon: false,
  href: "/",
  linkClasses: "",
  linkStyles: {},
  name: "Link Name",
};

export default LinkItem;
