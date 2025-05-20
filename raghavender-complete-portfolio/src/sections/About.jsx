import React from "react";
import profileImage from "../images/profile_pic.jpg"; // ✅ Correct image import

export default function About() {
  return (
    <section id="about" className="pb-24 pt-16 bg-white dark:bg-gray-900 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-2">
          About Me
        </h2>
        <div className="flex justify-center mb-12">
          <div className="w-24 h-1 bg-indigo-500 rounded"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="relative flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-indigo-200 shadow-xl relative">
                <img 
                  src={profileImage} 
                  alt="Raghavender Angadi" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-700 to-indigo-500 opacity-10"></div>
              </div>
              <div
                className="absolute -bottom-4 -right-4 bg-indigo-500 rounded-full w-64 h-64 md:w-80 md:h-80 -z-10 opacity-30"
                aria-hidden="true"
              ></div>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Full Stack Java Developer
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I am a passionate Full Stack Java Developer with over 3+ years of experience in designing, developing, and deploying scalable microservices. I have successfully delivered faster deployment cycles through optimized CI/CD pipelines and improved system uptime by implementing resilient microservice patterns.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Currently pursuing my M.S. in Computer Science at Northern Arizona University, I am expanding my knowledge and skills while also serving as a Teaching Assistant, guiding students in mastering Large Scale Data Structures and Algorithms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
