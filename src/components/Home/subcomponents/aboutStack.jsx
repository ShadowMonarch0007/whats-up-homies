import React from "react";
import Image from "next/image";
import Link from "next/link";
import MagicButton from "@/components/ui/border-button";
import { FaLocationArrow } from "react-icons/fa6";
import { CardStack } from "@/components/ui/card-stack";
import { cn } from "@/lib/utils";
import sxp from "@/components/Home/img/sxp.jpg"
import ba from "@/components/Home/img/ba.png"
import nitrkl from "@/components/Home/img/nitrkl.png"
import code from "@/components/Home/img/coding.jpg"
import swim from "@/components/Home/img/swimming.jpg"

export async function Education() {
    return (
        <div>
            <div className="w-full h-48 lg:h-80 flex items-center justify-center group hover:translate-x-2.5 transition-all">
                <div className=" flex flex-col gap-10 items-center justify-around">
                    <CardStack items={CARDS} />
                </div>
                <Link href="./About" className="absolute bottom-0 left-0 group-hover:-translate-x-5 transition-all"><MagicButton title={"View All"} icon={<FaLocationArrow />} position={"right"} /></Link>
            </div>
        </div>
    )
}

export const Highlight = ({ children, className }) => {
    return (
        <span
            className={cn(
                "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
                className
            )}
        >
            {children}
        </span>
    );
};

const CARDS = [
    {
        id: 0,
        content: (
            <div className="flex items-center justify-between">
                <div className="flex flex-col items-start justify-start"><Highlight className="text-sm lg:text-lg">St. Xavier&apos;s High School</Highlight>
                    <p className="text-sm lg:text-base">I have done my matriculation in I.C.S.E Board.</p></div>
                <Image className="rounded-2xl lg:h-40 lg:w-40" src={sxp} height={80} width={80} />

            </div>
        ),
    },
    {
        id: 4,
        content: (
            <div className="flex items-center justify-between">
                <div className="flex flex-col items-start justify-start"><Highlight className="text-sm lg:text-lg">Love to Swim!</Highlight>
                    <p className="text-sm lg:text-base">Member of college swimming team.</p></div>
                <Image className="rounded-2xl lg:h-40 lg:w-40" src={swim} height={80} width={80} />
            </div>
        ),
    },
    {
        id: 3,
        content: (
            <div className="flex items-center justify-between">
                <div className="flex flex-col items-start justify-start"><Highlight className="text-sm lg:text-lg">Coding is Life!</Highlight>
                    <p className="text-sm lg:text-base">Developing website nowadays.</p></div>
                <Image className="rounded-2xl lg:h-40 lg:w-40" src={code} height={80} width={80} />
            </div>
        ),
    },
    {
        id: 2,
        content: (
            <div className="flex items-center justify-between">
                <div className="flex flex-col items-start justify-start"><Highlight className="text-sm lg:text-lg">NIT Rourkela</Highlight>
                    <p className="text-sm lg:text-base">I am a Pre-Final Year student pursuing my B.Tech Degree.</p></div>
                <Image className="rounded-2xl lg:h-40 lg:w-40" src={nitrkl} height={80} width={80} />
            </div>
        ),
    },
    {
        id: 1,
        content: (
            <div className="flex items-center justify-between">
                <div className="flex flex-col items-start justify-start"><Highlight className="text-sm lg:text-lg">Baldwin Academy</Highlight>
                    <p className="text-sm lg:text-base">I have done my intermediate in C.B.S.E Board.</p></div>
                <Image className="rounded-2xl lg:h-40 lg:w-40" src={ba} height={80} width={80} />
            </div>
        ),
    },
    
];