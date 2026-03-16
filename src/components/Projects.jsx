import React from "react";

const sample = [
  { title: "Project One", desc: "A MERN app that does X.", href: "#" },
  {
    title: "Project Two",
    desc: "Dashboard with auth and real-time updates.",
    href: "#",
  },
  {
    title: "Project Three",
    desc: "AI-powered utility integrating APIs.",
    href: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4 text-black">Projects</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {sample.map((p, i) => (
            <div
              key={i}
              className="p-4 bg-white rounded shadow-sm hover:shadow-md transition reveal-on-scroll"
            >
              <h3 className="font-semibold text-black">{p.title}</h3>
              <p className="text-sm text-black mt-2">{p.desc}</p>
              <a href={p.href} className="text-indigo-600 mt-3 inline-block">
                View
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
