import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { ThemeContext } from "../../contexts/ThemeContext";

function Footer() {
  const { appState } = useContext(AppContext);
  const { themeState } = useContext(ThemeContext);
  return (
    <>
      {!appState.modal.isOpen && (
        <footer
          className="footer"
          style={{
            color: themeState.text.secondary,
            backgroundColor: themeState.background.secondary,
          }}
        >
          <div className="container">
            <div className="footer__copyright">
              <span>&copy; Craig Puxty, 2021. All rights reserved.</span>
            </div>
            <div
              className="footer__backlink"
              style={{ color: themeState.text.tertiary }}
            >
              <a href="https://rawg.io" target="_blank" rel="noreferrer">
                Powered by RAWG
              </a>
            </div>
          </div>
        </footer>
      )}
    </>
  );
}

export default Footer;
