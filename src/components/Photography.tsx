import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store'; // Update this path to where your store is located
import Image from 'next/image';

const Photography: React.FC = () => {
  const images = useSelector((state: RootState) => state.photography.images);

  // State to manage the expanded image modal
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Function to get the grid class based on image orientation and screen size
  const getImageClass = (orientation: 'landscape' | 'portrait') => {
    const largeScreenClasses = orientation === 'landscape'
      ? 'lg:col-span-4 lg:row-span-2'
      : 'lg:col-span-2 lg:row-span-3';

    const smallScreenClasses = orientation === 'landscape'
      ? 'col-span-6 row-span-3'
      : 'col-span-3 row-span-4';

    return `${largeScreenClasses} ${smallScreenClasses}`;
  };

  // Open the image in a modal
  const handleImageClick = (src: string) => {
    setSelectedImage(src); // Set the selected image to the state
  };

  // Close the image modal
  const closeModal = () => {
    setSelectedImage(null); // Reset selected image when closing the modal
  };

  return (
    <section className="py-10 bg-black">
      <div>
        <h2 className="text-4xl font-semibold ml-8 text-cyan-400">
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
              onClick={() => handleImageClick(image.src)} // Open image in modal on click
            >
              <Image
                width={500}
                height={500}
                className="w-full h-full object-cover object-center opacity-90 hover:opacity-100 cursor-pointer"
                src={image.src}
                alt={`Photography ${index}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal for displaying the clicked image */}
      {selectedImage && (
        <div
          className="fixed inset-0 dark-background flex justify-center items-center z-50 transition-all duration-500 opacity-0"
          style={{ opacity: 1 }} // Opacity transition for modal fade-in
          onClick={closeModal} // Close modal when clicked outside
        >
          <div
            className="relative w-full max-w-3xl p-4 transition-transform duration-500 transform scale-90 opacity-0"
            style={{ transform: 'scale(1)', opacity: 1 }} // Apply smooth scaling transition
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
          >
            <div className="border-4 border-white bg-black">
              <Image
                src={selectedImage}
                alt="Expanded Image"
                className="w-full h-full max-h-screen object-contain"
                layout="intrinsic"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Photography;
