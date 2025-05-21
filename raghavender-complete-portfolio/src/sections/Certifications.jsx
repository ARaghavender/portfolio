import React from "react";
import { FaGoogle, FaDocker, FaJava, FaMicrosoft, FaGithub } from "react-icons/fa";
import { SiHtml5 } from "react-icons/si";

const certifications = [
  {
    title: "Spring Boot Badge – Google",
    icon: <FaGoogle className="text-white text-xl" />,
    link: "https://developers.google.com/profile/badges/playlists/cloud/springboot/"
  },
  {
    title: "Docker Foundations – Professional Certificate",
    icon: <FaDocker className="text-white text-xl" />,
    link: "https://www.linkedin.com/learning/certificates/6845a8d13304039ed8af9bb7345205f4a4c2231eeef582980f7d3e22ff440a40"
  },
  {
    title: "Java Foundations – JetBrains",
    icon: <FaJava className="text-white text-xl" />,
    link: "https://www.linkedin.com/learning/certificates/7075725c83145cb75e7413c94a3fa5ac4abdc8bc7a0e61862c2e52f8808fcc62"
  },
  {
    title: "Career Essentials in Software Development – Microsoft & LinkedIn",
    icon: <FaMicrosoft className="text-white text-xl" />,
    link: "https://www.linkedin.com/learning/certificates/4bb2deb0a65d88f76adfa553780695857cf9ff1cf9150bd1e3e9afad41eea1fe"
  },
  {
    title: "Building a Single Page Website – Coursera",
    icon: <SiHtml5 className="text-white text-xl" />,
    link: "https://drive.google.com/file/d/1b_5JPp4CU_wgN_n_EaaAHRsgvON9AW6Q/view"
  },
  {
    title: "GitHub Professional Certificate",
    icon: <FaGithub className="text-white text-xl" />,
    link: "https://www.linkedin.com/learning/certificates/f19e34ff2a86a3c135bd50d024aa773f0a9667cada17a3bf3a7066b3a0f0ce7d"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 scroll-mt-24 md:scroll-mt-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-2">
          Certifications
          <span className="block w-24 h-1 bg-indigo-400 mx-auto mt-2 rounded-full" />
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-2xl px-5 py-4 transition-shadow hover:shadow-xl hover:scale-[1.015]"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500">
                {cert.icon}
              </div>
              <p className="text-gray-800 dark:text-white font-medium">
                {cert.title}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
