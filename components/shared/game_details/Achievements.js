import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import Image from "next/image";
import Button from "../buttons/Button";

function Achievements({ achievements }) {
  const { themeState } = useContext(ThemeContext);
  const [count] = useState(achievements.count);
  const [list, setList] = useState(achievements.results);
  const [page, setPage] = useState(achievements.next);
  const [limit, setLimit] = useState(true);

  const toggleAmount = () => {
    setLimit(!limit);
  };

  useEffect(() => {
    const fetchMore = async () => {
      if (list.length < count) {
        const res = await fetch(page, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();
        setPage(data.next);
        setList([...list, ...data.results]);
      }
    };
    fetchMore();
  }, [list]);

  return (
    <>
      {achievements.count > 0 && (
        <section
          className="achievements"
          style={{ color: themeState.text.primary }}
        >
          <h2 className="section-title hidden">Trophies and achievements</h2>
          <h3
            className="section-subtitle"
            style={{ color: themeState.text.tertiary }}
          >
            Achievements
          </h3>
          <div className="achievements__list">
            {(limit ? list.filter((item, index) => index < 4) : list).map(
              (item, index) => (
                <div
                  className="achievement"
                  key={`achievement-${index}`}
                  style={{ backgroundColor: themeState.background.secondary }}
                >
                  <div className="achievement__image">
                    <Image
                      src={
                        item.image
                          ? item.image
                          : "/images/missing-image-achievement.jpg"
                      }
                      width="75"
                      height="75"
                      alt={item.name}
                      placeholder="blur"
                      blurDataURL={
                        item.image
                          ? item.image
                          : "/images/missing-image-achievement.jpg"
                      }
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
              )
            )}
          </div>
          {achievements.results.length > 4 && (
            <Button
              name={limit ? "Show More" : "Show Less"}
              classes="btn--more"
              func={toggleAmount}
            />
          )}
        </section>
      )}
    </>
  );
}
export default Achievements;
