import React from "react";
import MagicButton from "@/components/ui/magicButton";
import Link from "next/link";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export default async function ConnectGrid() {
    return (
        <div>
            <div className="border-[0.05px] backdrop-blur-[2px] dark:border-[#e0e0e0]/50 border-[#202020]/50 rounded-xl overflow-hidden h-40 md:h-24 lg:h-56 w-full">
                <BackgroundGradientAnimation>
                    <div className="absolute z-10 flex items-center justify-cente px-4 pointer-events-none"></div>
                    <div className="flex flex-col absolute z-20 top-0 left-0 group hover:-translate-y-2.5 transition-all">
                        <div className="w-full h-40 md:h-24 lg:h-56 flex p-5 lg:p-14 relative z-0">
                            <h2 className="text-center text-2xl md:text-base lg:text-4xl font-bold text-black dark:text-white">Do you want to start a project together?</h2>
                        </div>
                        <Link href="./Connect" className="absolute top-24 left-24 md:top-12 md:left-32 lg:top-36 lg:left-48 group-hover:translate-y-5 transition-all"><MagicButton title={"Connect With Me"}/></Link>
                    </div>
                </BackgroundGradientAnimation>
            </div>
        </div>
    );
}
// icon={<FaLocationArrow/>} 
