"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-center gap-8 lg:gap-12">
      <motion.div 
        className="flex items-center gap-8 lg:gap-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 10 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          href="https://medium.com/@vedantdbhamare"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative text-lg lg:text-xl font-medium uppercase tracking-wider text-white/90 hover:text-white transition-all duration-300"
        >
          <span className="relative z-10">Blog</span>
          <motion.span 
            className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
          />
        </Link>

        <Link
          href="https://vedantbhamare.notion.site/Projects-Showcase-441367d3f63a46da95f2f78702c0933b?pvs=4"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative text-lg lg:text-xl font-medium uppercase tracking-wider text-white/90 hover:text-white transition-all duration-300"
        >
          <span className="relative z-10">Projects</span>
          <motion.span 
            className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
          />
        </Link>

        <Link
          href="https://drive.google.com/file/d/1h2DgXb8iR2iWHbY7TpNr55jSS-WJ1LHQ/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative text-lg lg:text-xl font-medium uppercase tracking-wider text-white/90 hover:text-white transition-all duration-300"
        >
          <span className="relative z-10">Resume</span>
          <motion.span 
            className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
          />
        </Link>
      </motion.div>
    </nav>
  );
};

export default Navbar;
