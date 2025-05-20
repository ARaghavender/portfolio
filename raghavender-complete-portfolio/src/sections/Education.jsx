import React from "react";

const educationData = [
  {
    date: "Jan 2024 - May 2025",
    school: "Northern Arizona University",
    degree: "M.S. in Computer Science"
  },
  {
    date: "Aug 2018 - June 2022",
    school: "Vardhaman College of Engineering",
    degree: "B.Tech in Computer Science"
  }
];

export default function Education() {
  return (
    <section id="education" className="py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-2">
          Education
        </h2>
        <div className="flex justify-center mb-12">
          <div className="w-20 h-1 bg-purple-400 rounded"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="relative rounded-2xl p-6 border dark:border-gray-700 bg-white dark:bg-gray-900 transition-shadow duration-300 ease-in-out hover:shadow-xl"
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-l-2xl"></div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{edu.date}</p>
              <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">
                {edu.school}
              </h3>
              <p className="text-gray-800 dark:text-gray-200">{edu.degree}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
