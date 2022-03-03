import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { ThemeContext } from "../../../contexts/ThemeContext";
import useClientFetch from "../../../hooks/useClientFetch";
import Loader from "../Loader";
import Button from "../buttons/Button";

function MiscCards({ title, children }) {
  const { appState } = useContext(AppContext);
  const { themeState } = useContext(ThemeContext);

  const addContent = useClientFetch();

  const fetchMore = () => {
    addContent(appState.data.next);
  };

  return (
    <section
      className="misc-cards mt-4"
      style={{ color: themeState.text.primary }}
    >
      <h2 className="section-title">{title}</h2>
      <div className=" grid grid--cards">{children}</div>
      {appState.isLoadingMore && <Loader />}
      {appState.data.next && !appState.isLoadingMore && (
        <Button
          name="Load More"
          classes="btn--large btn--primary btn--center mt-4"
          func={fetchMore}
        />
      )}
    </section>
  );
}
export default MiscCards;
