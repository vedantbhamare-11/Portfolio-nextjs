"use client";
import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { selectTimeline } from "../redux/timelineSlice";
import Image from "next/image";

// ── Animation Variants ────────────────────────────────────────────
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const nodeVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  show: {
    opacity: 1, scale: 1, rotate: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.92 },
  show: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 },
  },
};

const wrapperVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1, y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// ── Sub-components ────────────────────────────────────────────────
interface TimelineNodeProps {
  svgIcon?: string;
  logoUrl?: string;
  title: string;
  index: number;
}

const TimelineNode: React.FC<TimelineNodeProps> = ({ svgIcon, logoUrl, title, index }) => (
  <motion.div
    className="absolute left-0 lg:relative w-16 h-16 lg:w-24 lg:h-24 bg-white/10 backdrop-blur-xl border-2 border-white/20 rounded-3xl shadow-2xl hover:shadow-cyan-500/40 hover:border-cyan-400/50 transition-all duration-700 flex items-center justify-center group cursor-default"
    variants={nodeVariants}
    whileHover={{
      scale: 1.15,
      rotate: index % 2 === 0 ? 8 : -8,
      borderColor: "#22d3ee",
    }}
  >
    <div className="relative z-20 p-1">
      {svgIcon ? (
        <svg
          className="w-6 h-6 lg:w-12 lg:h-12 text-cyan-400 drop-shadow-2xl group-hover:text-white/90 transition-all duration-500"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d={svgIcon} />
        </svg>
      ) : logoUrl ? (
        <Image
          src={logoUrl}
          alt={`${title} logo`}
          width={44}
          height={44}
          className="w-8 h-8 lg:w-12 lg:h-12 rounded-2xl shadow-2xl object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
          priority={index < 2}
        />
      ) : (
        <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-cyan-400/80 to-purple-500/80 rounded-2xl animate-pulse shadow-lg" />
      )}
    </div>
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 via-white/20 to-purple-500/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10 animate-pulse [animation-delay:0.2s]" />
  </motion.div>
);

// ── Main Component ────────────────────────────────────────────────
const Timeline: React.FC = () => {
  const timelineData = useSelector(selectTimeline);

  return (
    <section id="timeline" className="relative w-full py-32 overflow-hidden">
      <motion.div
        className="relative z-10 container mx-auto px-6 max-w-5xl"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.05 }}
        variants={wrapperVariants}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-28" variants={headerVariants}>
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-widest bg-gradient-to-r from-slate-100 via-white to-cyan-300 bg-clip-text text-transparent drop-shadow-2xl mb-6 leading-tight"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
          >
            My Journey
          </motion.h2>
          <motion.div
            className="w-32 h-1 mx-auto bg-gradient-to-r from-transparent via-white/70 to-cyan-400 rounded-full shadow-xl"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ originX: 0.5 }}
          />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-8 lg:left-1/2 transform lg:-translate-x-1/2 w-px h-full bg-gradient-to-b from-cyan-400/40 via-white/30 to-purple-400/40 shadow-lg z-10" />

          <motion.ul className="space-y-16 lg:space-y-20" variants={containerVariants}>
            {timelineData.map((event, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                className="relative flex flex-col lg:flex-row items-start gap-8 lg:gap-0"
              >
                {/* Node + Date */}
                <motion.div
                  className="flex flex-col items-center w-full lg:w-1/2 z-20"
                  variants={itemVariants}
                >
                  <TimelineNode
                    svgIcon={event.svgIcon}
                    logoUrl={event.logoUrl}
                    title={event.title}
                    index={index}
                  />
                  <motion.div
                    className="mt-3 lg:mt-8 text-center"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    }}
                  >
                    <div className="ml-16 lg:ml-0 px-4 py-2 lg:px-6 lg:py-3 lg:bg-slate-900/60 lg:backdrop-blur-md lg:border lg:border-slate-700/60 text-xs lg:text-base font-extrabold lg:font-semibold uppercase tracking-widest text-slate-300 rounded-2xl lg:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:bg-slate-800/80">
                      {event.date}
                    </div>
                  </motion.div>
                </motion.div>

                {/* Content Card */}
                <motion.div
                  className={`lg:flex-1 lg:w-full max-w-lg lg:max-w-xl p-4 lg:p-8 lg:py-10 bg-white/8 backdrop-blur-2xl border border-white/15 rounded-3xl shadow-2xl hover:shadow-cyan-500/25 hover:border-cyan-400/40 transition-all duration-700 ml-16 lg:ml-12 ${
                    index % 2 === 0 ? "ml-0 lg:mr-12 self-end" : "mr-0"
                  }`}
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 25px 50px -12px rgba(34, 211, 238, 0.25)",
                  }}
                >
                  <h3 className="text-lg md:text-2xl lg:text-3xl font-bold text-white mb-5 leading-tight tracking-tight">
                    {event.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-sm lg:text-lg font-medium opacity-95">
                    {event.description}
                  </p>
                </motion.div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Timeline;