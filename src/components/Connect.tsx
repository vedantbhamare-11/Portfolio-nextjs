"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Mail, Github } from "lucide-react";
import Image from "next/image";

const Connect: React.FC = () => {
  const openLink = (url: string) => {
    window.open(url, "_blank");
  };

  const composeEmail = () => {
    const email = "vedantdbhamare@gmail.com";
    const subject = "Let's Connect";
    const body = "Hi Vedant,\n\nI would love to connect with you.";
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  /** Animations */
  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15 },
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
      },
    },
  };

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
            Let’s Connect
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
          {/* Bento */}
          <motion.div
            variants={cardVariants}
            className="group relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-all duration-500 -z-10" />

            <p className="text-slate-400 mb-8 leading-relaxed">
              All my social links in one place — clean, simple, and kinda magical ✨
            </p>

            <button
              onClick={() => openLink("https://bento.me/vedantbhamare")}
              className="flex items-center gap-3 px-8 py-4 bg-white/10 border border-white/20 rounded-2xl text-white font-semibold hover:bg-white/20 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300"
            >
              bento.me
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Email */}
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

        {/* Socials */}
        <motion.div
          variants={cardVariants}
          className="text-center"
        >
          <p className="text-lg font-semibold text-slate-300 mb-8">
            Also find me here
          </p>

          <div className="flex justify-center gap-10">
            {[
              {
                href: "https://github.com/vedantbhamare-11",
                src: "/social-media-icons/github.png",
                alt: "GitHub",
              },
              {
                href: "https://dev.to/vedantbhamare",
                src: "/social-media-icons/dev.png",
                alt: "Dev.to",
              },
              {
                href: "https://medium.com/@vedantdbhamare",
                src: "/social-media-icons/medium.png",
                alt: "Medium",
              },
            ].map((item) => (
              <a
                key={item.alt}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 hover:-translate-y-1 transition-all duration-300"
              >
                <Image
                  width={48}
                  height={48}
                  src={item.src}
                  alt={item.alt}
                />
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Connect;
