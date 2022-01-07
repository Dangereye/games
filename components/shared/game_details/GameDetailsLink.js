import Link from "next/link";

function GameDetailsLink({ href, key, name }) {
  return (
    <Link href={href} key={key}>
      <a className="game-details__links-group__link ">{name}</a>
    </Link>
  );
}
export default GameDetailsLink;
