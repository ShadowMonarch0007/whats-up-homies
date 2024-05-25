import React from "react";
import { AnimatedPinDemo } from "./subcomponents/3dPin";
import sxp from "@/components/About/img/sxp.jpg"
import ba from "@/components/About/img/ba.png"
import nitrkl from "@/components/About/img/nitrkl.png"
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

export default async function Abouts(){
    const Education = [
        {
          text: "Education",
          className: "text-blue-500 dark:text-blue-500",
        },
        {
          text: ":",
        },
        {
          text: "Place",
        },
        {
          text: "where",
        },
        {
          text: "you",
        },
        {
          text: "Learn.",
        },
      ];
    const Hobbies = [
        {
          text: "Hobbies",
          className: "text-blue-500 dark:text-blue-500",
        },
        {
          text: ":",
        },
        {
          text: "Stuff",
        },
        {
          text: "which",
        },
        {
          text: "you",
        },
        {
          text: "Enjoy",
        },
      ];
    return(
        <div>
            <div className="mb-10 flex items-center justify-center">
                <TypewriterEffectSmooth words={Education}/>
            </div>
            <div className="flex flex-wrap lg:flex-nowrap gap-20 items-center justify-center">
                <AnimatedPinDemo title={"stxavierspatna.in"} nlink={"https://www.stxavierspatna.in/"} name={"St. Xavier's High SChool"} description={"I have done my matriculation in I.C.S.E Board."} Logo={sxp}/>
                <AnimatedPinDemo title={"baldwinsociety.in/patna"} nlink={"https://www.baldwinsociety.in/patna"} name={"Baldwin Academy"} description={"I have done my intermediate in C.B.S.E Board."} Logo={ba}/>
                <AnimatedPinDemo title={"nitrkl.ac.in"} nlink={"https://www.nitrkl.ac.in/"} name={"NIT Rourkela"} description={"I am a Pre-Final Year student pursuing my B.Tech Degree."} Logo={nitrkl}/>
            </div>
            <div className="mt-20 mb-10 flex items-center justify-center">
                <TypewriterEffectSmooth words={Hobbies}/>
            </div>       
        </div>
    );
}