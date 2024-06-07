"use client"
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ImagesSlider } from "@/components/ui/images-slider";
import portfolio from "@/components/Home/img/portfolio.png";
import campusXpress from "@/components/Home/img/campusXpress.png";
import portfolioOld from "@/components/Projects/img/portfolio-old.png";

export function ImagesSliderDemo() {
    const images = [
        portfolio,
        campusXpress,
        portfolioOld,
    ];
    return (
      <ImagesSlider className="h-40 w-60 lg:h-80 lg:w-[600px] rounded-xl" images={images}>
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col justify-center items-center"
        >
        </motion.div>
      </ImagesSlider>
    );
  }