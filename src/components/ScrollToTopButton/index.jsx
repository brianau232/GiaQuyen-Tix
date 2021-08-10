import React from "react";
import "./ScrollToTopButton.scss";
import { useWindowScroll } from "react-use";

function ScrollToTopButton() {
  const { y: scrollY } = useWindowScroll();
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <button
        onClick={handleScrollToTop}
        className={
          scrollY > 300 ? "scrollToTopBtn block" : "scrollToTopBtn none"
        }
      >
        <svg id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512">
          <path
            d="M256,0C114.833,0,0,114.833,0,256s114.833,256,256,256s256-114.853,256-256S397.167,0,256,0z M256,472.341
			c-119.275,0-216.341-97.046-216.341-216.341S136.725,39.659,256,39.659c119.295,0,216.341,97.046,216.341,216.341
			S375.275,472.341,256,472.341z"
          />

          <path
            d="M369.227,283.365l-99.148-99.148c-7.734-7.694-20.226-7.694-27.96,0l-99.148,99.148c-6.365,7.416-6.365,18.382,0,25.798
			c7.119,8.309,19.651,9.28,27.96,2.161L256,226.256l85.267,85.069c7.734,7.694,20.226,7.694,27.96,0
			C376.921,303.591,376.921,291.098,369.227,283.365z"
          />
        </svg>
      </button>
    </>
  );
}

export default ScrollToTopButton;
