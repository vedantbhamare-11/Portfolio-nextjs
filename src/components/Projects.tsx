import React, { useState } from "react";

const Projects: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const openLink = (url: string) => {
    window.open(url, "_blank");
  };

  const toggleDescription = (projectId: number) => {
    if (expandedProject === projectId) {
      setExpandedProject(null); // Collapse if it's already expanded
    } else {
      setExpandedProject(projectId); // Expand the clicked project
    }
  };

  return (
    <section id="projects" className="py-10 bg-black">
      <h2 className="text-4xl font-semibold text-center text-cyan-400 mb-12">
        Where Vision Meets Code
      </h2>
      <div className="w-full flex p-4 flex-wrap max-w-5xl min-h-32 flex-col gap-8 container mx-auto">
        {/* Project Cards */}
        {/* Project 1 */}
        <div
          className="flex flex-col items-center justify-around w-full p-6 rounded-4xl bg-[#202020] border border-transparent transition duration-300 hover:border-cyan-500 hover:shadow-xl"
        >
          <h1 className="text-3xl font-bold text-white">
            Machine Learning for Road Assets and Defects
          </h1>
          {expandedProject === 1 && (
            <p className="text-white p-4 text-lg">
              Implemented object detection for road asset monitoring and defect detection on Indian roads, following NHAI guidelines. Enhanced road safety by automatically identifying and classifying assets while detecting defects like potholes and cracks.
            </p>
          )}
          <button
            className="text-cyan-400 mt-4"
            onClick={() => toggleDescription(1)}
          >
            {expandedProject === 1 ? "Show Less" : "Read More"}
          </button>
        </div>

        {/* Project 2 */}
        <div
          className="flex flex-col items-center justify-around w-full p-6 rounded-4xl bg-[#202020] border border-transparent transition duration-300 hover:border-cyan-500 hover:shadow-xl"
        >
          <h1 className="text-3xl font-bold text-white">
            Arogya : Diet and Yoga Scheduler
          </h1>
          {expandedProject === 2 && (
            <p className="text-white p-4 text-lg">
              This is the web-based Diet and Yoga Scheduler which uses a machine learning model to generate diet and yoga plans using users BMI and BMR for accurate plans.
            </p>
          )}
          <button
            className="text-cyan-400 mt-4"
            onClick={() => toggleDescription(2)}
          >
            {expandedProject === 2 ? "Show Less" : "Read More"}
          </button>
        </div>

        {/* Project 3 */}
        <div
          className="flex flex-col items-center justify-around w-full p-6 rounded-4xl bg-[#202020] border border-transparent transition duration-300 hover:border-cyan-500 hover:shadow-xl"
        >
          <h1 className="text-3xl font-bold text-white">Spi Game</h1>
          {expandedProject === 3 && (
            <p className="text-white p-4 text-lg">
              Spi is a multiplayer life simulation game where players navigate life processes to proliferate their species online. The game ends when a player exhausts energy or available space, promoting fair play with equal control for all.
            </p>
          )}
          <button
            className="text-cyan-400 mt-4"
            onClick={() => toggleDescription(3)}
          >
            {expandedProject === 3 ? "Show Less" : "Read More"}
          </button>
        </div>

        {/* Project 4 */}
        <div
          className="flex flex-col items-center justify-around w-full p-6 rounded-4xl bg-[#202020] border border-transparent transition duration-300 hover:border-cyan-500 hover:shadow-xl"
        >
          <h1 className="text-3xl font-bold text-white">
            AI Virtual Mouse Using Hand Gesture and Voice Assistant
          </h1>
          {expandedProject === 4 && (
            <p className="text-white p-4 text-lg">
              Explore the future of human-computer interaction with the AI Virtual Mouse. Effortlessly navigate your device using hand gestures and voice commands, revolutionizing productivity, accessibility, and security in a seamless integration across devices.
            </p>
          )}
          <button
            className="text-cyan-400 mt-4"
            onClick={() => toggleDescription(4)}
          >
            {expandedProject === 4 ? "Show Less" : "Read More"}
          </button>
        </div>

        {/* Project 5 */}
        <div
          className="flex flex-col items-center justify-around w-full p-6 rounded-4xl bg-[#202020] border border-transparent transition duration-300 hover:border-cyan-500 hover:shadow-xl"
        >
          <h1 className="text-3xl font-bold text-white">Effective Graph Library</h1>
          {expandedProject === 5 && (
            <p className="text-white p-4 text-lg">
              It is an open-source graph library which includes different types of graph algorithms. This library was implemented in the C++ language.
            </p>
          )}
          <button
            className="text-cyan-400 mt-4"
            onClick={() => toggleDescription(5)}
          >
            {expandedProject === 5 ? "Show Less" : "Read More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
