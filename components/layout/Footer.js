import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

function Footer() {
  const { themeState } = useContext(ThemeContext);
  return (
    <footer className="footer" style={{ color: themeState.text.secondary }}>
      <div className="container">
        <div className="footer__copyright">
          <span>&copy; Craig Puxty, 2021. All rights Reserved.</span>
        </div>
        <div className="footer__backlink">
          <a href="https://rawg.io" target="_blank" rel="noreferrer">
            Powered by RAWG
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
