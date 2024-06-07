import React from "react";
import { ThreeDCardDemo } from "./subcomponents/card3d";
import Image from "next/image";
import OldPortfolio from "@/components/Projects/img/portfolio-old.png" 
import NewPortfolio from "@/components/Projects/img/portfolio.png" 
import campusXpress from "@/components/Projects/img/campusXpress.png" 
import HTML from "@/components/Projects/img/HTML.png"
import CSS from "@/components/Projects/img/CSS.png"
import JS from "@/components/Projects/img/javascript.png"
import BS from "@/components/Projects/img/bootstrap.png"
import NextJS from "@/components/Projects/img/nextjs.png"
import ReactJS from "@/components/Projects/img/reactjs.png"
import Tcss from "@/components/Projects/img/tailwind.png"
import FM from "@/components/Projects/img/framer-motion.png"

export default async function Projects(){
    return(
        <div className="flex flex-wrap items-center justify-evenly">
            <ThreeDCardDemo title={"My Portfolio"} note={"Portfolio designed to showcase my digital presence."} img={NewPortfolio} link={"https://aditya-chandra-portfolio.vercel.app/"} people={Portfolio}/>
            <ThreeDCardDemo title={"Campus Xpress"} note={"A service provider based on college campus"} img={campusXpress} link={"https://bhagwan-ke-bharose.github.io/CampusXpress/"} people={Portfolio_Old}/>
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
  const Portfolio = [
    {
      id: 1,
      name: "Next JS",
      image: NextJS,
    },
    {
      id: 2,
      name: "React JS",
      image: ReactJS,
    },
    {
      id: 3,
      name: "Tailwind CSS",
      image: Tcss,
    },
    {
      id: 4,
      name: "Framer Motion",
      image: FM,
    },
  ];