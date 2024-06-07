import React from "react";
import MagicButton from "@/components/ui/border-button";
import { FaLocationArrow } from "react-icons/fa6";
import expbg from "@/components/Home/img/expbg.png";
import expbgL from "@/components/Home/img/expbgL.png";
import Image from "next/image";
import Link from "next/link";

export default async function Experience() {
    return (
        <div>
            <div className="border-[0.05px] backdrop-blur-[2px] dark:border-[#e0e0e0]/50 border-[#202020]/50 rounded-xl overflow-hidden">
                <div className="flex group hover:translate-x-2.5 transition-all">
                    <div className="w-full h-48 lg:h-[472.5px] flex flex-col gap-1 lg:gap-2 items-start justify-center p-5 lg:p-20 relative z-20">
                        <p className="font-sans font-extralight text-[10px] lg:text-xl text-[#232323] dark:text-[#C1C2D3]">32 Mobiles</p>
                        <h1 className="font-sans text-lg lg:text-4xl max-w-48 lg:max-w-96 font-bold">Currently working as a <span className="text-red-500">Front-end SDE Intern</span></h1>
                    </div>
                    <Link href="./Experience" className="absolute z-30 bottom-0 left-0 group-hover:-translate-x-5 transition-all"><MagicButton title={"View All"} icon={<FaLocationArrow />} position={"right"} /></Link>
                    <div className="absolute z-0 -bottom-12 lg:-bottom-20 -right-24 lg:-right-20 group-hover:-translate-x-2.5 transition-all">
                        <Image className="dark:hidden w-full h-60 lg:h-96" src={expbgL}/>
                        <Image className="hidden dark:block w-full h-60 lg:h-96" src={expbg}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
