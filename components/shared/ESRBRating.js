import Image from "next/image";

function ESRBRating({ esrb }) {
  return (
    <div className="esrb-rating">
      <div className="esrb-rating__image">
        <Image
          src={esrb ? `/svg/esrb/${esrb.slug}.svg` : "/svg/esrb/pending.svg"}
          width="66"
          height="100"
        />
      </div>
    </div>
  );
}
export default ESRBRating;
