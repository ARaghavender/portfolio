import React from "react";

const projects = [
  {
    title: "Blueprint Questionnaire – ADP",
    date: "Jul 2022 – Dec 2023",
    tags: ["Java", "Spring Boot", "REST APIs", "Microservices", "ADP Cloud"],
    description: `
      • Enhanced the Blueprint Questionnaire module by standardizing data validation, resulting in a 99% accuracy rate for payroll configuration and reduced downstream errors by 10%.\n
       Implemented scalable microservices using Spring Boot and RESTful APIs, integrated with ADP’s cloud-based HCM platform and enhanced client onboarding by automating data ingestion and reducing manual configuration time.
    `
  },
  {
    title: "SmartBank API",
    date: "Jan 2021 – Mar 2022",
    tags: ["Java", "Spring Boot", "Kafka", "AWS", "Swagger"],
    description: `
      • Developed onboarding microservice using Kafka for real-time messaging; ensured 99.99% uptime and handled 500+ TPS.\n
      Documented and tested endpoints with Swagger and Postman; reduced bug rate by 40%.\n
      Automated deployment workflows using Jenkins and Docker, reducing release cycle time by 50%.
    `
  },
  {
    title: "3D Virtual Reality Website",
    date: "Nov 2021 – May 2022",
    tags: ["Three.js", "WebGL", "JavaScript","HTML","CSS"],
    description: `
      • Designed immersive VR learning platform using WebGL and Three.js, achieving 60 FPS rendering.\n
      Implemented real-time camera navigation, lighting, and mesh interactions for interactive UX.\n
      Conducted cross-device testing to ensure consistent performance on desktops, laptops, and VR headsets
    `
  }
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-32 py-16">
  <div className="max-w-6xl mx-auto px-6 lg:px-8">
    <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-2">
      Projects
      <span className="block w-24 h-1 bg-indigo-400 mx-auto mt-2 rounded-full" />
    </h2>
    

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          <div className="h-40 bg-gradient-to-br from-indigo-800 to-indigo-500"></div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-indigo-500 mb-1">
              {project.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{project.date}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full shadow"
                >
                  {tag}
                </span>
              ))}
            </div>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-2">
              {project.description
                .trim()
                .split("\n")
                .filter(Boolean)
                .map((line, lineIndex) => (
                  <li key={lineIndex}>{line.replace(/^•\s*/, "")}</li>
                ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}
