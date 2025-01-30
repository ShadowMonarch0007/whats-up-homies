import React from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { FlipWords } from "@/components/ui/flip-words";
import MagicButton from "@/components/ui/magicButton";
import Link from "next/link";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import pfp from "@/components/Home/img/pfp.jpg"

export default async function Hero() {
    const words = ["simple", "cheerful", "industrious", "meticulous-professional"];
    return (
        <div className="mb-5 lg:mb-10">
            <div className="flex items-center justify-center">
                <BackgroundGradient>
                    <Image className="h-32 w-32 md:h-40 md:w-40 lg:h-52 lg:w-52 rounded-3xl" src={pfp}/>
                </BackgroundGradient>
            </div>
            <div className="flex items-center justify-center">
                <TextGenerateEffect
                    words="Greetings! I&apos;m Aditya Chandra, a software developer"
                    className="lg:w-2/3 md:w-2/3 text-center text-[1.4rem] md:text-[4rem]"
                />
            </div>
            <div className="text-[8px] md:text-2xl text-center font-normal text-neutral-600 dark:text-neutral-400">
                I&apos;m
                <FlipWords words={words} />
                dedicated to delivering exemplary work.
            </div>
            <div className="flex items-center justify-center my-4 md:my-8">
                <Link href="https://www.linkedin.com/in/aditya-chandra-b89470285"><MagicButton title={"Know Me More"} icon={<FaLocationArrow />} position={"right"} /></Link>
            </div>
        </div>
    );
}