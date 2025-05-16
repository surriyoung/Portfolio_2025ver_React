import { useEffect, useState } from "react";
import ScrollTopIcon from "../assets/icons/ScrollTopIcon";

function TopBtn() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      className={`top-btn ${isVisible ? "on" : ""}`}
      onClick={scrollToTop}
    >
      <ScrollTopIcon />
    </button>
  );
}

export default TopBtn;
