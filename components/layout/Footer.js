import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

function Footer() {
  const { themeState } = useContext(ThemeContext);
  return (
    <footer className="footer" style={{ color: themeState.text.tertiary }}>
      <div className="container">
        <p className="footer__copyright">
          &copy; Craig Puxty, 2021. All rights Reserved.
        </p>
        <p className="footer__backlink">
          <a href="https://rawg.io" target="_blank" rel="noreferrer">
            Powered by RAWG
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
