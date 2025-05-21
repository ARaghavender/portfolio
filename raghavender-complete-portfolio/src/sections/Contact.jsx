import React from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const contactInfo = [
  {
    label: "Email",
    value: "angadiraghavender@gmail.com",
    icon: <MdEmail className="text-white text-2xl" />,
    link: "https://mail.google.com/mail/?view=cm&to=angadiraghavender@gmail.com",
  },
  {
    label: "Phone",
    value: "9282667331",
    icon: <MdPhone className="text-white text-2xl" />,
  },
  {
    label: "LinkedIn",
    value: "Raghavender Angadi",
    icon: <FaLinkedin className="text-white text-2xl" />,
    link: "https://www.linkedin.com/in/raghavenderangadi",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="pt-16  scroll-mt-24 md:scroll-mt-32 pb-0">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-2">
          Contact Me
          <span className="block w-24 h-1 bg-indigo-400 mx-auto mt-2 rounded-full" />
        </h2>
        

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-500">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-indigo-600 mb-1">{item.label}</h3>
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline break-words"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-blue-500 break-words">{item.value}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 bg-gray-900 py-10 text-center">
        <h3 className="text-2xl font-bold text-purple-400 mb-2">RA</h3>
        <p className="text-white mb-6">
          Thank you for visiting my portfolio. Feel free to reach out if you have any questions or opportunities.
        </p>

        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://www.linkedin.com/in/raghavenderangadi"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-purple-600 p-3 rounded-full transition-colors"
          >
            <FaLinkedin className="text-white text-xl" />
          </a>
          <a
            href="https://github.com/raghavenderangadi"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-purple-600 p-3 rounded-full transition-colors"
          >
            <FaGithub className="text-white text-xl" />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&to=angadiraghavender@gmail.com"
            className="bg-gray-800 hover:bg-purple-600 p-3 rounded-full transition-colors"
          >
            <MdEmail className="text-white text-xl" />
          </a>
        </div>

        <hr className="border-gray-700 max-w-sm mx-auto mb-4" />
        <p className="text-sm text-gray-400">
          © 2025 Raghavender Angadi. All rights reserved.
        </p>
      </footer>
    </section>
  );
}
