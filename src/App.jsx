import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Resources from "./components/Resources";
import Footer from "./components/Footer";
import Animations from "./components/Animations";
import Resume from "./components/Resume";
import ContactPage from "./pages/ContactPage";

function App() {
  const path = typeof window !== "undefined" ? window.location.pathname : "/";

  // Simple path-based rendering: /resume shows the resume page, /contact shows contacts
  if (path === "/resume") {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-black dark:text-gray-100">
        <Animations />
        <Header />
        <div className="pt-16">
          <Resume />
        </div>
        <Footer />
      </div>
    );
  }

  if (path === "/contact") {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-black dark:text-gray-100">
        <Header />
        <div className="pt-16">
          <ContactPage />
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-black dark:text-gray-100">
      <Animations />
      <Header />

      <main className="pt-16">
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Resources />
      </main>

      <Footer />
    </div>
  );
}

export default App;
