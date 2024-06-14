import React from "react";

type ProgressType = {
  value: number;
  className?: string;
};

const Progress: React.FC<ProgressType> = ({ value, className }) => {
  return (
    <div
      className={`relative h-[10px] w-full rounded-[25px] overflow-hidden ${className}`}
    >
      <div
        className="h-full transition-all duration-100 ease-in-out rounded-[5px]"
        style={{
          background:
            "linear-gradient(293.23deg, rgba(249, 137, 5, 0.75) -19.5%, rgba(252, 72, 2, 0.75) 27.83%, rgba(254, 138, 1, 0.75) 59.76%, rgba(225, 167, 32, 0.75) 79.58%, rgba(252, 177, 0, 0.75) 97.06%),linear-gradient(0deg, #FDC05E, #FDC05E)",
          width: `${value / 10}%`,
        }}
      ></div>
    </div>
  );
};

export default Progress;
