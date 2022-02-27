import Link from "next/link";

function _Link({ href, name }) {
  return (
    <Link href={href}>
      <a className="list-icon-link ">
        <span className="icon"></span>
        <span className="text">{name}</span>
      </a>
    </Link>
  );
}
export default _Link;
