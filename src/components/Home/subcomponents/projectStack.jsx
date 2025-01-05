import React from "react";
import MagicButton from "@/components/ui/border-button";
import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";
import { ImagesSliderDemo } from "./imageSliderDemo";

export default function ProjectGrid() {
    return (
        <div>
            <div className="border-[0.05px] backdrop-blur-[2px] dark:border-[#e0e0e0]/50 border-[#202020]/50 rounded-xl overflow-hidden">
                <div className="flex group hover:translate-x-2.5 transition-all">
                    <div className="w-full h-48 lg:h-96 flex flex-col gap-1 lg:gap-2 items-start justify-center p-5 lg:p-20 relative z-20">
                        {/* <p className="font-sans font-extralight text-[10px] lg:text-xl text-[#232323] dark:text-[#C1C2D3]">32 Mobiles</p> */}
                        <h1 className="font-sans text-lg lg:text-5xl max-w-48 lg:max-w-[500px] font-bold">A small preview of my <span className="text-red-500">recent projects</span></h1>
                    </div>
                    <Link href="./Projects" className="absolute z-30 bottom-0 left-0 group-hover:-translate-x-5 transition-all"><MagicButton title={"View All"} icon={<FaLocationArrow />} position={"right"} /></Link>
                    <div className="absolute z-0 -bottom-5 -right-5">
                        <ImagesSliderDemo/>
                    </div>
                </div>
            </div>
        </div>
    );
}
