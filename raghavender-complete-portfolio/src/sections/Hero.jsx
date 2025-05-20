import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <section
      id="home"
      className="py-24 flex flex-col justify-start items-center px-6 lg:px-24 bg-white dark:bg-gray-900"
    >
      <div className="max-w-4xl w-full text-left">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          Hi, I'm
        </h1>
        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-indigo-600">
          Raghavender Angadi
        </h2>
        <p className="text-2xl text-gray-700 dark:text-gray-300 font-medium mb-6">
          Full Stack Java Developer
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
          With 3+ years of experience designing, developing, and deploying scalable
          microservices using Java, Spring Boot, and Kafka. Skilled in RESTful APIs, Docker,
          AWS, and Agile development.
        </p>
        <div className="flex gap-4 mb-8">
          <a
            href="#projects"
            className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-full shadow hover:bg-indigo-700 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-indigo-500 text-indigo-600 font-medium rounded-full hover:bg-indigo-50 dark:hover:bg-gray-800 transition"
          >
            Contact Me
          </a>
        </div>
        <div className="flex gap-6 mb-6">
          <a
            href="https://www.linkedin.com/in/raghavender-angadi-a11718209/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow hover:scale-110 transition"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              className="w-5 h-5"
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://github.com/ARaghavender"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow hover:scale-110 transition"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              className="w-5 h-5 dark:invert"
              alt="GitHub"
            />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&to=angadiraghavender@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow hover:scale-110 transition"
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-indigo-600 text-sm" />
          </a>
          <a
            href="tel:9282667331"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow hover:scale-110 transition"
          >
            <FontAwesomeIcon icon={faPhone} className="text-indigo-600 text-sm" />
          </a>
        </div>

        
      </div>
    </section>
  );
}
