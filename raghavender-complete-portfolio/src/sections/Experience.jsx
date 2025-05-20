import React from "react";

const experiences = [
  {
    date: "Jan 2024 – Present",
    title: "Northern Arizona University",
    role: "Teaching Assistant – Computer Science",
    details: [
      "Guided 50+ students in mastering Large Scale Data Structures and Algorithms using Java, C++, and Python.",
      "Developed auto-grading tools, reducing evaluation time by 30% for lab assignments.",
      "Conducted 20+ lab sessions and provided 1:1 mentoring, boosting student success rates."
    ]
  },
  {
    date: "Jun 2022 – Dec 2023",
    title: "ADP",
    role: "Full Stack Java Developer",
    details: [
      "Engineered 10+ microservices for HCM systems using Java, Spring Boot, Kafka, and AWS, serving over 100,000 users with 99.99% uptime.",
      "Built CI/CD pipelines in Jenkins and Docker, reducing deployment cycle time by 40%.",
      "Led code reviews and mentored 3 junior developers; improved code quality metrics by 30%.",
      "Integrated Swagger for comprehensive API documentation, increasing onboarding speed by 20%."
    ]
  },
  {
    date: "Nov 2021 – May 2022",
    title: "Let's Grow More",
    role: "Web Development Intern",
    details: [
      "Built responsive frontend modules with HTML, CSS, and React.js, enhancing user retention by 25%.",
      "Created and deployed RESTful APIs using Node.js and Express, integrated with MySQL.",
      "Reduced average load time by 40% through optimization of static assets and lazy loading."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Experience
        </h2>
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-300 z-0"></div>

          <div className="space-y-24 relative z-10">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative w-full flex ${index % 2 === 0 ? "justify-start" : "justify-end"} group`}
              >
                {/* Experience Card */}
                <div className="w-full md:w-[48%] bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 z-10">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{exp.date}</p>
                  <h3 className="text-xl font-bold text-indigo-600 mb-1">{exp.title}</h3>
                  <h4 className="text-md font-semibold mb-3 text-gray-800 dark:text-white">{exp.role}</h4>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    {exp.details.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 z-20">
                  <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_0.6rem_#8b5cf6]">
                    <div className="w-4 h-4 rounded-full bg-purple-600 transition-all duration-300 group-hover:scale-125 group-hover:bg-purple-500"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
