"use client";
import { motion } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

const AboutMe = () => {
  const [isImportantOnly, setIsImportantOnly] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVisibility = () => {
    setIsImportantOnly(!isImportantOnly);
  };

  const techStack = [
    { name: "Web Technologies", color: "from-slate-400 to-gray-400" },
    { name: "TypeScript", color: "from-blue-400 to-indigo-400" },
    { name: "React JS", color: "from-cyan-400 to-blue-400" },
    { name: "Next JS", color: "from-slate-200 to-gray-300" },
    { name: "React Native", color: "from-purple-400 to-pink-400" },
    { name: "MongoDB", color: "from-green-500 to-emerald-600" },
    { name: "SQL", color: "from-orange-400 to-amber-500" },
    { name: "Redux", color: "from-red-400 to-orange-400" },
    { name: "Python", color: "from-yellow-400 to-orange-400" },
    { name: "Gen AI", color: "from-fuchsia-500 to-pink-500" },
    { name: "LLMs", color: "from-violet-500 to-purple-600" },
    { name: "AI", color: "from-indigo-500 to-purple-500" },
  ];

  // Video autoplay + loop control
  useEffect(() => {
    const video = videoRef.current;
    if (video && !isImportantOnly) {
      video.play();
      video.loop = true;
      video.muted = true;
    }
  }, [isImportantOnly]);

  return (
    <section
      id="about"
      className="relative w-full min-h-screen py-12 sm:py-20 md:py-24 lg:py-32 overflow-hidden z-20"
    >
      <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-8 lg:gap-16">
          {/* Right Side - Video/Profile (Top on Mobile) */}
          <motion.div
            className="w-full lg:flex-1 lg:w-auto order-1 lg:order-2 mx-auto lg:ml-auto max-w-sm lg:max-w-md xl:max-w-lg"
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="relative w-full h-[320px] sm:h-[380px] md:h-[420px] lg:h-[480px] xl:h-[560px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl border border-slate-800/50 backdrop-blur-xl hover:border-cyan-500/40 group transition-all duration-700 hover:shadow-3xl hover:shadow-cyan-500/30 mx-auto aspect-[3/4]">
              
              {/* VIDEO - Shows when !isImportantOnly (Full Story) */}
              {!isImportantOnly ? (
                <motion.video
                  ref={videoRef}
                  className="w-full h-full object-cover rounded-2xl lg:rounded-3xl hover:scale-[1.02] transition-transform duration-700 group-hover:scale-[1.05]"
                  loop
                  muted
                  playsInline
                  preload="auto"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <source src="/personal/scene.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </motion.video>
              ) : null}

              {/* PROFILE PHOTO - VERTICAL (3:4 aspect ratio) */}
              {isImportantOnly ? (
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
                    className="object-cover hover:scale-[1.02] transition-transform duration-700 group-hover:scale-[1.05] rounded-2xl lg:rounded-3xl"
                    priority
                  />
                  
                  {/* Profile Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent/80 to-transparent pointer-events-none" />
                  
                  {/* Profile Glow */}
                  <div className="absolute -inset-2 lg:-inset-4 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-slate-900/20 rounded-3xl blur-xl animate-pulse opacity-70" />
                  
                  
                </motion.div>
              ) : null}
            </div>
          </motion.div>

          {/* About Content - Left Side (Bottom on Mobile) */}
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

              {/* Toggle Switch */}
              <div 
                className="flex flex-col justify-start items-start gap-2 cursor-pointer group min-w-[120px]" 
                onClick={toggleVisibility}
              >
                <div className="relative">
                  <div className="w-10 h-5 bg-slate-800/50 backdrop-blur-sm border-2 border-slate-600/50 rounded-full peer-checked:bg-gradient-to-r peer-checked:from-cyan-500/60 peer-checked:to-purple-500/60 peer-checked:border-cyan-400/50 transition-all duration-500 shadow-lg peer-checked:shadow-cyan-500/25 overflow-hidden group-hover:shadow-cyan-400/30">
                    <motion.div
                      className="w-3 h-3 bg-gradient-to-r from-slate-200 to-white rounded-full shadow-lg absolute top-0.5 group-hover:shadow-white/50"
                      animate={{ x: isImportantOnly ? 23 : 1 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                  </div>
                </div>
                <motion.span 
                  className="text-xs uppercase text-slate-400 font-medium origin-left tracking-wide"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, scale: isImportantOnly ? 1.05 : 1 }}
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
              <span className={isImportantOnly ? "font-normal" : "font-normal"}>
                Hey! I&apos;m a
              </span>{" "}
              <span className={isImportantOnly ? "font-bold text-white drop-shadow-lg" : "font-normal"}>
                Software Developer
              </span>{" "}
              <span className={isImportantOnly ? "font-normal" : "font-normal"}>
                who&apos;s equally at home building sleek UIs with
              </span>{" "}
              <span className={isImportantOnly ? "font-bold text-white drop-shadow-lg" : "font-normal"}>
                React, Next.js
              </span>
              <span className={isImportantOnly ? "font-normal" : "font-normal"}>
                , and
              </span>{" "}
              <span className={isImportantOnly ? "font-bold text-white drop-shadow-lg" : "font-normal"}>
                React Native
              </span>{" "}
              <span className={isImportantOnly ? "font-normal" : "font-normal"}>
                as I am creating robust back-end solutions with
              </span>{" "}
              <span className={isImportantOnly ? "font-bold text-white drop-shadow-lg" : "font-normal"}>
                Node.js
              </span>
              <span className={isImportantOnly ? "font-normal" : "font-normal"}>
                , and
              </span>{" "}
              <span className={isImportantOnly ? "font-bold text-white drop-shadow-lg" : "font-normal"}>
                Python.
              </span>
              <br />
              <br />
              <span className={isImportantOnly ? "font-normal" : "font-normal"}>
                I&apos;m fluent in
              </span>{" "}
              <span className={isImportantOnly ? "font-bold text-white drop-shadow-lg" : "font-normal"}>
                TypeScript
              </span>
              <span className={isImportantOnly ? "font-normal" : "font-normal"}>
                , and libraries like
              </span>{" "}
              <span className={isImportantOnly ? "font-bold text-white drop-shadow-lg" : "font-normal"}>
                Material UI, Tailwind CSS, ShadCN
              </span>
              <span className={isImportantOnly ? "font-normal" : "font-normal"}>
                , and
              </span>{" "}
              <span className={isImportantOnly ? "font-bold text-white drop-shadow-lg" : "font-normal"}>
                Bootstrap
              </span>{" "}
              <span className={isImportantOnly ? "font-normal" : "font-normal"}>
                for responsive designs.
              </span>
              <br />
              <br />
              <span className={isImportantOnly ? "font-bold text-white drop-shadow-2xl" : "font-semibold text-white drop-shadow-lg"}>
                Let&apos;s build something awesome!
              </span>
            </motion.p>

            {/* Tech Stack Badges - Responsive Grid */}
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
                  className={`px-3 py-2 sm:px-4 sm:py-2 bg-slate-800/40 backdrop-blur-xl border border-slate-600/40 hover:border-cyan-400/50 rounded-xl sm:rounded-full shadow-xl hover:shadow-cyan-500/30 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-purple-500/10 transition-all duration-400 cursor-default flex items-center gap-1.5 sm:gap-2 hover:scale-105 hover:-translate-y-1 text-xs sm:text-xs`}
                  whileHover={{ scale: 1.08, y: -3 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.08 }}
                >
                  <div
                    className={`w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r ${tech.color} rounded-full shadow-lg flex-shrink-0`}
                  />
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
