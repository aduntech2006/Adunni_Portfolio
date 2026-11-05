import { useState, useEffect } from "react";

export const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="position-fixed rounded-circle floating-back-to-top d-flex align-items-center justify-content-center"
      style={{
        bottom: "30px",
        right: "30px",
        width: "48px",
        height: "48px",
        zIndex: 1040,
        color: "#ffffff"
      }}
      aria-label="Back to Top"
      title="Back to Top"
    >
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path d="M18 15l-6-6-6 6"></path>
      </svg>
    </button>
  );
};
