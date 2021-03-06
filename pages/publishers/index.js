import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import useUpdateState from "../../hooks/useUpdateState";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import PageTemplate from "../../components/shared/PageTemplate";
import MiscCards from "../../components/shared/misc_cards/MiscCards";
import MiscCard from "../../components/shared/misc_cards/MiscCard";

function Publishers({ publishers }) {
  const { appState } = useContext(AppContext);
  const {} = useUpdateState(publishers);
  const { setElement } = useInfiniteScroll();

  return (
    <PageTemplate title="Publishers">
      <MiscCards title="Publisher list">
        {appState.data.results.map((p, i) => (
          <MiscCard
            ref={setElement}
            key={`publisher-${i}`}
            data={p}
            href={`/publishers/${p.id}`}
          />
        ))}
      </MiscCards>
    </PageTemplate>
  );
}
export default Publishers;

export async function getServerSideProps() {
  const options = {
    method: "GET",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
  };

  const res = await fetch(
    `https://api.rawg.io/api/publishers?key=${process.env.API_KEY}&page_size=40`,
    options
  );
  const publishers = await res.json();

  return {
    props: { publishers },
  };
}
