import React from "react";
import MagicButton from "@/components/ui/border-button";
import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default async function TechStack(){

    const techStack1 = ["C", "C++", "Java", "DSA", "Web Dev", "MERN Stack"];
    const techStack2 = ["HTML", "CSS", "Javascript", "Typescript", "React JS", "Next JS", "Vite JS", "Tailwind CSS", "Bootstrap", "Motion Dev", "GSAP", "Mongo Db", "Express JS", "Node JS", "Appwrite", "Chart JS" ];

    return(
        <div>
            <div className="border-[0.05px] backdrop-blur-[2px] dark:border-[#e0e0e0]/50 border-[#202020]/50 rounded-xl overflow-hidden">
                    <div className="flex group hover:translate-x-2.5 transition-all">
                        <div className="w-full h-40 lg:h-80 flex flex-col gap-1 lg:gap-2 items-start justify-center p-5 lg:p-20">
                            <p className="font-sans font-extralight text-[10px] lg:text-xl text-[#232323] dark:text-[#C1C2D3]">Learning constantly to improve</p>
                            <h1 className="font-sans text-[22px] lg:text-[55px] max-w-96 font-bold">My Tech Stack</h1>
                        </div>
                        <Link href="./Skills" className="absolute bottom-0 left-0 group-hover:-translate-x-5 transition-all"><MagicButton title={"View All"} icon={<FaLocationArrow/>} position={"right"}/></Link>
                        <div class="flex gap-3 lg:gap-5 w-full h-full items-center justify-end absolute -right-5 -z-50">
                            <InfiniteMovingCards items={techStack1} speed="normal" direction="up" />
                            <InfiniteMovingCards items={techStack2} speed="slow" direction="down" />
                        </div>
                    </div>
                </div>
        </div>
    );
}