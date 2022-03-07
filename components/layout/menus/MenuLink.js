import { useRouter } from "next/router";

function MenuLink({ data }) {
  const router = useRouter();

  const followLink = () => {
    router.push(data.link);
  };

  return (
    <>
      <div className="menu__title">
        <div className="menu__icon">{data.icon}</div>
        <div className="menu__text" onClick={followLink}>
          {data.title}
        </div>
      </div>
    </>
  );
}

export default MenuLink;
