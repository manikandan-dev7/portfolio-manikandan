import React from "react";

const Resources = () => {
  const resources = [
    { name: "GitHub", href: "https://github.com/" },
    { name: "Code Samples", href: "#" },
    { name: "Blog / Notes", href: "#" },
  ];

  return (
    <section id="resources" className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4 text-black">
          Resources & Code
        </h2>
        <ul className="space-y-2">
          {resources.map((r) => (
            <li
              key={r.name}
              className="p-3 bg-white rounded shadow-sm reveal-on-scroll"
            >
              <a href={r.href} className="text-indigo-600">
                {r.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Resources;
