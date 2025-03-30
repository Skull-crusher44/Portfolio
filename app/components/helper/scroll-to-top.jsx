"use client"; // ✅ Must be at the top!

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      className={`fixed bottom-8 right-6 z-50 p-4 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 ${
        isVisible ? "opacity-100" : "opacity-0"
      } transition-opacity duration-300`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTop;
