import React from "react";

const Experience = () => {
  const items = [
    {
      role: "Frontend Developer Intern",
      org: "Company",
      date: "Jun 2024 - Aug 2024",
      desc: "Built React components, improved responsiveness and reduced bundle size.",
    },
  ];

  return (
    <section id="experience" className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-black">Experience</h2>
          {items.map((it, i) => (
            <article
              key={i}
              className="p-4 bg-white rounded shadow-sm reveal-on-scroll"
            >
              <h3 className="font-semibold text-black">
                {it.role} — {it.org}
              </h3>
              <p className="text-sm text-black">{it.date}</p>
              <p className="mt-2 text-black">{it.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
