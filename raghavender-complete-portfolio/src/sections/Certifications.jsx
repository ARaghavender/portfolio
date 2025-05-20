import React from "react";
import { FaGoogle, FaDocker, FaJava, FaMicrosoft } from "react-icons/fa";
import { SiHtml5 } from "react-icons/si";

const certifications = [
  {
    title: "Spring Boot Badge – Google",
    icon: <FaGoogle className="text-white text-xl" />,
  },
  {
    title: "Docker Foundations – Professional Certificate",
    icon: <FaDocker className="text-white text-xl" />,
  },
  {
    title: "Java Foundations – JetBrains",
    icon: <FaJava className="text-white text-xl" />,
  },
  {
    title: "Career Essentials in Software Development – Microsoft & LinkedIn",
    icon: <FaMicrosoft className="text-white text-xl" />,
  },
  {
    title: "Building a Single Page Website – Coursera",
    icon: <SiHtml5 className="text-white text-xl" />,
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-2">
          Certifications
        </h2>
        <div className="flex justify-center mb-12">
          <div className="w-20 h-1 bg-purple-400 rounded"></div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-2xl px-5 py-4 transition-shadow hover:shadow-xl"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500">
                {cert.icon}
              </div>
              <p className="text-gray-800 dark:text-white font-medium">
                {cert.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
