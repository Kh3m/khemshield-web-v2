import { Pause, Play } from "iconsax-react";
import { useState } from "react";

interface Props {
  isPlaying: boolean;
  togglePlay: () => void;
}
const PlayPauseButton = ({ isPlaying, togglePlay }: Readonly<Props>) => {
  return (
    <button
      onClick={togglePlay}
      className={`${
        isPlaying ? "opacity-0 group-hover:opacity-100" : ""
      } w-20 h-20 rounded-full bg-white flex items-center justify-center
     text-primary-normal hover:bg-primary-light duration-200
     lg:w-24 lg:h-24`}
    >
      {isPlaying ? <Pause /> : <Play />}
    </button>
  );
};

export default PlayPauseButton;
