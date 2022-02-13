import Link from "next/link";

function _Link({ href, name }) {
  return (
    <Link href={href}>
      <a className="game-details__link ">{name}</a>
    </Link>
  );
}
export default _Link;
