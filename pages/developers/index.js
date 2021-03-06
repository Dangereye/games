import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import useUpdateState from "../../hooks/useUpdateState";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import PageTemplate from "../../components/shared/PageTemplate";
import MiscCards from "../../components/shared/misc_cards/MiscCards";
import MiscCard from "../../components/shared/misc_cards/MiscCard";

function Developers({ developers }) {
  const { appState } = useContext(AppContext);
  const {} = useUpdateState(developers);
  const { setElement } = useInfiniteScroll();

  return (
    <PageTemplate title="Developers">
      <MiscCards title="Developer list">
        {appState.data.results.map((d, i) => (
          <MiscCard
            ref={setElement}
            key={`developer-${i}`}
            data={d}
            href={`/developers/${d.id}`}
          />
        ))}
      </MiscCards>
    </PageTemplate>
  );
}
export default Developers;

export async function getServerSideProps() {
  const options = {
    method: "GET",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
  };

  const res = await fetch(
    `https://api.rawg.io/api/developers?key=${process.env.API_KEY}&page_size=40`,
    options
  );
  const developers = await res.json();

  return {
    props: { developers },
  };
}
