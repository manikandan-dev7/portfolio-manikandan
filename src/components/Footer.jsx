import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 bg-white/60">
      <div className="max-w-4xl mx-auto px-4 text-center text-sm text-black">
        © {new Date().getFullYear()} Manikandan. Built with React & Tailwind.
      </div>
    </footer>
  );
};

export default Footer;
