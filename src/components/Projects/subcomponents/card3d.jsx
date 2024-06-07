"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import Link from "next/link";

export function ThreeDCardDemo({ img, title, note, link, people }) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border-2">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {note}
        </CardItem>
        <CardItem translateZ="100" className="w-full h-full mt-4">
          <Image
            src={img}
            height="1000"
            width="1000"
            className="h-52 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-16">
          <CardItem
            translateZ={20}
            as={Link}
            href={link}
            className="px-4 py-2 rounded-xl text-sm flex items-center font-normal dark:text-white"
          >
            Check Live Site →
          </CardItem>
          <CardItem
            translateZ={20}
            className="px-4 py-2 rounded-xl"
          >
            <div className="flex flex-row items-center justify-center w-full">
              <AnimatedTooltip items={people} />
            </div>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

