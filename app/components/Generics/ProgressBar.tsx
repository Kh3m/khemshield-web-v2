import React from "react";

interface Props {
  progress: number;
}
const ProgressBar = ({ progress }: Props) => {
  return (
    <div className=" h-2 bg-primary-light rounded-lg">
      <div
        style={{ width: `${progress}%` }}
        className="h-full bg-primary-normal rounded-lg"
      ></div>
    </div>
  );
};

export default ProgressBar;
