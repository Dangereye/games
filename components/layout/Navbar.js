import { useState, useEffect, useContext, useRef } from "react";
import { AppContext } from "../../contexts/AppContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/router";

function Navbar() {
  const [background, setBackground] = useState(false);
  const { appState, appDispatch } = useContext(AppContext);
  const { themeState } = useContext(ThemeContext);
  const [search, setSearch] = useState("");
  const searchInput = useRef(null);
  const router = useRouter();

  const toggleMobileMenu = () => {
    if (appState.mobileMenu_isOpen) {
      appDispatch({
        type: "CLOSE_MOBILE_MENU",
      });
    } else {
      appDispatch({ type: "OPEN_MOBILE_MENU" });
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch("");
    searchInput.current.blur();
    appDispatch({ type: "LOADING" });
    router.push(`/search/${search}`);
  };

  const searchFocus = (e) => {
    const { target } = e;
    target.parentElement.parentElement.style.color = "#222";
    target.style.color = "#222";
    target.style.backgroundColor = "#fff";
  };

  const searchBlur = (e) => {
    const { target } = e;
    if (target !== document.activeElement) {
      target.style.color = themeState.text.primary;
      target.parentElement.parentElement.style.color = themeState.text.primary;
      target.style.backgroundColor = themeState.background.inputs;
    }
  };

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setBackground(true);
    } else {
      setBackground(false);
    }
  };

  const navBg = {
    backgroundColor: background ? themeState.background.navbar : "transparent",
    backdropFilter: background ? "blur(10px)" : "none",
  };

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener("scroll", changeBackground);
    };
    watchScroll();
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <nav className="navbar" style={navBg}>
      <div className="container">
        <div
          className="navbar__logo"
          style={{ color: themeState.text.primary }}
        >
          Games
        </div>
        <div
          className="navbar__search"
          style={{ color: themeState.text.primary }}
        >
          <div className="navbar__search__icon">
            <FaSearch />
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search  games."
              value={search}
              onChange={handleChange}
              ref={searchInput}
              onFocus={searchFocus}
              onMouseEnter={searchFocus}
              onBlur={searchBlur}
              onMouseLeave={searchBlur}
              style={{
                color: themeState.text.primary,
                backgroundColor: themeState.background.inputs,
              }}
            />
          </form>
        </div>
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
        <ul
          className="navbar__list"
          style={{ color: themeState.text.secondary }}
        >
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
