import Image from "next/image";
import React from "react";

// Footer component with the image
const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b0b09] py-10 text-center">
      <div className="container mx-auto">
        {/* <h2 className="text-4xl font-bold text-white mb-4">Ciao, See ya!</h2> */}
        {/* You can change the path to where the image is located */}
        <Image
          width={200}
          height={200}
          src="/footer.png" 
          alt="Ciao, See ya!"
          className="mx-auto w-full max-w-xs"
        />
      </div>
    </footer>
  );
};

export default Footer;
