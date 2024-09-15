"use client";

import { useEffect, useRef, useState, VideoHTMLAttributes } from "react";
import PlayPauseButton from "../Buttons/PlayPauseButton";

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const ref = videoRef.current;
    if (ref) {
      if (isPlaying) {
        ref.play();
      } else {
        ref.pause();
      }
    }

    const handleEnded = () => setIsPlaying(false);

    ref?.addEventListener("ended", handleEnded);

    return () => ref?.removeEventListener("ended", handleEnded);
  }, [isPlaying]);

  return (
    <section
      className="group bg-primary-light rounded-md 
     relative h-[340px]
    
    lg:w-1/2 lg:h-[440px]"
    >
      <div className="bg-primary-dark/20 h-full absolute top-0 right-0 left-0 bottom-0"></div>
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <PlayPauseButton
          isPlaying={isPlaying}
          togglePlay={() => setIsPlaying(!isPlaying)}
        />
      </div>

      <video
        poster="assets/images/training_1.jpg"
        ref={videoRef}
        className="inset-0 w-full h-full object-cover rounded-md"
      >
        <source src="assets/videos/training_1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default VideoPlayer;
