import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { FaSearch } from "react-icons/fa";

function Navbar() {
  const { state } = useContext(ThemeContext);
  return (
    <nav
      className="navbar"
      style={{
        color: state.text.tertiary,
        backgroundColor: state.background.primary,
      }}
    >
      <div className="container">
        <div className="navbar__logo" style={{ color: state.text.primary }}>
          Games
        </div>
        <div
          className="navbar__search"
          style={{ backgroundColor: state.background.tertiary }}
        >
          <div
            className="navbar__search__icon"
            style={{ color: state.text.primary }}
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
