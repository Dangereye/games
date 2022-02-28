import Link from "next/link";

function LinkItem({ classes, href, icon, styles, name }) {
  return (
    <div className={`links-list__item ${classes}`}>
      {icon && <span className="links-list__icon"></span>}
      <Link href={href}>
        <a className="links-list__link" style={styles}>
          <span>{name}</span>
        </a>
      </Link>
    </div>
  );
}

LinkItem.defaultProps = {
  classes: "",
  href: "/",
  icon: false,
  styles: {},
  name: "Name",
};

export default LinkItem;
