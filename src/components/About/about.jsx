import React from "react";
import { AnimatedPinDemo } from "./subcomponents/3dPin";
import sxp from "@/components/About/img/sxp.jpg"
import sxpC from "@/components/About/img/sxp-cover.jpg"
import ba from "@/components/About/img/ba.png"
import baC from "@/components/About/img/baldwin-cover.jpg"
import nitrkl from "@/components/About/img/nitrkl.png"
import nitrklC from "@/components/About/img/nitrkl-cover.jpg"
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import Grid from "./subcomponents/grid";

export default async function Abouts() {
  const Education = [
    {
      text: "Education",
      className: "text-red-500 dark:text-red-500",
    },
    {
      text: ":",
    },
    {
      text: "Places",
    },
    {
      text: "where",
    },
    {
      text: "I",
    },
    {
      text: "Learn",
    },
  ];
  const Hobbies = [
    {
      text: "Hobbies",
      className: "text-red-500 dark:text-red-500",
    },
    {
      text: ":",
    },
    {
      text: "Life",
    },
    {
      text: "beyond",
    },
    {
      text: "screen",
    },
  ];
  return (
    <div>
      <div className="flex items-center justify-center py-6 md:py-10">
        <TypewriterEffectSmooth words={Education} />
      </div>
      <div className="flex flex-col lg:flex-row gap-10 md:gap-20 items-center justify-center mx-0 md:mx-16 md:mb-8">
        <AnimatedPinDemo title={"nitrkl.ac.in"} nlink={"https://www.nitrkl.ac.in/"} name={"NIT Rourkela"} description1={"I am a Pre-Final Year student pursuing my B.Tech Degree."} description2={" Represented our college in All-India InterNIT as a part of the swimming team."} description3={"Led my team to successfully organize Cosmopolitan : The Multi-ethnic Fest."} Logo={nitrkl} Cover={nitrklC}/>
        <AnimatedPinDemo title={"baldwinsociety.in/patna"} nlink={"https://www.baldwinsociety.in/patna"} name={"Baldwin Academy"} description1={"I have done my intermediate in C.B.S.E Board."} description2={"Prepared for all sort of Engineering College Exams alongside my schooling."} description3={"Not actively involved in any major school societies during this period."} Logo={ba} Cover={baC}/>
        <AnimatedPinDemo title={"stxavierspatna.in"} nlink={"https://www.stxavierspatna.in/"} name={"St. Xavier's High School"} description1={"I have done my matriculation in I.C.S.E Board."} description2={"Represented our school in various sports meet as part of the swimming team."} description3={"Literary society member, involved in writing, debates, and discussions."} Logo={sxp} Cover={sxpC}/>
      </div>
      <div className="flex items-center justify-center py-6 md:py-10">
        <TypewriterEffectSmooth words={Hobbies} />
      </div>
      <div>
        <Grid />
      </div>
    </div>
  );
}