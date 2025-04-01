import Image from 'next/image';
import React from 'react';

const Connect: React.FC = () => {
  const composeEmail = () => {
    const email = 'vedantdbhamare@gmail.com';
    const subject = 'Let\'s Connect';
    const body = 'Hi Vedant,\n\nI would like to connect with you.';
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const handleGetInTouch = () => {
    composeEmail();
  };

  return (
    <section id="connect" className="py-10 bg-black">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold text-cyan-400 mb-12">
          Let&lsquo;s <span className="font-bold">Connect</span> and <span className="font-bold">Create</span>
        </h2>
        <p className="text-lg mb-12">
          Drop me a DM, always up for Tech Talk, Side Hustles, and Opportunities
        </p>

        {/* Flex container to align both sections side by side on larger screens */}
        <div className="flex px-8 flex-col sm:flex-row justify-center gap-8 lg:gap-12 lg:mb-10">
          {/* Social icons section */}
          <div className="bg-[#202020] p-8 rounded-lg shadow-lg w-full sm:w-80">
            <div className="flex justify-center gap-12">
              <a href="https://www.linkedin.com/in/vedant-bhamare-4086281a4/" target="_blank" rel="noopener noreferrer">
                <Image
                  width={50}
                  height={50}
                  className="w-12 h-12 opacity-80 hover:opacity-100 transition-all"
                  src="/Social Media Icons/linkedin.png"
                  alt="LinkedIn Icon"
                />
              </a>
              <a href="https://www.instagram.com/vedantbhamare_/" target="_blank" rel="noopener noreferrer">
                <Image
                  width={50}
                  height={50}
                  className="w-12 h-12 opacity-80 hover:opacity-100 transition-all"
                  src="/Social Media Icons/instagram.png"
                  alt="Instagram Icon"
                />
              </a>
              <a href="https://twitter.com/VedantBhamare8" target="_blank" rel="noopener noreferrer">
                <Image
                width={50}
                height={50}
                  className="w-12 h-12 opacity-80 hover:opacity-100 transition-all"
                  src="/Social Media Icons/twitter.png"
                  alt="Twitter Icon"
                />
              </a>
            </div>
          </div>

          {/* Get in Touch section */}
          <div className="text-center mb-8">
            <p className="text-lg font-semibold mb-4">Wanna connect formally?</p>
            <button
              onClick={handleGetInTouch}
              className="bg-[#202020] text-white py-2 px-8 rounded-full text-xl transition-all duration-300 hover:bg-cyan-500"
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* Profile section */}
        <div>
          <p className="text-lg font-semibold mb-4">Also, check out my profiles on</p>
          <div className="flex justify-center gap-10">
            <a href="https://github.com/vedantbhamare-11" target="_blank" rel="noopener noreferrer">
              <Image
                width={50}
                height={50}
                className="w-12 h-12 opacity-80 hover:opacity-100 transition-all"
                src="/Social Media Icons/github.png"
                alt="GitHub Icon"
              />
            </a>
            <a href="https://dev.to/vedantbhamare" target="_blank" rel="noopener noreferrer">
              <Image
                width={50}
                height={50}
                className="w-12 h-12 opacity-80 hover:opacity-100 transition-all"
                src="/Social Media Icons/dev.png"
                alt="Dev.to Icon"
              />
            </a>
            <a href="https://medium.com/@vedantdbhamare" target="_blank" rel="noopener noreferrer">
              <Image
                width={50}
                height={50}
                className="w-12 h-12 opacity-80 hover:opacity-100 transition-all"
                src="/Social Media Icons/medium.png"
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
