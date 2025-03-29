import React, { useEffect } from 'react';
import Navbar from './Navbar';

const Header = () => {
  useEffect(() => {
    // Dynamically load external scripts
    const script1 = document.createElement("script");
    script1.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/TweenLite.min.js";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/EasePack.min.js";
    script2.async = true;
    document.body.appendChild(script2);

    const script3 = document.createElement("script");
    script3.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/demo.js";
    script3.async = true;
    document.body.appendChild(script3);

    // Function to handle smooth scrolling to the about section
    const scrollToAbout = (e: MouseEvent) => {
      e.preventDefault();
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    };

    // Add event listener to the arrow icon on component mount
    const scrollArrow = document.getElementById("scroll-arrow");
    if (scrollArrow) {
      scrollArrow.addEventListener("click", scrollToAbout);
    }

    // Cleanup: Remove event listener on component unmount
    return () => {
      if (scrollArrow) {
        scrollArrow.removeEventListener("click", scrollToAbout);
      }
    };
  }, []); // Empty dependency array to run the effect only once

  // Render the header component
  return (
    <div className="relative w-full bg-black overflow-hidden">
      <div className="max-w-full mx-auto">
        <div id="large-header" className="relative block  w-full h-[770px] bg-cover bg-center z-0">
          <canvas id="demo-canvas" className="absolute hidden lg:block top-0 left-0 w-full h-full" />

          {/* Main Title */}
          <h1 className="absolute top-1/3 left-1/2 flex gap-6 flex-col items-center justify-center transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl uppercase tracking-wide  lg:text-8xl">
            <span className="block">Vedant</span>
            <span className="block">Bhamare</span>
          </h1>

          {/* Navbar */}
          <span className="absolute lg:top-[60%] top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2   ">
            <Navbar />
          </span>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <a href="/" id="scroll-arrow" className="absolute bottom-20 left-1/2 transform -translate-x-1/2 cursor-pointer opacity-50 hover:opacity-80 transition-all sm:bottom-16">
        <img src="arrow.png" alt="Scroll Down" className="w-12 h-12 hover:w-16 hover:h-16 transition duration-500" />
      </a>
    </div>
  );
};

export default Header;
