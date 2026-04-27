import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Skills: React.FC = () => {
  const skills = useSelector((state: RootState) => state.skills.skillsList);

  return (
    <section id="skills" className="bg-black py-16">
      <div className="container mx-auto flex w-full flex-col items-center justify-center overflow-hidden">
        <div className="relative w-full overflow-hidden whitespace-nowrap">
          <ul
            className="inline-flex space-x-8 bg-yellow-300 py-4 text-3xl font-semibold italic text-black lg:text-4xl"
            style={{ animation: "scrollSkills 30s linear infinite" }}
          >
            {skills.map((skill, index) => (
              <li key={index} className="flex items-center">
                <span>{skill.name}</span>
                {index < skills.length - 1 && (
                  <span className="ml-7 text-4xl">&#x2734;</span>
                )}
              </li>
            ))}
          </ul>

          <ul
            className="inline-flex space-x-8 bg-yellow-300 py-4 text-3xl font-semibold italic text-black lg:text-4xl"
            style={{ animation: "scrollSkills 30s linear infinite" }}
          >
            {skills.map((skill, index) => (
              <li key={`duplicate-${index}`} className="flex items-center">
                <span>{skill.name}</span>
                {index < skills.length - 1 && (
                  <span className="ml-7 text-4xl">&#x2734;</span>
                )}
              </li>
            ))}
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