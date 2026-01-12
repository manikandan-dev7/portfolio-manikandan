import React from "react";

const Resume = () => {
  const profileUrl =
    "https://avatars.dicebear.com/api/avataaars/Manik.png?background=%23ffffff";

  return (
    <section
      id="resume"
      className="min-h-screen bg-gradient-to-b from-white to-gray-100 py-16 px-4"
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-1 flex flex-col items-center md:items-start space-y-4 animate-fadeInUp">
          <img
            src={profileUrl}
            alt="Profile"
            className="w-40 h-40 rounded-full shadow-lg border-4 border-white -mt-16"
          />
          <h2 className="text-2xl font-bold">Manikandan</h2>
          <p className="text-indigo-600 font-semibold">
            Aspiring MERN Stack Developer
          </p>
          <p className="text-gray-600">
            Hi — I'm an aspiring MERN stack developer building full-stack
            applications using MongoDB, Express, React and Node. I enjoy
            crafting interactive UIs, improving performance and exploring
            AI-enhanced developer tools.
          </p>
          <div className="flex gap-3">
            <a
              href="/resume.pdf"
              className="mt-2 inline-block px-4 py-2 bg-indigo-600 text-white rounded shadow hover:bg-indigo-700 transition"
            >
              Download Resume
            </a>
            <a
              href="mailto:youremail@example.com"
              className="mt-2 inline-block px-4 py-2 border border-indigo-600 text-indigo-600 rounded hover:bg-indigo-50 transition"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="md:col-span-2 space-y-8">
          <div className="bg-white p-6 rounded-lg shadow animate-fadeInUp">
            <h3 className="text-xl font-semibold mb-4">Resume</h3>

            <div>
              <h4 className="font-semibold">Experience</h4>
              <p className="text-sm text-gray-600">
                Frontend Developer Intern — Company · Jun 2024 - Aug 2024
              </p>
              <p className="text-sm text-gray-600">
                Worked on React components, implemented responsive UI and
                improved bundle size.
              </p>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold">Education</h4>
              <p className="text-sm text-gray-600">
                B.Sc. in Computer Science — University Name · 2020 - 2024
              </p>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold">Skills</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 bg-gray-100 rounded">React</span>
                <span className="px-3 py-1 bg-gray-100 rounded">Node.js</span>
                <span className="px-3 py-1 bg-gray-100 rounded">Express</span>
                <span className="px-3 py-1 bg-gray-100 rounded">MongoDB</span>
                <span className="px-3 py-1 bg-gray-100 rounded">
                  Tailwind CSS
                </span>
                <span className="px-3 py-1 bg-gray-100 rounded">
                  JavaScript
                </span>
              </div>
            </div>
          </div>

          <div
            id="projects"
            className="bg-white p-6 rounded-lg shadow animate-fadeInUp"
          >
            <h3 className="text-xl font-semibold mb-4">Projects</h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 border rounded hover:shadow-lg transition">
                <h4 className="font-semibold">Project One</h4>
                <p className="text-sm text-gray-600">
                  A MERN app that does X. Built with React, Node and MongoDB.
                </p>
                <a href="#" className="text-indigo-600 mt-2 inline-block">
                  View
                </a>
              </div>

              <div className="p-4 border rounded hover:shadow-lg transition">
                <h4 className="font-semibold">Project Two</h4>
                <p className="text-sm text-gray-600">
                  A full-stack dashboard with authentication and real-time
                  updates.
                </p>
                <a href="#" className="text-indigo-600 mt-2 inline-block">
                  View
                </a>
              </div>

              <div className="p-4 border rounded hover:shadow-lg transition">
                <h4 className="font-semibold">Project Three</h4>
                <p className="text-sm text-gray-600">
                  An AI-powered utility built with Node and external APIs.
                </p>
                <a href="#" className="text-indigo-600 mt-2 inline-block">
                  View
                </a>
              </div>

              <div className="p-4 border rounded hover:shadow-lg transition">
                <h4 className="font-semibold">Add More</h4>
                <p className="text-sm text-gray-600">
                  Add your projects here — link to GitHub or live demo.
                </p>
                <a href="#" className="text-indigo-600 mt-2 inline-block">
                  Edit
                </a>
              </div>
            </div>

            <p className="mt-4 text-gray-500">
              Tip: replace project placeholders with real links and screenshots
              for a stronger portfolio.
            </p>
          </div>

          <div
            id="contact"
            className="bg-white p-6 rounded-lg shadow animate-fadeInUp"
          >
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-gray-600">
              I'm open to collaboration and opportunities — reach out via email.
            </p>
            <a
              href="mailto:youremail@example.com"
              className="mt-3 inline-block px-4 py-2 bg-indigo-600 text-white rounded shadow hover:bg-indigo-700 transition"
            >
              Say hello
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
