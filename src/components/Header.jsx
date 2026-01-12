import React from "react";
import Spline from "@splinetool/react-spline/next";

const Header = () => {
  return (
    <header className="relative min-h-screen">
      <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-20">
        <div className="text-white font-bold text-lg">Manikandan</div>
        <nav className="space-x-4">
          <a
            href="#resume"
            className="text-white hover:text-indigo-200 transition"
          >
            Resume
          </a>
          <a
            href="#projects"
            className="text-white hover:text-indigo-200 transition"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-white hover:text-indigo-200 transition"
          >
            Contact
          </a>
        </nav>
      </div>

      <div className="absolute inset-0 -z-10">
        <Spline scene="https://prod.spline.design/DHIHVtKrYdkZqpg9/scene.splinecode" />
      </div>
    </header>
  );
};

export default Header;
