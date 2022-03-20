import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import Image from "next/image";

function ESRBRating({ esrb }) {
  const { themeState } = useContext(ThemeContext);
  return (
    <section className="esrb-rating" style={{ color: themeState.text.primary }}>
      <h2 className="section-title hidden">ESRB age rating</h2>
      <div className="esrb-rating__image">
        <Image
          src={esrb ? `/svg/esrb/${esrb.slug}.svg` : "/svg/esrb/pending.svg"}
          layout="fill"
          sizes="17vw"
          alt={esrb ? esrb.slug : "Pending"}
        />
      </div>
    </section>
  );
}
export default ESRBRating;
