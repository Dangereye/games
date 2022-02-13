import { useState, useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import Image from "next/image";
import Button from "../buttons/Button";

function Achievements({ achievements }) {
  const { themeState } = useContext(ThemeContext);
  const [limit, setLimit] = useState(true);

  const toggleAmount = () => {
    setLimit(!limit);
  };
  return (
    <>
      {achievements.count > 0 && (
        <section className="achievements">
          <h4 className="title" style={{ color: themeState.text.tertiary }}>
            Achievements
          </h4>
          <div className="achievements__list">
            {(limit
              ? achievements.results.filter((item, index) => index < 4)
              : achievements.results
            ).map((item, index) => (
              <div
                className="achievement"
                key={`achievement-${index}`}
                style={{ backgroundColor: themeState.background.secondary }}
              >
                <div className="achievement__image">
                  <Image
                    src={item.image ? item.image : ""}
                    width="75"
                    height="75"
                    alt={item.name}
                    placeholder="blur"
                    blurDataURL={item.image ? item.image : ""}
                  />
                </div>

                <div className="achievement__details">
                  <div
                    className="achievement__percent"
                    style={{ color: themeState.text.secondary }}
                  >
                    {item.percent}%
                  </div>
                  <div className="achievement__name">{item.name}</div>
                  <div
                    className="achievement__description"
                    style={{ color: themeState.text.tertiary }}
                  >
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {achievements.results.length > 4 && (
            <Button
              name={limit ? "Show More" : "Show Less"}
              styles="btn--show-more"
              func={toggleAmount}
            />
          )}
        </section>
      )}
    </>
  );
}
export default Achievements;
