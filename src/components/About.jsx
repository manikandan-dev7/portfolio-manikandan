import React from "react";

const About = () => {
  return (
    <section id="about" className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white/80 dark:bg-black/40 p-6 rounded-lg shadow-md reveal-on-scroll motion-safe-animate">
          <h2 className="text-2xl font-semibold mb-3 text-black">About</h2>
          <p className="text-black dark:text-gray-200">
            I build fast, accessible and maintainable web applications using the
            MERN stack. I focus on performant UI, clear UX, and practical
            engineering tradeoffs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
