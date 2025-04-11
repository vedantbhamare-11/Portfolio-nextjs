import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Link from "next/link";

const Header = () => {
  useEffect(() => {
    // Dynamically load external scripts for canvas effect
    const script1 = document.createElement("script");
    script1.src =
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/TweenLite.min.js";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src =
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/EasePack.min.js";
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

    // Ensure canvas animation or mouse effect is activated
    const canvas = document.getElementById("demo-canvas") as HTMLCanvasElement;
    if (canvas) {
      // Any canvas initialization for the mouse effect, depending on the demo.js script
      // This might involve triggering specific animation functions from the demo.js script here
      console.log("Canvas initialized!");
    }

    // Cleanup: Remove event listener and any canvas related cleanup on component unmount
    return () => {
      if (scrollArrow) {
        scrollArrow.removeEventListener("click", scrollToAbout);
      }
      if (canvas) {
        // Add any necessary canvas cleanup code here if needed
        console.log("Canvas cleaned up.");
      }
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className="relative w-full bg-black overflow-hidden">
      <canvas
        id="demo-canvas"
        className="absolute   lg:block top-0 left-0 w-full h-full"
      />
      <div className="max-w-full mx-auto">
        <div
          id="large-header"
          className="relative block w-full h-[770px] bg-cover bg-center z-0"
        >
          {/* Main Title */}
          <h1 className="absolute top-1/3 left-1/2 flex gap-6 flex-col items-center justify-center transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl uppercase tracking-wide lg:text-8xl">
            <span className="block">Vedant</span>
            <span className="block">Bhamare</span>
          </h1>

          {/* Navbar */}
          <span className="absolute lg:top-[60%] top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Navbar />
          </span>
        </div>
      </div>

      {/* Canvas Tag for Mouse Effect */}

      {/* Scroll Down Arrow */}
      <Link
        href="/"
        id="scroll-arrow"
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 cursor-pointer opacity-50 hover:opacity-80 transition-all sm:bottom-16"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8 animate-bounce"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
          />
        </svg>
      </Link>
    </div>
  );
};

export default Header;
