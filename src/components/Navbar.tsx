import React from 'react';

const Navbar = () => {
  return (
    <nav className="tabs text-white text-center">
      <div className="container mx-auto">
        <ul className="flex items-center justify-center  mt-16 lg:mt-0 lg:flex-row gap-8 lg:gap-16">
          <li>
            <a
              href="https://medium.com/@vedantdbhamare"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white  text-xl uppercase transition-colors duration-300 hover:text-yellow-400"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="https://vedantbhamare.notion.site/Projects-Showcase-441367d3f63a46da95f2f78702c0933b?pvs=4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white  text-xl uppercase transition-colors duration-300 hover:text-yellow-400"
            >
              Project
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1T-PWMs_vCdi8P6vhl5Xrkj398t9ZuAQK/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl uppercase transition-colors duration-300 hover:text-yellow-400"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
