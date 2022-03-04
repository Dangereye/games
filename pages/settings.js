import { useEffect, useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { ThemeContext } from "../contexts/ThemeContext";
import ToggleButton from "../components/shared/buttons/ToggleButton";
import Button from "../components/shared/buttons/Button";

function Settings() {
  const { appState, appDispatch } = useContext(AppContext);
  const { themeState, themeDispatch } = useContext(ThemeContext);

  const toggleTheme = () => {
    if (themeState.dark_mode) {
      themeDispatch({ type: "LIGHT" });
    } else {
      themeDispatch({ type: "DARK" });
    }
  };

  const toggleInfiniteScroll = () => {
    if (appState.infinite_scroll) {
      appDispatch({ type: "INFINITE_SCROLL", payload: false });
    } else {
      appDispatch({ type: "INFINITE_SCROLL", payload: true });
    }
  };

  useEffect(() => {}, []);

  return (
    <>
      <header style={{ color: themeState.text.primary }}>
        <h1 className="display-title">Application Settings</h1>
      </header>
      <section className="mt-4" style={{ color: themeState.text.primary }}>
        <h2 className="section-title hidden">Settings</h2>
        <h3
          className="section-subtitle"
          style={{ color: themeState.text.tertiary }}
        >
          Theme
        </h3>
        <div className="settings">
          <ToggleButton
            name="Dark Mode"
            option={themeState.dark_mode}
            func={toggleTheme}
          />
        </div>
        <h3
          className="section-subtitle"
          style={{ color: themeState.text.tertiary }}
        >
          Data Fetching
        </h3>
        <div className="settings">
          <ToggleButton
            name="Infinite Scroll"
            option={appState.infinite_scroll}
            func={toggleInfiniteScroll}
          />
        </div>
      </section>
      <section style={{ color: themeState.text.primary }}>
        <h2 className="section-title hidden">Local Storage</h2>
        <h3
          className="section-subtitle"
          style={{ color: themeState.text.tertiary }}
        >
          Local storage
        </h3>
        <p>
          This application saves settings in your browsers local storage - to
          remember them for future use.
        </p>
        <Button name="Clear Storage" classes="btn--large btn--primary mt-4" />
      </section>
    </>
  );
}

export default Settings;
