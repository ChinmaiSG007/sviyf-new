import { useState } from "react";
import { ChevronUp } from "lucide-react";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div className=" fixed  right-[3%] bottom-[10px] z-10 cursor-pointer p-2 drop-shadow-lg">
      <ChevronUp
        className="text-[#142c3a] bg-gray-100 hover:bg-[#142c3a] hover:text-[#daa86a] rounded-lg h-full w-full p-2"
        strokeWidth={3}
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      />
    </div>
  );
};

export default ScrollButton;
