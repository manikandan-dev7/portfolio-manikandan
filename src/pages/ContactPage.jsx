import React from "react";

const ContactPage = () => {
  return (
    <section className="flex items-center justify-center min-h-screen py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-xl p-8 mx-auto bg-white rounded-lg shadow-md">
        <h1 className="mb-4 text-2xl font-semibold text-black">Contact</h1>
        <p className="mb-2 text-black">
          Phone: <a href="tel:+917871918251" className="text-indigo-600">+91 78719 18251</a>
        </p>
        <p className="mb-2 text-black">
          LinkedIn: <a href="https://www.linkedin.com/in/mani-kandan-dev/" target="_blank" rel="noreferrer" className="text-indigo-600">linkedin.com/in/mani-kandan-dev</a>
        </p>
        <p className="mb-4 text-black">
          GitHub: <a href="https://github.com/manikandan-dev7" target="_blank" rel="noreferrer" className="text-indigo-600">github.com/manikandan-dev7</a>
        </p>

        <div className="flex gap-3 mt-4">
          <a href="/" className="px-4 py-2 bg-gray-100 rounded">Home</a>
          <a href="mailto:youremail@example.com" className="px-4 py-2 text-white bg-indigo-600 rounded">Email</a>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
