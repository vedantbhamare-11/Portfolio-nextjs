"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectSkills } from "../redux/skillsSlice";

const AboutMe = () => {
  const [isImportantOnly, setIsImportantOnly] = useState(false);
  const techStack = useSelector(selectSkills);

  return (
    <section
      id="about"
      className="relative w-full min-h-screen py-12 sm:py-20 md:py-24 lg:py-32 overflow-hidden z-20"
    >
      <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-8 lg:gap-16">

          {/* Profile Picture */}
          <motion.div
            className="w-full lg:flex-1 lg:w-auto order-1 lg:order-2 mx-auto lg:ml-auto max-w-sm lg:max-w-md xl:max-w-lg"
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="relative w-full h-[320px] sm:h-[380px] md:h-[420px] lg:h-[480px] xl:h-[560px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl border border-slate-800/50 backdrop-blur-xl hover:border-cyan-500/40 group transition-all duration-700 hover:shadow-3xl hover:shadow-cyan-500/30 mx-auto aspect-[3/4]">
              <motion.div
                className="w-full h-full relative rounded-2xl lg:rounded-3xl overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src="/personal/profile-pic.jpeg"
                  alt="Vedant Bhamare"
                  fill
                  className="object-cover hover:scale-[1.02] transition-transform duration-700 group-hover:scale-[1.05]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent/80 to-transparent pointer-events-none" />
                <div className="absolute -inset-2 lg:-inset-4 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-slate-900/20 rounded-3xl blur-xl animate-pulse opacity-70" />
              </motion.div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            className="flex-1 text-white max-w-xl lg:max-w-none order-2 lg:order-1 w-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Header with Toggle */}
            <motion.div
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12 gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-widest bg-gradient-to-r from-slate-100 via-white to-cyan-300 bg-clip-text text-transparent drop-shadow-2xl leading-tight">
                About Me
              </h2>

              <div
                className="flex flex-col justify-start items-start gap-2 cursor-pointer group min-w-[120px]"
                onClick={() => setIsImportantOnly((prev) => !prev)}
              >
                <div className="relative">
                  <div className="w-10 h-5 bg-slate-800/50 backdrop-blur-sm border-2 border-slate-600/50 rounded-full transition-all duration-500 shadow-lg overflow-hidden group-hover:shadow-cyan-400/30">
                    <motion.div
                      className="w-3 h-3 bg-gradient-to-r from-slate-200 to-white rounded-full shadow-lg absolute top-0.5 group-hover:shadow-white/50"
                      animate={{ x: isImportantOnly ? 23 : 1 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                  </div>
                </div>
                <motion.span
                  className="text-xs uppercase text-slate-400 font-medium origin-left tracking-wide"
                  animate={{ scale: isImportantOnly ? 1.05 : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {isImportantOnly ? "No-Nonsense" : "Full Story"}
                </motion.span>
              </div>
            </motion.div>

            {/* About Text */}
            <motion.p
              className="text-base sm:text-lg lg:text-xl leading-relaxed text-slate-300 mb-8 sm:mb-12 max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Hey! I&apos;m a{" "}
              <span className={isImportantOnly ? "font-bold text-white drop-shadow-lg" : ""}>
                Software Developer
              </span>{" "}
              who&apos;s equally at home building sleek UIs with{" "}
              <span className={isImportantOnly ? "font-bold text-white drop-shadow-lg" : ""}>
                React, Next.js
              </span>{" "}
              and{" "}
              <span className={isImportantOnly ? "font-bold text-white drop-shadow-lg" : ""}>
                React Native
              </span>{" "}
              as I am creating robust back-end solutions with{" "}
              <span className={isImportantOnly ? "font-bold text-white drop-shadow-lg" : ""}>
                Node.js
              </span>{" "}
              and{" "}
              <span className={isImportantOnly ? "font-bold text-white drop-shadow-lg" : ""}>
                Python.
              </span>
              <br /><br />
              I&apos;m fluent in{" "}
              <span className={isImportantOnly ? "font-bold text-white drop-shadow-lg" : ""}>
                TypeScript
              </span>
              , and libraries like{" "}
              <span className={isImportantOnly ? "font-bold text-white drop-shadow-lg" : ""}>
                Material UI, Tailwind CSS, ShadCN
              </span>{" "}
              and{" "}
              <span className={isImportantOnly ? "font-bold text-white drop-shadow-lg" : ""}>
                Bootstrap
              </span>{" "}
              for responsive designs.
              <br /><br />
              <span className={isImportantOnly ? "font-bold text-white drop-shadow-2xl" : "font-semibold text-white drop-shadow-lg"}>
                Let&apos;s build something awesome!
              </span>
            </motion.p>

            {/* Tech Stack Badges — from Redux */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 lg:flex flex-wrap gap-2 sm:gap-3"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="px-3 py-2 sm:px-4 sm:py-2 bg-slate-800/40 backdrop-blur-xl border border-slate-600/40 hover:border-cyan-400/50 rounded-xl sm:rounded-full shadow-xl hover:shadow-cyan-500/30 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-purple-500/10 transition-all duration-400 cursor-default flex items-center gap-1.5 sm:gap-2 hover:scale-105 hover:-translate-y-1 text-xs sm:text-xs"
                  whileHover={{ scale: 1.08, y: -3 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.08 }}
                >
                  <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r ${tech.color} rounded-full shadow-lg flex-shrink-0`} />
                  <span className="font-semibold uppercase tracking-wider text-slate-200 drop-shadow-md truncate">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;