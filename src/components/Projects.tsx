"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleProjectDescription } from "../redux/projectsSlice";
import { RootState } from "../redux/store";

const Projects: React.FC = () => {
  const dispatch = useDispatch();
  const expandedProject = useSelector(
    (state: RootState) => state.projects.expandedProject
  );
  const projects = useSelector((state: RootState) => state.projects.projects);

  const openLink = (url: string) => {
    window.open(url, "_blank");
  };

  const toggleDescription = (projectId: number) => {
    dispatch(toggleProjectDescription(projectId));
  };

  // Staggered animation variants
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.42, 0, 0.58, 1],
      }
    }
  };

  return (
    <section 
      id="projects" 
      className="relative w-full py-32 overflow-hidden "
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <motion.div 
        className="relative z-10 container mx-auto px-6 max-w-6xl"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div 
          className="text-center mb-24"
          variants={cardVariants}
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold uppercase tracking-widest bg-gradient-to-r from-white via-slate-100 to-cyan-400 bg-clip-text text-transparent drop-shadow-2xl mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-widest bg-gradient-to-r from-slate-100 via-white to-cyan-300 bg-clip-text text-transparent drop-shadow-2xl leading-tight">
                Featured Projects
              </h2>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-white to-cyan-400 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ originX: 0.5 }}
          />
        
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-2"
              onClick={() => openLink(project.link)}
            >
              {/* Card Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-white/2 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-all duration-500 -z-10" />
              
              {/* Project Header */}
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full animate-pulse" />
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                    {/* {project.category || "Featured"} */}
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300 tracking-tight">
                  {project.title}
                </h3>

                {/* Expandable Description */}
                <motion.div
                  className="overflow-hidden mb-8"
                  animate={{ height: expandedProject === project.id ? "auto" : 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  {expandedProject === project.id && (
                    <p className="text-slate-300 leading-relaxed text-lg">
                      {project.description}
                    </p>
                  )}
                </motion.div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 items-center">
                  {/* Live Demo Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openLink(project.link);
                    }}
                    className="group/btn flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white font-semibold hover:bg-white/20 hover:border-white/40 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    Live Demo
                  </button>

                  {/* Toggle Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleDescription(project.id);
                    }}
                    className="flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-cyan-400/50 text-cyan-400 rounded-2xl font-semibold hover:bg-cyan-500/10 hover:border-cyan-400 hover:text-cyan-300 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30"
                  >
                    {expandedProject === project.id ? (
                      <>
                        Show Less
                        <svg className="w-4 h-4 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                      </>
                    ) : (
                      <>
                        Read More
                        <svg className="w-4 h-4 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </>
                    )}
                  </button>

                  {/* GitHub Link (if available) */}
                  {/* {project.github && ( */}
                    <button
                      // onClick={(e) => {
                      //   e.stopPropagation();
                      //   openLink(project.github!);
                      // }}
                      className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl text-slate-400 hover:bg-white/10 hover:text-white hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
                      title="View Source Code"
                    >
                      <Github className="w-5 h-5" />
                    </button>
                  {/* )} */}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
