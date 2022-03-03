import { useContext } from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import Image from "next/image";

function ESRBRating({ esrb }) {
  const { themeState } = useContext(ThemeContext);
  return (
    <section className="esrb-rating" style={{ color: themeState.text.primary }}>
      <h2 className="section-title hidden">ESRB age rating</h2>
      <Image
        src={esrb ? `/svg/esrb/${esrb.slug}.svg` : "/svg/esrb/pending.svg"}
        width="100"
        height="150"
      />
    </section>
  );
}
export default ESRBRating;
