import React from "react";
import { ThreeDCardDemo } from "./subcomponents/card3d";
import Image from "next/image";
import OldPortfolio from "@/components/Projects/img/portfolio-old.png" 
import HTML from "@/components/Skills/svg/html.svg"
import CSS from "@/components/Skills/svg/css.svg"
import JS from "@/components/Skills/svg/javascript.svg"
import BS from "@/components/Skills/svg/Bootstrap.svg"

export default async function Projects(){
    return(
        <div className="flex flex-wrap items-center justify-evenly">
            <ThreeDCardDemo title={"My Portfolio Old"} note={"Portfolio designed to showcase my digital presence."} img={OldPortfolio} link={"https://shadowmonarch0007.github.io/WHAT-S-UP-HOMIES-old/"} people={Portfolio_Old}/>
            <ThreeDCardDemo title={"My Portfolio Old"} note={"Portfolio designed to showcase my digital presence."} img={OldPortfolio} link={"https://shadowmonarch0007.github.io/WHAT-S-UP-HOMIES-old/"} people={Portfolio_Old}/>
            <ThreeDCardDemo title={"My Portfolio Old"} note={"Portfolio designed to showcase my digital presence."} img={OldPortfolio} link={"https://shadowmonarch0007.github.io/WHAT-S-UP-HOMIES-old/"} people={Portfolio_Old}/>
            <ThreeDCardDemo title={"My Portfolio Old"} note={"Portfolio designed to showcase my digital presence."} img={OldPortfolio} link={"https://shadowmonarch0007.github.io/WHAT-S-UP-HOMIES-old/"} people={Portfolio_Old}/>
        </div>
    );
}

const Portfolio_Old = [
    {
      id: 1,
      name: "Javascript",
      image: JS,
    },
    {
      id: 2,
      name: "HTML",
      image: HTML,
    },
    {
      id: 3,
      name: "CSS",
      image: CSS,
    },
    {
      id: 4,
      name: "Bootstrap",
      image: BS,
    },
  ];