import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import profileImage from "../images/profile_pic.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="py-24 px-6 lg:px-24  scroll-mt-24 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-center gap-8">
        {/* Centered Text */}
        <div className="w-full lg:w-2/3 max-w-4xl text-center lg:text-left">
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
          Crafting scalable microservices that power seamless, cloud-native experiences.
          </p>

          <div className="flex justify-center lg:justify-start gap-4 mb-8">
            <a
              href="#projects"
              className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-full shadow hover:bg-indigo-700 transition"
            >
              View Projects
            </a>
            <a
              href="/Raghavender_Angadi.pdf"
              download
              className="px-8 py-3 border border-indigo-500 text-indigo-600 font-medium rounded-full hover:bg-indigo-50 dark:hover:bg-gray-800 transition"
            >
              Download Resume
            </a>
          </div>

          <div className="flex justify-center lg:justify-start gap-6 mb-6">
            <a href="https://www.linkedin.com/in/raghavender-angadi-a11718209/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow hover:scale-110 transition">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" className="w-5 h-5" alt="LinkedIn" />
            </a>
            <a href="https://github.com/ARaghavender" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow hover:scale-110 transition">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" className="w-5 h-5 dark:invert" alt="GitHub" />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&to=angadiraghavender@gmail.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow hover:scale-110 transition">
              <FontAwesomeIcon icon={faEnvelope} className="text-indigo-600 text-sm" />
            </a>
            <a href="tel:9282667331" className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow hover:scale-110 transition">
              <FontAwesomeIcon icon={faPhone} className="text-indigo-600 text-sm" />
            </a>
          </div>
        </div>

        {/* Profile Image on Right */}
        <div className="hidden lg:block w-64 h-64 rounded-full overflow-hidden border-8 border-indigo-200 shadow-xl">
          <img
            src={profileImage}
            alt="Raghavender Angadi"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
