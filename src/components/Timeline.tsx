import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store"; // Make sure this is imported to access RootState
import Image from "next/image";

const Timeline: React.FC = () => {
  // Fetch timeline data from the Redux store
  const timelineData = useSelector((state: RootState) => state.timeline.timelineData);

  return (
    <section id="timeline" className="bg-black py-10">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center text-cyan-400  mb-16">
        My Story Thus Far
      </h2>

      {/* Timeline items */}
      <div className="flex justify-center lg:p-2 px-6">
        <ol className="border-l ml-4 border-gray-200 dark:border-gray-700 w-full max-w-4xl">
          {timelineData.map((event, index) => (
            <li key={index} className="mb-10">
              <div className="flex items-center justify-start relative">
                {/* Circle - Display either SVG or Logo */}
                <div
                  className={`flex absolute lg:-ml-6 -ml-4 items-center justify-center w-8 h-8 lg:w-12 lg:h-12 rounded-full ring-8 ring-white dark:ring-gray-900 bg-white z-10`}
                >
                  {/* Conditionally Render SVG or Logo */}
                  {event.svgIcon ? (
                    <svg
                      className="w-6 h-6 dark:text-blue-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="black"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path d={event.svgIcon} /> {/* SVG Path from timelineData */}
                    </svg>
                  ) : event.logoUrl ? (
                    <Image
                      src={event.logoUrl}
                      alt={`${event.title} logo`}
                      className="w-8 h-8 rounded-full"
                    />
                  ) : null}
                </div>
              </div>
              <div className={`mt-4 ml-6 mr-4 lg:ml-12 ${index % 2 === 0 ? "sm:ml-0" : ""}`}>
                {/* Timeline Text and Content */}
                <div className="w-full lg:ml-0 ml-4 lg:w-3/4 max-w-6xl text-left">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {event.title}
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    {event.date}
                  </time>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    {event.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Timeline;
