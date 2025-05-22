import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="tabs text-white text-center">
      <div className="container mx-auto">
        <ul className="flex items-center justify-center mt-16 lg:mt-0 lg:flex-row gap-8 lg:gap-16">
          <li>
            <Link
              href="https://medium.com/@vedantdbhamare"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white  text-xl uppercase transition-colors duration-300 hover:text-cyan-400"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="https://vedantbhamare.notion.site/Projects-Showcase-441367d3f63a46da95f2f78702c0933b?pvs=4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white  text-xl uppercase transition-colors duration-300 hover:text-cyan-400"
            >
              Project
            </Link>
          </li>
          <li>
            <Link
              href="https://drive.google.com/file/d/1Mdo8GdNAU61s3Wo1_ZP3zPTv_vaNGrhK/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl uppercase transition-colors duration-300 hover:text-cyan-400"
            >
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
