import React from "react";

const MagicButton = ({ title, icon, position, handleClick, otherClasses }) => {
  return (
    <button
      className="relative inline-flex h-6 w-20 lg:h-12 lg:w-40 overflow-hidden rounded-xl p-[1px] focus:outline-none"
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl
             bg-[#e0e0e0] dark:bg-[#202020] text-[8px] lg:text-base font-medium backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
