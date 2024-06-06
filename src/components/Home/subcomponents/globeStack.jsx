{/* <h2 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white">I'm very flexible with time zone communications</h2> */ }
import React from "react";
import MagicButton from "@/components/ui/border-button";
import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { GlobeDemo } from "./globeDemo";

export default async function GlobeGrid() {
    return (
        <div>
            <div className="border-[0.05px] backdrop-blur-[2px] dark:border-[#e0e0e0]/50 border-[#202020]/50 rounded-xl overflow-hidden">
                <div className="flex flex-col group hover:translate-x-2.5 transition-all">
                    <div className="w-full h-40 lg:h-60 flex p-5 lg:p-16 relative z-0">
                        <h2 className="text-center text-base lg:text-2xl font-bold text-black dark:text-white">I&apos;m very flexible with time zone communications</h2>
                    </div>
                    <div>
                        <GlobeDemo/>
                    </div>
                    <Link href="./Experience" className="absolute bottom-0 left-0 group-hover:-translate-x-5 transition-all"><MagicButton title={"View All"} icon={<FaLocationArrow />} position={"right"} /></Link>
                </div>
            </div>
        </div>
    );
}
