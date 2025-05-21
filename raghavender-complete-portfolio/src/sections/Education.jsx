import React from "react";

const educationData = [
  {
    date: "Jan 2024 - May 2025",
    school: "Northern Arizona University",
    degree: "M.S. in Computer Science",
    logo: "/logos/nau.png"
  },
  {
    date: "Aug 2018 - June 2022",
    school: "Vardhaman College of Engineering",
    degree: "B.Tech in Computer Science",
    logo: "/logos/vmeg.png"
  }
];

export default function Education() {
  return (
    <section id="education" className="py-16 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-2">
          Education
          <span className="block w-24 h-1 bg-indigo-400 mx-auto mt-2 rounded-full" />
        </h2>

        <div className="grid gap-8 md:grid-cols-2 mt-10">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="relative rounded-2xl p-6 border dark:border-gray-700 bg-white dark:bg-gray-900 transition-shadow duration-300 ease-in-out hover:shadow-xl"
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-l-2xl"></div>
              
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{edu.date}</p>
              
              <div className="flex items-center gap-3 mb-1">
                <img
                  src={edu.logo}
                  alt={`${edu.school} logo`}
                  className="h-8 w-8 object-contain"
                />
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">
                  {edu.school}
                </h3>
              </div>

              <p className="text-gray-800 dark:text-gray-200">{edu.degree}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
