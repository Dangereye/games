import storesData from "../../../data/storesData";

function Stores({ stores }) {
  return (
    <section className="stores">
      <h4>Where to buy</h4>
      <div className="stores__list">
        {stores.map((store, index) => {
          const item = storesData.find((item) => item.id === store.store_id);
          return (
            <a
              className="stores__item"
              key={`store-${index}`}
              href={store.url}
              target="_blank"
              rel="noreferrer"
            >
              <span>{item.name}</span>
              <span>{item.icon}</span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
export default Stores;
