import Link from "next/link";

function GameDetailsLink({ href, name }) {
  return (
    <Link href={href}>
      <a className="game-details__links-group__link ">{name}</a>
    </Link>
  );
}
export default GameDetailsLink;
