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
  // Initialize theme from document class (set in index.js)
  const [theme, setTheme] = useState(
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  );

  // Function to handle theme changes
  const handleThemeChange = (newTheme) => {
    // Update state
    setTheme(newTheme);
    
    // Update document classes
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
    
    // Save to localStorage
    localStorage.setItem("theme", newTheme);
    
    // Log for debugging
    console.log(`Theme changed to: ${newTheme}`);
    console.log(`HTML classes: ${document.documentElement.className}`);
  };

  // Toggle theme function to pass to Header
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    handleThemeChange(newTheme);
  };

  // Watch for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    
    const handleSystemThemeChange = (e) => {
      // Only change theme if we're following system preference
      // (no localStorage theme has been set)
      if (!localStorage.getItem("theme")) {
        const newTheme = e.matches ? "dark" : "light";
        handleThemeChange(newTheme);
      }
    };
    
    // Listen for changes
    mediaQuery.addEventListener("change", handleSystemThemeChange);
    
    // Cleanup
    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  return (
    // Force the container to take the full height
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
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