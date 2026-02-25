"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Image from "next/image";
import { X } from "lucide-react";

// Define the shape of the photography data
interface PhotographyImage {
  src: string;
  orientation: "landscape" | "portrait";
}

const Photography: React.FC = () => {
  const images = useSelector(
    (state: RootState) => state.photography.images,
  ) as PhotographyImage[];
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Grid classes preserved EXACTLY as original
  const getImageClass = (orientation: "landscape" | "portrait") => {
    const largeScreenClasses =
      orientation === "landscape"
        ? "lg:col-span-5 lg:row-span-2"
        : "lg:col-span-2 lg:row-span-2";

    const smallScreenClasses =
      orientation === "landscape"
        ? "col-span-14 row-span-3"
        : "col-span-7 row-span-4";

    return `${largeScreenClasses} ${smallScreenClasses}`;
  };

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Animation variants
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const gridItemVariants = {
    hidden: { opacity: 0, scale: 0.95, filter: "brightness(0.7)" },
    show: {
      opacity: 1,
      scale: 1,
      filter: "brightness(1)",
      transition: {
        duration: 0.6,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      backdropFilter: "blur(0px)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      backdropFilter: "blur(20px)",
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="photography"
      className="relative w-full px-6 py-32 overflow-hidden xl:max-w-9xl xl:mx-auto"
    >
      <motion.div
        className="relative z-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        {/* Hero Header */}
        <motion.div
          className="text-center mb-24 lg:mb-32"
          variants={gridItemVariants}
        >
          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-widest bg-gradient-to-r from-white via-slate-100 to-cyan-400 bg-clip-text text-transparent drop-shadow-3xl mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-widest bg-gradient-to-r from-slate-100 via-white to-cyan-300 bg-clip-text text-transparent drop-shadow-2xl leading-tight">
              My Visual Escape
            </h2>
          </motion.h2>
          <motion.div
            className="w-32 h-1 mx-auto bg-gradient-to-r from-transparent via-white/70 to-cyan-400 rounded-full shadow-xl"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{
              scaleX: 1,
              opacity: 1,
              transition: {
                duration: 0.8,
                delay: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94],
              },
            }}
            style={{ originX: 0.5 }}
          />
        </motion.div>

        {/* Photography Grid - EXACT SAME LAYOUT */}
        <motion.div
          className="grid grid-cols-15 gap-2.5 "
          style={{ gridAutoRows: "calc(10vw + 10px)" }}
          variants={containerVariants}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className={`group relative border-2 border-white/10 hover:border-cyan-400/60 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-700 cursor-pointer backdrop-blur-sm hover:backdrop-blur-xl ${getImageClass(image.orientation)}`}
              variants={gridItemVariants}
              whileHover={{
                scale: 1.02,
                borderColor: "#22d3ee",
                boxShadow: "0 40px 80px -20px rgba(34, 211, 238, 0.4)",
              }}
              onClick={() => handleImageClick(image.src)}
            >
              {/* Premium Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 z-20 pointer-events-none" />

              {/* Image */}
              <Image
                src={image.src}
                alt={`Photography ${index + 1}`}
                fill
                className="object-cover object-center hover:scale-110 transition-all duration-1000 group-hover:brightness-110 group-hover:contrast-125 hover:grayscale-0 z-10"
                sizes="100vw"
                priority={index < 3}
              />

              {/* Hover Glow Border */}
              <div className="absolute inset-0 border-4 border-transparent rounded-2xl group-hover:border-cyan-400/50 transition-all duration-700 z-30 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Premium Modal - FIXED */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-3xl"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={closeModal}
        >
          {/* Close Button */}
          <motion.button
            className="absolute top-6 right-6 z-60 w-16 h-16 bg-white/15 backdrop-blur-2xl border border-white/40 rounded-4xl flex items-center justify-center hover:bg-white/25 hover:scale-110 transition-all duration-400 shadow-2xl hover:shadow-white/30 md:w-14 md:h-14"
            onClick={closeModal}
            whileHover={{ rotate: 90, scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
          >
            <X
              className="w-8 h-8 text-white drop-shadow-2xl md:w-7 md:h-7"
              strokeWidth={2.5}
            />
          </motion.button>

          {/* FIXED Image Container */}
          <div className="relative w-full h-[95vh] max-w-7xl max-h-[95vh] flex items-center justify-center z-50">
            <Image
              src={selectedImage}
              alt="Fullscreen Photography"
              fill
              className="object-contain shadow-4xl rounded-3xl max-w-[95%] max-h-[95%]"
              priority
              sizes="100vw"
            />
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Photography;
