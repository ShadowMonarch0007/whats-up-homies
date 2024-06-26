import React from "react";
import MagicButton from "@/components/ui/border-button";
import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";

export default async function TechStack(){
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
                            <div class="flex flex-col gap-3 md:gap-3 lg:gap-8">
                                <span class="h-9 w-20 lg:h-16 lg:w-40 text-[8px] lg:text-base rounded-lg flex items-center justify-center bg-[#e0e0e0] dark:bg-[#202020] text-[#202020] dark:text-[#e0e0e0]">C</span>
                                <span class="h-9 w-20 lg:h-16 lg:w-40 text-[8px] lg:text-base rounded-lg flex items-center justify-center bg-[#e0e0e0] dark:bg-[#202020] text-[#202020] dark:text-[#e0e0e0]">C++</span>
                                <span class="h-9 w-20 lg:h-16 lg:w-40 text-[8px] lg:text-base rounded-lg flex items-center justify-center bg-[#e0e0e0] dark:bg-[#202020] text-[#202020] dark:text-[#e0e0e0]">Java</span>
                                <span class="h-9 w-20 lg:h-16 lg:w-40 text-[8px] lg:text-base rounded-lg flex items-center justify-center bg-[#e0e0e0] dark:bg-[#202020] text-[#202020] dark:text-[#e0e0e0]">DSA</span>
                                <span class="h-9 w-20 lg:h-16 lg:w-40 text-[8px] lg:text-base rounded-lg flex items-center justify-center bg-[#e0e0e0] dark:bg-[#202020] text-[#202020] dark:text-[#e0e0e0]">Web Dev</span>
                            </div>
                            <div class="flex flex-col gap-3 md:gap-3 lg:gap-8 mt-12 lg:mt-24">
                                <span class="h-9 w-20 lg:h-16 lg:w-40 text-[8px] lg:text-base rounded-lg flex items-center justify-center bg-[#e0e0e0] dark:bg-[#202020] text-[#202020] dark:text-[#e0e0e0]">ReactJS</span>
                                <span class="h-9 w-20 lg:h-16 lg:w-40 text-[8px] lg:text-base rounded-lg flex items-center justify-center bg-[#e0e0e0] dark:bg-[#202020] text-[#202020] dark:text-[#e0e0e0]">NextJS</span>
                                <span class="h-9 w-20 lg:h-16 lg:w-40 text-[8px] lg:text-base rounded-lg flex items-center justify-center bg-[#e0e0e0] dark:bg-[#202020] text-[#202020] dark:text-[#e0e0e0]">Tailwind CSS</span>
                                <span class="h-9 w-20 lg:h-16 lg:w-40 text-[8px] lg:text-base rounded-lg flex items-center justify-center bg-[#e0e0e0] dark:bg-[#202020] text-[#202020] dark:text-[#e0e0e0]">Framer Motion</span>
                                <span class="h-9 w-20 lg:h-16 lg:w-40 text-[8px] lg:text-base rounded-lg flex items-center justify-center bg-[#e0e0e0] dark:bg-[#202020] text-[#202020] dark:text-[#e0e0e0]">Javascript</span>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}