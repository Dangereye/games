import { useState, useEffect } from "react";
import { BiArrowToTop } from "react-icons/bi";

export default function BackToTop() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const addBackToTop = () => {
      if (window.scrollY >= 1500) {
        setIsActive(true);
      }

      if (window.scrollY < 1500) {
        setIsActive(false);
      }
    };
    window.addEventListener("scroll", addBackToTop);

    return () => {
      window.removeEventListener("scroll", addBackToTop);
    };
  });

  return (
    <div
      className={isActive ? "back-to-top active" : "back-to-top"}
      onClick={handleClick}
    >
      <BiArrowToTop />
    </div>
  );
}
