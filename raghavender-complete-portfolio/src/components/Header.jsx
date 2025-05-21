import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function Header({ theme, setTheme }) {
  return (
    <header className="fixed top-0 w-full z-50 bg-white dark:bg-gray-900 shadow-sm border-b overflow-x-auto">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4 whitespace-nowrap">
        
        {/* Logo */}
        <div className="text-2xl font-extrabold text-indigo-600 font-pop tracking-tight">
          RA
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-8 text-[16px] font-normal font-pop tracking-normal">
          {[
            "Home",
            "About",
            "Skills",
            "Experience",
            "Projects",
            "Education",
            "Certifications",
            "Contact"
          ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group"
            >
              <span className="text-gray-800 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-500 transition duration-300">
                {item}
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>

        {/* Theme Toggle Only */}
        <div className="flex items-center">
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="text-xl text-gray-800 dark:text-white hover:text-indigo-500 dark:hover:text-indigo-400 transition"
            aria-label="Toggle Theme"
            title="Toggle Light/Dark Mode"
          >
            <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />
          </button>
        </div>
      </div>
    </header>
  );
}
