import React from "react";

const Header = () => {
  return (
    <header className="relative min-h-screen">
      <div className="absolute z-20 flex items-center justify-between top-6 left-6 right-6">
        <div className="text-lg font-bold text-white">Manikandan</div>
        <nav className="space-x-4">
          <a
            href="#resume"
            className="text-white transition hover:text-indigo-200"
          >
            Resume
          </a>
          <a
            href="#projects"
            className="text-white transition hover:text-indigo-200"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-white transition hover:text-indigo-200"
          >
            Contact
          </a>
        </nav>
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-800 via-indigo-600 to-indigo-300">
        {/* Decorative blobs */}
        <div className="absolute rounded-full -left-24 -top-24 w-96 h-96 bg-gradient-to-br from-purple-400 via-pink-400 to-yellow-300 opacity-60 filter blur-3xl animate-float" />
        <div className="absolute rounded-full right-8 bottom-10 w-60 h-60 bg-white/10 backdrop-blur-md" />
      </div>
    </header>
  );
};

export default Header;
