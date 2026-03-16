import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/90 dark:bg-gray-900/70 backdrop-blur-sm h-16">
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
        <div className="text-lg font-bold">
          <a href="/" className="text-black hover:text-indigo-600 transition">
            Manikandan
          </a>
        </div>

        <nav className="space-x-4">
          <a
            href="/resume"
            className="text-black transition hover:text-indigo-600"
          >
            Resume
          </a>
          <a
            href="/#projects"
            className="text-black transition hover:text-indigo-600"
          >
            Projects
          </a>
          <a
            href="/contact"
            className="text-black transition hover:text-indigo-600"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
