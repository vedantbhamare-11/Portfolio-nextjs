import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store'; // Update this path to where your store is located
import Image from 'next/image';

const Photography: React.FC = () => {
  const images = useSelector((state: RootState) => state.photography.images);

  // Function to get the grid class based on image orientation and screen size
  const getImageClass = (orientation: 'landscape' | 'portrait') => {
    // Large screens (lg)
    const largeScreenClasses = orientation === 'landscape'
      ? 'lg:col-span-4 lg:row-span-2' 
      : 'lg:col-span-2 lg:row-span-3';

    // Small screens (default)
    const smallScreenClasses = orientation === 'landscape'
      ? 'col-span-6 row-span-3' 
      : 'col-span-3 row-span-4';

    return `${largeScreenClasses} ${smallScreenClasses}`;
  };

  return (
    <section className="py-10 bg-black">
      <div> 
        <h2 className="text-4xl font-semibold ml-8 text-cyan-400 ">
          My Escape from Reality
        </h2>
        <div
          className="grid grid-cols-12 gap-2.5 lg:p-8 p-2 bg-black"
          style={{ gridAutoRows: "calc(8vw - 10px)" }}
        >
          {/* Map through the images from Redux and apply the appropriate classes */}
          {images.map((image, index) => (
            <div
              key={index}
              className={`border-1 border-white w-full h-full ${getImageClass(image.orientation)}`}
            >
              <Image
              width={500}
              height={500}
                className="w-full h-full object-cover object-center opacity-90 hover:opacity-100"
                src={image.src}
                alt={`Photography ${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Photography;
