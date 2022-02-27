import { useContext } from "react";
import { AppContext } from "../../../../contexts/AppContext";
import Image from "next/image";
function Screenshots({ screenshots }) {
  const { appState, appDispatch } = useContext(AppContext);
  const addScreenshots = (index) => {
    appDispatch({
      type: "OPEN_MODAL",
      payload: { type: "screenshots", data: screenshots, index },
    });
  };
  return (
    <>
      {screenshots.length ? (
        <section className="screenshots grid grid--screenshots">
          <h2 className="section-title hidden">Game screenshots</h2>
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
        </section>
      ) : null}
    </>
  );
}
export default Screenshots;
