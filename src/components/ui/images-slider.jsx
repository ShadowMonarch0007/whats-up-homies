"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

export const ImagesSlider = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = "up",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState([]);

  useEffect(() => {
    const loadImages = () => {
      const promises = images.map((image) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = image.src;
          img.onload = () => resolve(image);
          img.onerror = reject;
        });
      });

      Promise.all(promises)
        .then((loaded) => {
          setLoadedImages(loaded);
        })
        .catch((error) => console.error("Failed to load images", error));
    };

    loadImages();
  }, [images]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    let interval;
    if (autoplay) {
      interval = setInterval(handleNext, 5000);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [autoplay]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const slideVariants = {
    initial: {
      scale: 0,
      opacity: 1,
      rotateX: 45,
    },
    visible: {
      scale: 1,
      rotateX: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.645, 0.045, 0.355, 1.0],
      },
    },
    upExit: {
      opacity: 1,
      y: "-150%",
      transition: {
        duration: 1,
      },
    },
    downExit: {
      opacity: 1,
      y: "150%",
      transition: {
        duration: 1,
      },
    },
  };

  const areImagesLoaded = loadedImages.length > 0;

  return (
    <div
      className={cn(
        "overflow-hidden h-full w-full relative flex items-center justify-center",
        className
      )}
      style={{ perspective: "1000px" }}
    >
      {areImagesLoaded && children}
      {areImagesLoaded && overlay && (
        <div className={cn("absolute inset-0 z-40", overlayClassName)} />
      )}

      {areImagesLoaded && (
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            initial="initial"
            animate="visible"
            exit={direction === "up" ? "upExit" : "downExit"}
            variants={slideVariants}
            className="image-container h-full w-full absolute inset-0"
          >
            <img
              src={loadedImages[currentIndex].src}
              alt={loadedImages[currentIndex].alt || ""}
              className="h-full w-full object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};
