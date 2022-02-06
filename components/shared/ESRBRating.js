import Image from "next/image";

function ESRBRating({ esrb }) {
  return (
    <div className="esrb-rating">
      <Image
        src={esrb ? `/svg/esrb/${esrb.slug}.svg` : "/svg/esrb/pending.svg"}
        width="100"
        height="150"
      />
    </div>
  );
}
export default ESRBRating;
