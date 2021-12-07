import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import { FaSearch } from "react-icons/fa";

function Navbar() {
  const { appState, appDispatch } = useContext(AppContext);
  const { themeState } = useContext(ThemeContext);
  console.log(appState);

  const toggleMobileMenu = () => {
    if (appState.mobileMenu_isOpen) {
      appDispatch({
        type: "CLOSE_MOBILE_MENU",
      });
    } else {
      appDispatch({ type: "OPEN_MOBILE_MENU" });
    }
  };

  return (
    <nav
      className="navbar"
      style={{
        color: themeState.text.tertiary,
        backgroundColor: themeState.background.primary,
      }}
    >
      <div className="container">
        <div
          className={
            appState.mobileMenu_isOpen
              ? "navbar__mobile-menu active"
              : "navbar__mobile-menu"
          }
          onClick={toggleMobileMenu}
        >
          <div style={{ backgroundColor: themeState.text.primary }}></div>
          <div style={{ backgroundColor: themeState.text.primary }}></div>
          <div style={{ backgroundColor: themeState.text.primary }}></div>
        </div>

        <div
          className="navbar__logo"
          style={{ color: themeState.text.primary }}
        >
          Games
        </div>
        <div
          className="navbar__search"
          style={{ backgroundColor: themeState.background.tertiary }}
        >
          <div
            className="navbar__search__icon"
            style={{ color: themeState.text.primary }}
          >
            <FaSearch />
          </div>
          <input type="text" placeholder="Search games..." />
        </div>
        <ul className="navbar__list">
          <li className="navbar__list-item">1</li>
          <li className="navbar__list-item">2</li>
          <li className="navbar__list-item">3</li>
          <li className="navbar__list-item">4</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
