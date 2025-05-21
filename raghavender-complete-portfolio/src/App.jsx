// src/App.jsx
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Certifications from "./sections/Certifications";
import Achievements from "./sections/Achievements";
import Contact from "./sections/Contact";

export default function App() {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme || (document.documentElement.classList.contains("dark") ? "dark" : "light");
  });

  const applyTheme = (newTheme) => {
    setTheme(newTheme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
    document.documentElement.style.colorScheme = newTheme;
  };

  const handleUserThemeChange = (newTheme) => {
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    localStorage.setItem("theme-preference", "user");
  };

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    handleUserThemeChange(newTheme);
  };

  useEffect(() => {
    document.documentElement.classList.add("theme-transition"); // ✅ only once after mount

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = (e) => {
      const userPreference = localStorage.getItem("theme-preference");
      if (userPreference !== "user") {
        const newSystemTheme = e.matches ? "dark" : "light";
        applyTheme(newSystemTheme);
        localStorage.setItem("theme", newSystemTheme);
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    // Ensure correct theme is set on mount
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    document.documentElement.style.colorScheme = theme;

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, [theme]);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="flex-grow space-y-20 pt-20">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}
