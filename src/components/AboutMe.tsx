import Image from "next/image";
import React, { useState } from "react";

const AboutMe = () => {
  const [isImportantOnly, setIsImportantOnly] = useState(false);

  const toggleVisibility = () => {
    setIsImportantOnly(!isImportantOnly);
  };

  return (
    <section id="about" className="bg-black">
      <div className="container mx-auto flex flex-col sm:flex-row justify-center items-center  text-left">
        {/* Profile Info */}
        <div className="profile-info relative flex justify-center sm:justify-start  lg:m-8">
          <Image
            src="/personal/profile-pic.jpeg"
            width={300}
            height={300}
            alt="Profile Image"
            className="profile-pic w-full h-full lg:h-120 p-8 mx-auto sm:mx-0 transition-transform duration-500 ease-in-out"
          />
        </div>

        {/* About Text */}
        <div className="about-text text-white max-w-xl p-6">
          <div className="flex flex-row justify-between mb-4">
            <h2 className="lg:text-4xl text-2xl text-cyan-400 font-semibold">About Me</h2>
            {/* Non-Nonsense Toggle Switch */}
            <div className="flex items-center justify-end sm:justify-start">
              <label className="flex items-center cursor-pointer">
                <span className="mr-2 hidden lg:inline lg:font-semibold text-white">No-Nonsense Toggle</span>
                <input
                  type="checkbox"
                  checked={isImportantOnly}
                  onChange={toggleVisibility}
                  className="hidden"
                />
                <div className="relative">
                  <div
                    className={`w-12 h-6 bg-cyan-600  rounded-full  ${
                      isImportantOnly ? "bg-cyan-400" : "bg-gray-600"
                    } `}
                  ></div>
                  <div
                    className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-all duration-300 ease-in-out ${
                      isImportantOnly ? "translate-x-6" : ""
                    }`}
                  ></div>
                </div>
              </label>
            </div>
          </div>
          <p className="text-xl leading-relaxed">
            {/* Striking through specific words/phrases */}
            <span className={isImportantOnly ? "line-through opacity-50" : ""}>
              Hey! I’m a
            </span>
            <span> Software Developer</span>{" "}
            <span className={isImportantOnly ? "line-through opacity-50" : ""}>
              who’s equally at home building sleek UIs with,
            </span>
            <span>
              {" "}
              React, Next.js,{" "}
              <span
                className={isImportantOnly ? "line-through opacity-50" : ""}
              >
                and
              </span>{" "}
              React Native{" "}
            </span>
            <span className={isImportantOnly ? "line-through opacity-50" : ""}>
              as I am creating robust back-end solutions with
            </span>
            <span>
              {" "}
              Node.js{" "}
              <span
                className={isImportantOnly ? "line-through opacity-50" : ""}
              >
                and
              </span>{" "}
              Python.
            </span>
            <br />
            <br />
            <span className={isImportantOnly ? "line-through opacity-50" : ""}>
              I’m fluent in
            </span>
            <span>
              {" "}
              TypeScript{" "}
              <span
                className={isImportantOnly ? "line-through opacity-50" : ""}
              >
                and libraries like
              </span>{" "}
              Material UI, Tailwind CSS, ShadCN,{" "}
            </span>
            <span className={isImportantOnly ? "line-through opacity-50" : ""}>
              and
            </span>{" "}
            Bootstrap{" "}
            <span className={isImportantOnly ? "line-through opacity-50" : ""}>
              for responsive designs.
            </span>{" "}
            <span className={isImportantOnly ? "line-through opacity-50" : ""}>
              Oh, and I’ve dabbled in
            </span>
            <span>
              {" "}
              GenAI, RAG{" "}
              <span
                className={isImportantOnly ? "line-through opacity-50" : ""}
              >
                and
              </span>{" "}
              prompt engineering{" "}
            </span>
            <span className={isImportantOnly ? "line-through opacity-50" : ""}>
              using tools like
            </span>
            <span> Llamma </span>
            <span className={isImportantOnly ? "line-through opacity-50" : ""}>
              and
            </span>{" "}
            OpenAI.
            <br />
            <br />
            <span className={isImportantOnly ? "line-through opacity-50" : ""}>
              Need state management?
            </span>
            <span> Redux </span>
            <span className={isImportantOnly ? "line-through opacity-50" : ""}>
              is my jam.
            </span>{" "}
            <span className={isImportantOnly ? "line-through opacity-50" : ""}>
              I love solving complex problems with code, but I’ll keep the
            </span>{" "}
            <span>jargon to a minimum.</span>
            <br />
            <br />
            <span>Let’s build something awesome!</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
