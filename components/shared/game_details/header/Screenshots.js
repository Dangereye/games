import { useContext } from "react";
import { AppContext } from "../../../../contexts/AppContext";
import { ThemeContext } from "../../../../contexts/ThemeContext";
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
  return (
    <>
      {screenshots && screenshots.length > 0 && (
        <section style={{ color: themeState.text.primary }}>
          <h2 className="section-title hidden">Game screenshots</h2>
          <div className="screenshots">
            {screenshots.map((pic, index) => (
              <div className="screenshots__screenshot" key={pic.id}>
                <Image
                  src={pic.image}
                  width={pic.width}
                  height={pic.height}
                  layout="responsive"
                  alt="Screenshot"
                  blurDataURL={pic.image}
                  placeholder="blur"
                  onClick={() => addScreenshots(index)}
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
