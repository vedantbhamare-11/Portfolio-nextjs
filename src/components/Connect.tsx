"use client";

import React from "react";
import Image from "next/image";

const Connect: React.FC = () => {
  const handleBentoClick = () => {
    window.open("https://bento.me/vedantbhamare", "_blank"); // Open Bento.me profile link
  };

  const composeEmail = () => {
    const email = "vedantdbhamare@gmail.com";
    const subject = "Let's Connect";
    const body = "Hi Vedant,\n\nI would like to connect with you.";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="connect" className="py-10 bg-black">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold text-cyan-400 mb-12">
          Let&rsquo;s <span className="font-bold">Connect</span> and{" "}
          <span className="font-bold">Create</span>
        </h2>
        <p className="text-lg mb-12">
          Drop me a DM, always up for Tech Talk, Side Hustles, and Opportunities
        </p>

        {/* Flex container to align both sections side by side on larger screens */}
        <div className="flex px-8 flex-col sm:flex-row justify-center gap-8 lg:gap-12 lg:mb-10">
          {/* Bento.me button */}
          <div className="flex flex-col items-center p-8 rounded-lg shadow-lg w-full sm:w-80">
          <p className="text-center text-sm text-gray-500 mb-4 italic">
              All My social media links in one click. It’s basically magic. ✨
            </p>
            <button
              onClick={handleBentoClick}
              className="w-auto bg-cyan-500 flex items-center justify-center gap-4 text-white py-3 px-6 rounded-full text-xl transition-all duration-300 group"
            >
              bento.me
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 transform group-hover:translate-x-3 transition-all duration-300 ease-in-out"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
            
          </div>

          {/* Get in Touch section */}
          <div className="flex flex-col items-center p-8 rounded-lg shadow-lg w-full sm:w-80">
          <p className="text-center text-sm text-gray-500 mb-4 italic">
             Wanna connect formally. <br /> ✉️ Mail me.
            </p>
            <button
              onClick={composeEmail}
              className="w-auto bg-cyan-500 flex items-center justify-center gap-4 text-white py-3 px-6 rounded-full text-xl transition-all duration-300 group"
            >
              Get in Touch
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 transform group-hover:translate-x-3 transition-all duration-300 ease-in-out"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Profile section */}
        <div>
          <p className="text-lg font-semibold mb-4">
            Also, check out my profiles on
          </p>
          <div className="flex justify-center gap-10">
            <a
              href="https://github.com/vedantbhamare-11"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                width={50}
                height={50}
                className="w-12 h-12 opacity-80 hover:opacity-100 transition-all"
                src="/social-media-icons/github.png"
                alt="GitHub Icon"
              />
            </a>
            <a
              href="https://dev.to/vedantbhamare"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                width={50}
                height={50}
                className="w-12 h-12 opacity-80 hover:opacity-100 transition-all"
                src="/social-media-icons/dev.png"
                alt="Dev.to Icon"
              />
            </a>
            <a
              href="https://medium.com/@vedantdbhamare"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                width={50}
                height={50}
                className="w-12 h-12 opacity-80 hover:opacity-100 transition-all"
                src="/social-media-icons/medium.png"
                alt="Medium Icon"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
