import React from "react";
import mobi32 from "@/components/Experiences/img/32mobi.webp";
import Astro from "@/components/Experiences/img/Astronitr.png";
import MovingButtonDemo from "./subcomponents/movingButtonDemo";
import astron from "@/components/Experiences/img/astron.png"
import { TimelineDemo } from "./subcomponents/timeline";

export default async function MyExperiences() {
    return (
        <>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                <div className="col-span-1 row-span-1"><MovingButtonDemo img={astron} imgClass={"dark:bg-white h-24 w-24 lg:h-36 lg:w-36"} title={"Full Stack Developer"} note={"Collaborated in the design, development, enhancement, and maintenance of various web‐based platforms using Next.js & Framer Motion."} /></div>
                <div className="col-span-1 row-span-1"><MovingButtonDemo img={mobi32} imgClass={"dark:bg-white h-24 w-24 lg:h-36 lg:w-36"} title={"Front-end SDE Intern"} note={"Assisted remotely in the development of web-based platforms using Next.js & Tailwind CSS enhancing interactivity."} /></div>
                <div className="col-span-1 row-span-1"><MovingButtonDemo img={Astro} imgClass={"bg-black dark:bg-transparent p-2 h-24 w-24 lg:h-36 lg:w-36"} title={"Website Developer"} note={"Design and Developed website using React.js for my college club AstroNITR."} /></div>
            </div>
            {/* <TimelineDemo /> */}
        </>
    );
}

