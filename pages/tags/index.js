import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { FaHashtag } from "react-icons/fa";
import Head from "next/head";
import MiscCard from "../../components/shared/misc-cards/MiscCard";
import MiscCards from "../../components/shared/misc-cards/MiscCards";
import useStatus from "../../hooks/useStatus";

function Tags({ tags }) {
  const { appState } = useContext(AppContext);
  const {} = useStatus(tags);
  return (
    <>
      <Head>
        <title>Games | Tags</title>
        <meta name="author" content="Craig Puxty" />
        <meta name="description" content="Video game tags." />
      </Head>
      <MiscCards title="Game Tags.">
        {appState.data.results.map((tag, index) => (
          <MiscCard
            id={tag.id}
            icon={<FaHashtag />}
            title={tag.name}
            subtitle="Popular Games"
            data={tag}
            path="tags"
            key={`tag-${index}`}
          />
        ))}
      </MiscCards>
    </>
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