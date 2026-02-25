"use client";
import { motion } from "framer-motion";
import { useState, useRef, useEffect, useCallback } from "react";
import { Play, Volume2, VolumeX, Maximize2 } from "lucide-react";

interface VideoPlayerProps {
  src: string;
}

export default function VideoPlayer({}: VideoPlayerProps) {
  const [isError, setIsError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Autoplay on mount (muted for browser compliance)
  useEffect(() => {
    const video = videoRef.current;
    if (video && !isError) {
      video.play().catch(() => setIsError(true));
    }
  }, [isError]);

  return (
    <motion.video
      ref={videoRef}
      className="w-full h-full object-cover rounded-2xl lg:rounded-3xl hover:scale-[1.02] transition-transform duration-700 group-hover:scale-[1.05]"
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      poster="/personal/scene-poster.jpg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <source src="/personal/scene.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </motion.video>
  );
}
