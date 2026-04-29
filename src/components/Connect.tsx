"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const Connect: React.FC = () => {
  const composeEmail = () => {
    const email = "vedantdbhamare@gmail.com";
    const subject = "Let's Connect";
    const body = "Hi Vedant,\n\nI would love to connect with you.";
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
    },
  };

  const primarySocials = [
    {
      href: "https://www.instagram.com/vedantbhamare_",
      label: "Instagram",
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      href: "https://x.com/VedantBhamare8",
      label: "X",
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      href: "https://www.linkedin.com/in/vedantbhamare11/",
      label: "LinkedIn",
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ];

  const secondarySocials = [
    {
      href: "https://github.com/vedantbhamare-11",
      label: "GitHub",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      ),
    },
    {
      href: "https://dev.to/vedantbhamare",
      label: "Dev.to",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.29zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z" />
        </svg>
      ),
    },
    {
      href: "https://medium.com/@vedantdbhamare",
      label: "Medium",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="connect" className="relative py-32 overflow-hidden">
      <motion.div
        className="relative z-10 container mx-auto px-6 max-w-5xl"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div className="text-center mb-20" variants={cardVariants}>
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-widest bg-gradient-to-r from-white via-slate-100 to-cyan-400 bg-clip-text text-transparent mb-6">
            Let&apos;s Connect
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-white to-cyan-400 rounded-full" />
          <p className="text-xl text-slate-400 mt-6 max-w-2xl mx-auto">
            Always up for tech talks, side hustles, and meaningful collaborations
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
          variants={containerVariants}
        >
          {/* Socials Card */}
          <motion.div
            variants={cardVariants}
            className="group relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-all duration-500 -z-10" />
            <p className="text-slate-400 mb-8 leading-relaxed">
              Follow along for projects, thoughts, and the occasional hot take 🔥
            </p>
            <div className="flex flex-wrap gap-3">
              {primarySocials.map((item) => (
              <a  
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-white/8 border border-white/15 rounded-2xl text-slate-300 text-sm font-medium hover:text-white hover:bg-white/15 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-0.5 transition-all duration-300"
                >
                  {item.icon}
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Email Card */}
          <motion.div
            variants={cardVariants}
            className="group relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-all duration-500 -z-10" />
            <p className="text-slate-400 mb-8 leading-relaxed">
              Prefer formal conversations or opportunities? Drop me a mail 📬
            </p>
            <button
              onClick={composeEmail}
              className="flex items-center gap-3 px-8 py-4 bg-cyan-500/90 rounded-2xl text-black font-bold hover:bg-cyan-400 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300"
            >
              Get in Touch
              <Mail className="w-5 h-5" />
            </button>
          </motion.div>
        </motion.div>

        {/* Secondary Socials */}
        <motion.div variants={cardVariants} className="text-center">
          <p className="text-lg font-semibold text-slate-300 mb-8">
            Also find me here
          </p>
          <div className="flex justify-center gap-6">
            {secondarySocials.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-2xl text-slate-400 text-sm font-medium hover:text-white hover:bg-white/10 hover:border-white/20 hover:-translate-y-0.5 transition-all duration-300"
              >
                {item.icon}
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Connect;