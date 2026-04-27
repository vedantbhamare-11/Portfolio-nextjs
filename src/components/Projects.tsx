"use client";
import React, { useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, BookOpen, Github, ChevronDown } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleProjectDescription,
  selectAllProjects,
  selectExpandedProject,
  type Project,
} from "../redux/projectsSlice";

// ── Animation Variants ────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.42, 0, 0.58, 1] },
  },
};

// ── Tag ───────────────────────────────────────────────────────────
const Tag: React.FC<{ label: string }> = ({ label }) => (
  <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-white/8 border border-white/10 text-slate-400 tracking-wide">
    {label}
  </span>
);

// ── ActionButton ──────────────────────────────────────────────────
interface ActionButtonProps {
  onClick: (e: React.MouseEvent) => void;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  title?: string;
  ariaLabel?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  onClick, icon, children, variant = "primary", title, ariaLabel,
}) => {
  const base =
    "flex items-center gap-2 rounded-2xl font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400";
  const variants = {
    primary: "px-5 py-2.5 bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:border-white/40 hover:shadow-lg hover:shadow-cyan-500/20",
    outline: "px-5 py-2.5 border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-500/30",
    ghost: "p-2.5 bg-white/5 border border-white/10 text-slate-400 hover:bg-white/10 hover:text-white hover:shadow-lg hover:shadow-cyan-500/20",
  };

  return (
    <button onClick={onClick} className={`${base} ${variants[variant]}`} title={title} aria-label={ariaLabel}>
      {icon}
      {children}
    </button>
  );
};

// ── ProjectCard ───────────────────────────────────────────────────
interface ProjectCardProps {
  project: Project;
  isExpanded: boolean;
  onToggle: (id: number) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isExpanded, onToggle }) => {
  const openLink = useCallback(
    (url?: string) => url && window.open(url, "_blank", "noopener noreferrer"),
    []
  );

  const stop = (fn: () => void) => (e: React.MouseEvent) => {
    e.stopPropagation();
    fn();
  };

  const demoUrl = project.liveUrl ?? project.link;
  const hasLive = !!project.liveUrl;

  return (
    <motion.article
      variants={cardVariants}
      className="group relative overflow-hidden bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-3xl p-7 cursor-pointer
                 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-1.5
                 transition-all duration-500"
      onClick={() => openLink(demoUrl)}
      tabIndex={0}
      role="article"
      aria-label={`${project.title} project`}
      onKeyDown={(e) => e.key === "Enter" && openLink(demoUrl)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/8 group-hover:to-purple-500/8 transition-all duration-500 pointer-events-none" />

      <div className="relative z-10 flex flex-col gap-5">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className={`w-2.5 h-2.5 rounded-full animate-pulse flex-shrink-0 ${project.category === "professional" ? "bg-emerald-400" : "bg-cyan-400"}`} />
            <span className="text-xs uppercase tracking-widest font-semibold text-slate-500">
              {project.category}
            </span>
          </div>
          {project.tags && (
            <div className="flex flex-wrap gap-1.5 justify-end">
              {project.tags.map((tag) => <Tag key={tag} label={tag} />)}
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300 tracking-tight leading-snug">
          {project.title}
        </h3>

        {/* Expandable Description */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              key="desc"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="text-slate-300 leading-relaxed text-base">
                {project.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Actions */}
        <div className="flex flex-wrap gap-3 items-center pt-1">
          {/* Live Demo or Case Study */}
          <ActionButton
            variant="primary"
            onClick={stop(() => openLink(demoUrl))}
            icon={hasLive ? <ExternalLink className="w-4 h-4" /> : <BookOpen className="w-4 h-4" />}
          >
            {hasLive ? "Live Demo" : "Case Study"}
          </ActionButton>

          {/* If there's a liveUrl, also show a separate Notion case study button */}
          {hasLive && (
            <ActionButton
              variant="ghost"
              onClick={stop(() => openLink(project.link))}
              icon={<BookOpen className="w-4 h-4" />}
              title="View Case Study"
              ariaLabel={`Case study for ${project.title}`}
            />
          )}

          {project.githubUrl && (
            <ActionButton
              variant="ghost"
              onClick={stop(() => openLink(project.githubUrl))}
              icon={<Github className="w-5 h-5" />}
              title="View Source Code"
              ariaLabel={`GitHub repository for ${project.title}`}
            />
          )}

          <ActionButton
            variant="outline"
            onClick={stop(() => onToggle(project.id))}
            icon={<ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />}
          >
            {isExpanded ? "Show Less" : "Read More"}
          </ActionButton>

          
        </div>
      </div>
    </motion.article>
  );
};

// ── Main ──────────────────────────────────────────────────────────
const Projects: React.FC = () => {
  const dispatch = useDispatch();
  const projects = useSelector(selectAllProjects);
  const expandedProject = useSelector(selectExpandedProject);

  const handleToggle = useCallback(
    (id: number) => dispatch(toggleProjectDescription(id)),
    [dispatch]
  );

  return (
    <section id="projects" className="relative w-full py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none" aria-hidden>
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <motion.div
        className="relative z-10 container mx-auto px-6 max-w-6xl"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div className="text-center mb-20" variants={cardVariants}>
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-widest bg-gradient-to-r from-white via-slate-100 to-cyan-400 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <motion.div
            className="w-20 h-px mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        {/* Grid */}
        <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-6" variants={containerVariants}>
          {[...projects].reverse().map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isExpanded={expandedProject === project.id}
              onToggle={handleToggle}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;