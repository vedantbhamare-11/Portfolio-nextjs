"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navbar from "./Navbar";
import { ArrowRight, Mail } from "lucide-react";

const Header = () => {
  const [, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to AboutMe section
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center text-white z-10">
      {/* Hero Title with Fullstack Badge */}
      <div className="container mx-auto px-6 text-center max-w-4xl">
        {/* Name Container - Always Perfectly Centered */}
        <div className="relative inline-block mb-8">
          <motion.h1
            className="text-5xl mt-6 lg:mt-0 md:text-7xl font-bold uppercase tracking-wider bg-gradient-to-r from-white via-slate-100 to-purple-200 bg-clip-text text-transparent drop-shadow-2xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          >
            <motion.span className="block">Vedant</motion.span>
            <motion.span>Bhamare</motion.span>
          </motion.h1>

          {/* Fullstack Badge - Centered Above Name */}
          <motion.div
            className="absolute -top-12 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full shadow-2xl"
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(255,255,255,0.1)",
            }}
          >
            {/* Pulsating Status Dot */}
            <motion.div
              className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full shadow-lg"
              animate={{
                scale: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <span className="text-xs font-semibold capitalize text-white/90">
             SDE-2 @TMCC
            </span>
          </motion.div>
        </div>

        {/* Navbar */}
        <motion.div
          className="transition-all duration-300 mb-12"
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 2 }}
        >
          <Navbar />
        </motion.div>

        {/* Enhanced CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 2.5 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          {/* Primary CTA - Explore Work */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button
              asChild
              size="lg"
              className="group relative bg-white/90 backdrop-blur-sm text-slate-900 hover:bg-white hover:shadow-2xl hover:shadow-white/20 text-lg px-10 py-7 font-semibold border-0 overflow-hidden shadow-xl transition-all duration-500"
            >
              <Link href="#projects" className="flex items-center gap-3">
                <motion.div
                  className="w-6 h-6 flex items-center justify-center shrink-0"
                  whileHover={{
                    scale: 1.2,
                    rotate: 5,
                    backgroundColor: "rgb(147 51 234 / 0.9)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <ArrowRight className="w-5 h-5 text-slate-900" strokeWidth={3} />
                </motion.div>
                <span>Explore Work</span>
                <motion.div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl" />
              </Link>
            </Button>
          </motion.div>

          {/* Secondary CTA - Get In Touch */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="group relative border-white/50 bg-black/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white hover:shadow-2xl hover:shadow-purple-500/10 text-lg px-10 py-7 font-semibold transition-all duration-500 border-2 shadow-xl"
            >
              <Link href="#connect" className="flex items-center gap-3">
                <motion.div
                  className="w-6 h-6 flex items-center justify-center shrink-0"
                  whileHover={{
                    scale: 1.2,
                    rotate: -5,
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Mail className="w-5 h-5 text-white" strokeWidth={3} />
                </motion.div>
                <span>Get In Touch</span>
                <motion.span className="absolute inset-0 border-2 border-current opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg -z-10" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Now scrolls to AboutMe */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer z-20"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 0.6 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1.5,
          delay: 1.2,
        }}
        whileHover={{ scale: 1.1 }}
        onClick={scrollToAbout} // ✅ Smooth scroll to AboutMe
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="m19.5 13.5-7 7-7-7"
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default Header;
