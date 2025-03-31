import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleProjectDescription } from "../redux/projectsSlice";
import { RootState } from "../redux/store";

const Projects: React.FC = () => {
  const dispatch = useDispatch();
  const expandedProject = useSelector(
    (state: RootState) => state.projects.expandedProject
  );
  const projects = useSelector((state: RootState) => state.projects.projects);

  // Function to open the link when the card is clicked
  const openLink = (url: string) => {
    window.open(url, "_blank");
  };

  // Function to toggle the project description visibility
  const toggleDescription = (projectId: number) => {
    dispatch(toggleProjectDescription(projectId));
  };

  return (
    <section id="projects" className="py-10 bg-black">
      <h2 className="text-4xl font-semibold text-center text-yellow-400 mb-12">
        Where Vision Meets Code
      </h2>
      <div className="w-full grid lg:grid-cols-2 flex p-4 flex-wrap max-w-5xl min-h-32 flex-col gap-8 container mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col justify-around w-full p-6 rounded-4xl bg-[#202020] border border-transparent transition duration-300 hover:border-cyan-500 hover:shadow-xl"
            onClick={() => openLink(project.link)} // Make the card clickable to the Notion link
          >
            <h1 className="text-3xl font-bold text-white">{project.title}</h1>
            
            {/* Conditionally render the description based on the expanded state */}
            {expandedProject === project.id && (
              <p className="text-white text-lg">{project.description}</p>
            )}
            
            {/* Read More / Show Less Button */}
            <button
              className="text-cyan-400 mt-4 flex justify-end"
              onClick={(e) => {
                e.stopPropagation(); // Prevent the click from triggering the card link
                toggleDescription(project.id);
              }}
            >
              {expandedProject === project.id ? "Show Less" : "Read More"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
