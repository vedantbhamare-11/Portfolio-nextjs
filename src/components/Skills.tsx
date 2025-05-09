import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store"; // Import the RootState type from the store

const Skills: React.FC = () => {
  // Get skills from Redux store and specify the state type
  const skills = useSelector((state: RootState) => state.skills.skillsList);

  return (
    <section id="skills" className="bg-black py-16">
      <div className="w-full  hover:animate-slow-scroll container mx-auto flex flex-col sm:flex-row justify-center items-center">
        {/* Skills List */}
        <div className="relative overflow-hidden whitespace-nowrap w-full">
          <ul
            className="italic inline-flex py-4 font-semibold text-3xl lg:text-4xl text-black space-x-8"
            style={{
              animation: "scrollSkills 30s linear infinite",
              backgroundColor: "#FFFF00",
            }}
          >
            {skills.map((skill: string, index: number) => (
              <li key={index}>
                {skill}
                {index < skills.length - 1 && (
                  <span className="text-4xl ml-7">&#x2734;</span>
                )}
              </li>
            ))}
          </ul>

          {/* Duplicate the list for continuous scroll */}
          <ul
            className="italic inline-flex hover:animate-slow-scroll py-4 font-semibold text-3xl lg:text-4xl text-black space-x-8"
            style={{
              animation: "scrollSkills 30s linear infinite",
              backgroundColor: "#FFFF00",
            }}
          >
            {skills.map((skill: string, index: number) => (
              <li key={index}>
                {skill}
                {index < skills.length - 1 && (
                  <span className="text-4xl ml-7">&#x2734;</span>
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
