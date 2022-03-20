import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { ThemeContext } from "../../../contexts/ThemeContext";
import Image from "next/image";

function Screenshots({ screenshots }) {
  const { appDispatch } = useContext(AppContext);
  const { themeState } = useContext(ThemeContext);

  const addScreenshots = (index) => {
    appDispatch({
      type: "OPEN_MODAL",
      payload: { type: "screenshots", data: screenshots, index },
    });
  };

  const handleKeyPress = (e, index) => {
    if (e.code === "Enter") {
      addScreenshots(index);
    }
  };

  return (
    <>
      {screenshots && screenshots.length > 0 && (
        <section style={{ color: themeState.text.primary }}>
          <h2 className="section-title hidden">Game screenshots</h2>
          <div className="screenshots">
            {screenshots.map((pic, index) => (
              <div
                key={pic.id}
                tabIndex="0"
                className="screenshots__screenshot"
                onClick={() => addScreenshots(index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
              >
                <Image
                  src={pic.image}
                  layout="fill"
                  sizes="17vw"
                  alt="Screenshot"
                  priority
                />
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
export default Screenshots;
