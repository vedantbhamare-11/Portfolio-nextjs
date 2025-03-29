import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="bg-black py-4">
      <div className="w-full hover:animate-slow-scroll container mx-auto flex flex-col sm:flex-row justify-center items-center">
        {/* Skills List */}
        <div className="relative overflow-hidden whitespace-nowrap w-full">
          <ul
            className="inline-flex py-2 font-semibold text-3xl lg:text-4xl text-yellow-400 space-x-8"
            style={{
              animation: "scrollSkills 30s linear infinite",
              backgroundColor: "#000",
            }}
          >
            <li>Web Technologies</li>
            <li>TypeScript</li>
            <li>Node JS</li>
            <li>React JS</li>
            <li>Next JS</li>
            <li>React Native</li>
            <li>MongoDB</li>
            <li>SQL</li>
            <li>Hugging Face</li>
            <li>Redux</li>
            <li>Python</li>
            <li>GitHub</li>
            <li>Bootstrap</li>
            <li>Data Structures</li>
            <li>Algorithms</li>
            <li>Gen AI</li>
            <li className="mr-6">LLMs</li>
          </ul>

          {/* Duplicate the list for continuous scroll */}
          <ul
            className="inline-flex hover:animate-slow-scroll py-2 font-semibold text-3xl lg:text-4xl text-yellow-400 space-x-8"
            style={{
              animation: "scrollSkills 30s linear infinite",
              backgroundColor: "#000",
            }}
          >
            <li>Web Technologies</li>
            <li>TypeScript</li>
            <li>Node JS</li>
            <li>React JS</li>
            <li>Next JS</li>
            <li>React Native</li>
            <li>MongoDB</li>
            <li>SQL</li>
            <li>Hugging Face</li>
            <li>Redux</li>
            <li>Python</li>
            <li>GitHub</li>
            <li>Bootstrap</li>
            <li>Data Structures</li>
            <li>Algorithms</li>
            <li>Gen AI</li>
            <li>LLMs</li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollSkills {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .hover\\:animate-slow-scroll:hover {
          animation-duration: 60s !important;
        }
      `}</style>
    </section>
  );
};

export default Skills;
