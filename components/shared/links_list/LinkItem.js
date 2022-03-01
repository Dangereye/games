import Link from "next/link";

function LinkItem({
  itemClasses,
  itemStyles,
  icon,
  href,
  linkClasses,
  linkStyles,
  name,
  external,
}) {
  return (
    <div className={`links-list__item ${itemClasses}`} styles={itemStyles}>
      {icon && (
        <div className="links-list__icon">
          <span className="icon"></span>
        </div>
      )}
      <Link href={href} passHref>
        <div className={`links-list__link ${linkClasses}`} style={linkStyles}>
          <span className="link">{name}</span>
        </div>
      </Link>
    </div>
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
