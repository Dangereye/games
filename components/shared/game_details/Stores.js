import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import storesData from "../../../data/storesData";

function Stores({ stores }) {
  const { themeState } = useContext(ThemeContext);
  return (
    <>
      {stores.count > 0 && (
        <section className="stores">
          <h2 className="section-title hidden">Game stores to buy game</h2>
          <h3
            className="section-subtitle"
            style={{ color: themeState.text.tertiary }}
          >
            Where to buy
          </h3>
          <div className="stores__list grid">
            {stores.results.map((store, index) => {
              const item = storesData.find(
                (item) => item.id === store.store_id
              );
              return (
                <a
                  className="stores__item"
                  key={`store-${index}`}
                  href={store.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    backgroundColor: themeState.background.secondary,
                    fill: themeState.text.primary,
                  }}
                >
                  <span className="stores__icon">{item.icon}</span>
                  <span className="stores__text">{item.name}</span>
                </a>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
}
export default Stores;
