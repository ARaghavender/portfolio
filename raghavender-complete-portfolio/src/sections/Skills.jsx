import React from "react";

const SkillSection = ({ title, skills }) => (
  <div className="mb-10">
    <h3 className="text-xl font-semibold text-indigo-600 mb-4">{title}</h3>
    <div className="flex flex-wrap gap-4">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full shadow text-sm font-medium"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-16 bg-white scroll-mt-24 md:scroll-mt-32 dark:bg-gray-900">
      {/* Section heading like the image */}
      <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-2">
        Skills
         <span className="block w-24 h-1 bg-indigo-400 mx-auto mt-2 rounded-full" />
      </h2>
     

      {/* No section background */}
      <SkillSection
        title="Languages"
        skills={["Java (17)", "Python", "SQL", "C++", "JavaScript"]}
      />

      <SkillSection
        title="Frameworks"
        skills={["Spring Boot", "Spring MVC", "Hibernate", "JPA", "Node.js", "React.js"]}
      />

      <SkillSection
        title="Tools & Technologies"
        skills={[
          "Kafka",
          "Jenkins",
          "Tortoise-Git",
          "Docker",
          "Kubernetes",
          "Maven",
          "Gradle",
          "Swagger",
          "Postman",
          "RESTful APIs",
          "Agile/Scrum",
          "TDD",
          "Multithreading",
          "Design Patterns",
          "OAuth"
        ]}
      />

      <SkillSection
        title="Databases"
        skills={["Oracle", "MySQL", "MongoDB", "PostgreSQL"]}
      />

      <SkillSection
        title="Cloud & DevOps"
        skills={["AWS EC2", "S3", "IAM", "CI/CD (Git Actions)"]}
      />

      <SkillSection
        title="UI/UX"
        skills={["HTML", "CSS", "Responsive Design", "Cross-Browser Compatibility"]}
      />
    </section>
  );
}
