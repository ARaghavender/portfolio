import React from "react";
import { FaTrophy, FaBolt, FaShieldAlt } from "react-icons/fa";

const achievements = [
  {
    icon: <FaTrophy className="text-indigo-400 text-3xl mb-4" />,
    text: "Delivered 5 major ADP modules ahead of schedule using Agile and Kanban methodologies.",
  },
  {
    icon: <FaBolt className="text-indigo-400 text-3xl mb-4" />,
    text: "Cut Jenkins build time by 30% by optimizing stages and parallelizing jobs.",
  },
  {
    icon: <FaShieldAlt className="text-indigo-400 text-3xl mb-4" />,
    text: "Achieved 95%+ code coverage by rigorously implementing unit and integration tests.",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-16 ">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12 relative">
          Achievements
          <span className="block w-24 h-1 bg-indigo-400 mx-auto mt-2 rounded-full" />
        </h2>

        {/* Cards Centered */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="w-full md:w-1/3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-6 rounded-xl border-t-4 border-indigo-400 shadow-lg transition-transform transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                {item.icon}
                <p className="mt-2 text-lg">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
