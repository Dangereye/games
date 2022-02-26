import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import FormatNumber from "./FormatNumber";

function PageResults() {
  const { themeState } = useContext(ThemeContext);
  const { appState } = useContext(AppContext);
  return (
    <p className="page-results" style={{ color: themeState.text.tertiary }}>
      {appState.data.count > 0 ? (
        <>
          <span>found </span>
          <FormatNumber
            num={appState.data.count}
            styles={{ color: themeState.text.primary }}
          />
          <span> results.</span>
        </>
      ) : (
        <span>No results found.</span>
      )}
    </p>
  );
}
export default PageResults;
