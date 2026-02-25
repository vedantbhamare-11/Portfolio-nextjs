"use client";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Photography from "@/components/Photography";
import Connect from "@/components/Connect";

export default function Home() {

  // Parallax background transform - SAME as Header

  return (
    <main className="relative overflow-hidden">
      {/* Global Parallax Background - Seamless across all sections */}
      <motion.div className="fixed inset-0 z-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
        {/* Animated Radial Gradients - EXACT Header Match */}
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3),transparent),radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.3),transparent)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
      </motion.div>

      {/* All Components - Render above background */}
      <div className="relative z-10">
        <Header />
        <AboutMe />
        {/* <Skills /> */}
        <Projects />
        <Timeline />
        {/* <Blogs /> */}
        <Photography />
        <Connect />
        {/* <Footer /> */}
      </div>
    </main>
  );
}
