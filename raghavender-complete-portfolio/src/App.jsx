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
  const [theme, setTheme] = useState(""); // Start with empty theme

  // Set initial theme from localStorage or system preference
  useEffect(() => {
    // First check if there's a saved theme in localStorage
    const savedTheme = localStorage.getItem("theme");
    
    if (savedTheme) {
      // If there's a saved theme, use it
      setTheme(savedTheme);
    } else {
      // Otherwise, use system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const systemTheme = prefersDark ? "dark" : "light";
      setTheme(systemTheme);
      localStorage.setItem("theme", systemTheme);
    }
  }, []);

  // Apply theme to <html> whenever theme changes
  useEffect(() => {
    // Only apply theme if it's not empty (prevents flash on initial load)
    if (theme) {
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  // Toggle theme function that you can pass to components
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  // Don't render until theme is determined to prevent flash
  if (!theme) return null;

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <Header theme={theme} setTheme={setTheme} toggleTheme={toggleTheme} />
      
      <main className="space-y-20 pt-20">
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