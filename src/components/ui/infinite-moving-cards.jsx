"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "up", // Default to vertical upward scroll
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, [direction, speed]);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      setDirection();
      setSpeed();
      setStart(true);
    }
  }

  const setDirection = () => {
    if (containerRef.current) {
      if (direction === "up") {
        containerRef.current.style.setProperty("--animation-direction", "normal");
      } else if (direction === "down") {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };

  const setSpeed = () => {
    if (containerRef.current) {
      switch (speed) {
        case "fast":
          containerRef.current.style.setProperty("--animation-duration", "20s");
          break;
        case "normal":
          containerRef.current.style.setProperty("--animation-duration", "40s");
          break;
        case "slow":
          containerRef.current.style.setProperty("--animation-duration", "80s");
          break;
        default:
          containerRef.current.style.setProperty("--animation-duration", "40s"); // Default to normal
          break;
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-h-[500px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex flex-col gap-3 md:gap-3 lg:gap-8 py-4 w-full",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="h-9 w-20 lg:h-16 lg:w-40 text-[8px] lg:text-base rounded-lg flex items-center justify-center bg-[#e0e0e0] dark:bg-[#202020] text-[#202020] dark:text-[#e0e0e0]"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
