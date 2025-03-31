import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store"; // Make sure this is imported to access RootState

const Timeline: React.FC = () => {
  // Fetch timeline data from the Redux store
  const timelineData = useSelector((state: RootState) => state.timeline.timelineData);

  return (
    <section id="timeline" className="bg-black py-10">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center text-white mb-10">
        My Story Thus Far
      </h2>

      {/* Timeline items */}
      <ol className="absolute border-l lg:left-1/3 left-[10%] border-gray-200 dark:border-gray-700">
        {timelineData.map((event, index) => (
          <li key={index} className="mb-10">
            <div className="flex items-center justify-start">
              {/* Circle - Display either SVG or Logo */}
              <div
                className={`absolute flex items-center justify-center lg:w-12 lg:h-12 w-8 h-8 rounded-full lg:-left-6 -left-4 ring-8 ring-white dark:ring-gray-900 bg-white z-10`}
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
                  <img
                    src={event.logoUrl}
                    alt={`${event.title} logo`}
                    className="w-8 h-8 rounded-full"
                  />
                ) : null}
              </div>
            </div>
            <div
              className={`mt-4 ml-6 mr-4 lg:ml-12 ${index % 2 === 0 ? "sm:ml-0" : ""}`}
            >
              {/* Timeline Text and Content */}
              <div className="w-full lg:w-3/4 max-w-6xl text-left">
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
    </section>
  );
};

export default Timeline;
