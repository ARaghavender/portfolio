import React from "react";

export default function About() {
  return (
    <section id="about" className="pb-24 pt-16 bg-white dark:bg-gray-900  scroll-mt-24 md:scroll-mt-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-2">
          About Me
          <span className="block w-24 h-1 bg-indigo-400 mx-auto mt-2 rounded-full" />
        </h2>
      
        <div className="max-w-5xl w-full text-left px-4 lg:px-0">
  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-justify">
    I am a passionate Full Stack Java Developer with over 3 years of experience in designing, developing, and deploying scalable microservices. I have successfully delivered faster deployment cycles through optimized CI/CD pipelines and improved system uptime by implementing resilient microservice patterns. I recently completed my M.S. in Computer Science at Northern Arizona University, where I also served as a Teaching Assistant, guiding students in mastering Large Scale Data Structures and Algorithms.
  </p>
</div>
      </div>
    </section>
  );
}
