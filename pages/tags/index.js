import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { TagsSVG } from "../../components/shared/CategoriesSVGs";
import useStatus from "../../hooks/useStatus";
import PageTemplate from "../../components/shared/PageTemplate";
import MiscCards from "../../components/shared/misc_cards/MiscCards";
import MiscCard from "../../components/shared/misc_cards/MiscCard";

function Tags({ tags }) {
  const { appState } = useContext(AppContext);
  const {} = useStatus(tags);
  return (
    <PageTemplate title="Tags">
      <MiscCards title="Tags list">
        {appState.data.results.map((tag, i) => (
          <MiscCard
            key={`tag-${i}`}
            icon={<TagsSVG />}
            data={tag}
            href={`/tags/${tag.id}`}
          />
        ))}
      </MiscCards>
    </PageTemplate>
  );
}
export default Tags;
export async function getServerSideProps() {
  const options = {
    method: "GET",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
  };

  const res = await fetch(
    `https://api.rawg.io/api/tags?key=${process.env.API_KEY}&page_size=40`,
    options
  );
  const tags = await res.json();

  return {
    props: { tags },
  };
}
