import React, { useEffect } from "react";

// Simple intersection-observer reveal that toggles a class for performant
// CSS-driven transitions (avoids JS animation loops).
const Animations = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 },
    );

    document
      .querySelectorAll(".reveal-on-scroll")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
};

export default Animations;
