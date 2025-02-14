import React from "react";
import { ThreeDCardDemo } from "./subcomponents/card3d";
import Image from "next/image";
import GameX from "@/components/Projects/img/game-x-home.png" 
import CloudHaven from "@/components/Projects/img/cloud-haven.png" 
import JarvisI from "@/components/Projects/img/jarvis-i.png" 
import OldPortfolio from "@/components/Projects/img/portfolio-old.png" 
import Jarvisai from "@/components/Projects/img/jarvis-ai.png"
import NewPortfolio from "@/components/Projects/img/portfolio.png" 
import campusXpress from "@/components/Projects/img/campusXpress.png" 
import SIDH from"@/components/Projects/img/SIDH.png"
import astroTask from "@/components/Projects/img/Astro-Task.png" 
import HTML from "@/components/Projects/img/HTML.png"
import CSS from "@/components/Projects/img/CSS.png"
import JS from "@/components/Projects/img/javascript.png"
import BS from "@/components/Projects/img/bootstrap.png"
import NextJS from "@/components/Projects/img/nextjs.png"
import ReactJS from "@/components/Projects/img/reactjs.png"
import Tcss from "@/components/Projects/img/tailwind.png"
import FM from "@/components/Projects/img/framer-motion.png"
import MDB from "@/components/Projects/img/mongoDB.png"
import Node from "@/components/Projects/img/node-js.png"
import VJS from "@/components/Projects/img/Vitejs.png"
import Gsap from "@/components/Projects/img/gsap.png"
import EJS from "@/components/Projects/img/express.png"
import appwrite from "@/components/Projects/img/appwrite.png"
import ts from "@/components/Projects/img/typescript.png"
import cloudinary from "@/components/Projects/img/cloudinary-icon.png"
import picassox from "@/components/Projects/img/picassox.png"
import luxeloom from "@/components/Projects/img/luxeloom.png"

export default async function Projects(){
    return(
        <div className="flex flex-wrap items-center justify-evenly">
            <ThreeDCardDemo title={"PicassoX"} note={"An AI-powered image editor with Cloudinary AI and Stripe payments integration."} img={picassox} link={"https://picassox.vercel.app/"} people={PicassoX}/>
            <ThreeDCardDemo title={"Luxeloom"} note={"LuxeLoom is a premium e-commerce platform with elegant design, seamless shopping, and efficient order management."} img={luxeloom} link={"https://luxeloom-shop.vercel.app/"} people={MERN}/>
            <ThreeDCardDemo title={"GameX"} note={"A game providing website with modern and futuristic animations inspired from Zentry."} img={GameX} link={"https://game-x-pro.vercel.app/"} people={gameX}/>
            <ThreeDCardDemo title={"Cloud Haven"} note={"A cloud storage website to upload your files using appwrite service."} img={CloudHaven} link={"https://cloud-haven-storage.vercel.app/"} people={Cloud_Haven}/>
            <ThreeDCardDemo title={"JARVIS I"} note={"An image generating website using `OPEN-AI API` and cloudinary."} img={JarvisI} link={"https://jarvis-i.vercel.app/"} people={MERN}/>
            <ThreeDCardDemo title={"My Portfolio"} note={"My own Portfolio designed to showcase my digital presence."} img={NewPortfolio} link={"https://aditya-chandra-portfolio.vercel.app/"} people={Portfolio}/>
            <ThreeDCardDemo title={"JARVIS Ai"} note={"UI/UX Project designed for an AI based commercial marketing site."} img={Jarvisai} link={"https://the-jarvis-ai.vercel.app/"} people={JARVIS}/>
            <ThreeDCardDemo title={"Campus Xpress"} note={"A service provider website based on college campus for HACKODISHA 3.0 ."} img={campusXpress} link={"https://bhagwan-ke-bharose.github.io/CampusXpress/"} people={Portfolio_Old}/>
            <ThreeDCardDemo title={"Skill India Home Clone"} note={"UI/UX project based on the home page clone of Skill India Digital Hub."} img={SIDH} link={"https://shadowmonarch0007.github.io/Skill-India-Home-Clone/"} people={Portfolio_Old}/>
            <ThreeDCardDemo title={"AstroNITR Dummy Site"} note={"A dummy website created solely for the web-dev team induction task."} img={astroTask} link={"https://shadowmonarch0007.github.io/Astro-Task/"} people={Portfolio_Old}/>
            <ThreeDCardDemo title={"My Old Portfolio"} note={"My old Portfolio designed to showcase my digital presence."} img={OldPortfolio} link={"https://shadowmonarch0007.github.io/WHAT-S-UP-HOMIES-old/"} people={Portfolio_Old}/>
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
      name: "Node JS",
      image: Node,
    },
    {
      id: 3,
      name: "Mongo DB",
      image: MDB,
    },
    {
      id: 4,
      name: "Framer Motion",
      image: FM,
    },
  ];
  const Cloud_Haven = [
    {
      id: 1,
      name: "Next JS",
      image: NextJS,
    },
    {
      id: 2,
      name: "Node JS",
      image: Node,
    },
    {
      id: 3,
      name: "Appwrite",
      image: appwrite,
    },
    {
      id: 4,
      name: "Typescript",
      image: ts,
    },
  ];
  const JARVIS = [
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
  const MERN = [
    {
      id: 1,
      name: "Mongo DB",
      image: MDB,
    },
    {
      id: 2,
      name: "Express JS",
      image: EJS,
    },
    {
      id: 3,
      name: "React JS",
      image: ReactJS,
    },
    {
      id: 4,
      name: "Node JS",
      image: Node,
    },
  ];
  const gameX = [
    {
      id: 1,
      name: "Vite JS",
      image: VJS,
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
      name: "GSAP",
      image: Gsap,
    },
  ];
  const PicassoX = [
    {
      id: 1,
      name: "Next JS",
      image: NextJS,
    },
    {
      id: 2,
      name: "Mongo DB",
      image: MDB,
    },
    {
      id: 3,
      name: "Cloudinary",
      image: cloudinary,
    },
    {
      id: 4,
      name: "Typescript",
      image: ts,
    },
  ];