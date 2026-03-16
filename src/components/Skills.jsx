import React from "react";

const Skills = () => {
  const skills = [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
    "JavaScript",
  ];

  return (
    <section id="skills" className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4 text-black">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <span
              key={s}
              className="px-3 py-1 bg-gray-100 rounded text-sm text-black"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
