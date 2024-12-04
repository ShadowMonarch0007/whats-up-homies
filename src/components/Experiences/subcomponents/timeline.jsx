import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import astron from "@/components/Experiences/img/astron.png"
import mobi32 from "@/components/Experiences/img/32mobi.webp";
import Astro from "@/components/Experiences/img/Astronitr.png";

export function TimelineDemo() {
    const data = [
        {
            title: "JUL-AUG 2024",
            content: (
                <div>
                    <div className="flex items-center gap-2.5 lg:gap-5">
                        <div className="dark:bg-white p-2 h-20 w-20 lg:h-48 lg:w-48 rounded-2xl flex items-center justify-center">
                            <Image className="h-16 w-16 lg:h-40 lg:w-40" src={astron} />
                        </div>
                        <div className="w-2/3 md:w-full lg:w-full">
                            <h1 className="text-start text-lg lg:text-3xl font-light lg:font-medium text-[#202020] dark:text-white"> Full Stack Developer</h1>
                            <p className="text-start text-[10px] leading-4 lg:leading:5 lg:text-lg font-extralight lg:font-light text-[#606060] dark:text-[#e0e0e0]">Collaborated in the design, development, enhancement, and maintenance of various web‐based platforms using Next.js & Framer Motion</p>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "MAY-JUL 2024",
            content: (
                <div>
                    <div className="flex items-center gap-2.5 lg:gap-5">
                        <div className="dark:bg-white p-2 h-20 w-20 lg:h-48 lg:w-48 rounded-2xl flex items-center justify-center">
                            <Image className="h-16 w-16 lg:h-40 lg:w-40" src={mobi32} />
                        </div>
                        <div className="w-2/3 md:w-full lg:w-full">
                            <h1 className="text-start text-lg lg:text-3xl font-light lg:font-medium text-[#202020] dark:text-white">Front-end SDE Intern</h1>
                            <p className="text-start text-[10px] leading-4 lg:leading:5 lg:text-lg font-extralight lg:font-light text-[#606060] dark:text-[#e0e0e0]">Assisted in the development of web-based platforms using Next.js & Tailwind CSS enhancing interactivity.</p>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "2023",
            content: (
                <div>
                    <div className="flex items-center gap-2.5 lg:gap-5">
                        <div className="bg-black dark:bg-transparent p-2 h-20 w-20 lg:h-48 lg:w-48 rounded-2xl flex items-center justify-center">
                            <Image className="h-16 w-16 lg:h-40 lg:w-40" src={Astro} />
                        </div>
                        <div className="w-2/3 md:w-full lg:w-full">
                            <h1 className="text-start text-lg lg:text-3xl font-light lg:font-medium text-[#202020] dark:text-white">Website Developer</h1>
                            <p className="text-start text-[10px] leading-4 lg:leading:5 lg:text-lg font-extralight lg:font-light text-[#606060] dark:text-[#e0e0e0]">Collaborated in the design, development, enhancement, and maintenance of the official website for my college club AstroNITR </p>
                        </div>
                    </div>
                </div>
            ),
        },
    ];
    return (
        (<div className="w-full pb-10">
            <Timeline data={data} />
        </div>)
    );
}
