import React from "react";
import Image from "next/image";
import LayoutGrid from "../ui/layout-grid";
import Cpp from "@/components/Skills/svg/cpp.svg"
import Java from "@/components/Skills/svg/java.svg"
import dsa from "@/components/Skills/svg/dsa.png"
import dsaL from "@/components/Skills/svg/dsaL.png"
import Cl from "@/components/Skills/svg/Clang.svg"
import Fwd from "@/components/Skills/svg/Fwebdev.svg"
import FwdL from "@/components/Skills/svg/FwebdevL.svg"
import HTML from "@/components/Skills/svg/html.svg"
import CSS from "@/components/Skills/svg/css.svg"
import JS from "@/components/Skills/svg/javascript.svg"
import BS from "@/components/Skills/svg/Bootstrap.svg"
import NextJS from "@/components/Skills/svg/next-js.svg"
import NextJSL from "@/components/Skills/svg/next-js-light.svg"
import ReactJS from "@/components/Skills/svg/react.svg"
import Tcss from "@/components/Skills/svg/tailwind.svg"
import FM from "@/components/Skills/svg/motion.png"
import Aui from "@/components/Skills/svg/acerternity.png"
import AuiD from "@/components/Skills/svg/acerternityD.png"
import Chart from "@/components/Skills/svg/chartjs.svg"
import ChartL from "@/components/Skills/svg/chartjsL.svg"
import WebDev from "@/components/Skills/img/WebDev.jpg"
import cppcert from "@/components/Skills/img/c++.jpg"
import ccert from "@/components/Skills/img/c.jpg"
import ts from "@/components/Skills/svg/typescript.svg"
import mdb from "@/components/Skills/svg/mongodb.svg"
import express from "@/components/Skills/svg/express.svg"
import expressb from "@/components/Skills/svg/expressb.svg"
import node from "@/components/Skills/svg/node.svg"
import vite from "@/components/Skills/svg/Vitejs.svg"
import appwrite from "@/components/Skills/svg/appwrite.svg"
import javacert from "@/components/Skills/img/JavaCertificate.jpg"
import gsap from "@/components/Skills/svg/gsap.png"

export default async function Skills() {
    return (
        <div>
            <div className="w-full py-10 lg:py-0 xl:py-0 2xl:py-0 ">
                <LayoutGrid cards={cards} />
            </div>
        </div>
    );
}

const CPPCertificate = () => {
    return (
        <div className="w-screen h-screen bg-transparent flex items-center justify-center">
            <Image className="w-[300px] lg:w-[800px] h-[210px] lg:h-[560px]" src={cppcert} />
        </div>
    );
};

const WebDevCertificate = () => {
    return (
        <div className="w-screen h-screen bg-transparent flex items-center justify-center">
            <Image className="w-[300px] lg:w-[800px] h-[210px] lg:h-[560px]" src={WebDev} />
        </div>
    );
};
const CCertificate = () => {
    return (
        <div className="w-screen h-screen bg-transparent flex items-center justify-center">
            <Image className="w-[300px] lg:w-[800px] h-[210px] lg:h-[560px]" src={ccert} />
        </div>
    );
};
const JavaCertificate = () => {
    return (
        <div className="w-screen h-screen bg-transparent flex items-center justify-center">
            <Image className="w-[300px] lg:w-[800px] h-[210px] lg:h-[560px]" src={javacert} />
        </div>
    );
};

const cards = [
    {
        id: 1,
        content: <CCertificate />,
        className: "col-span-1",
        thumbnail: <div className="h-20 md:h-60 flex flex-col justify-around items-center  backdrop-blur-[1.5px] rounded-xl lg:rounded-3xl border-1 md:border-2 border-[#e0e0e0] dark:border-[#202020] cursor-pointer p-2 md:p-0 md:py-5 md:px-8">
            <div className="flex items-center w-full gap-0.5">
                <Image className=" h-full w-8 md:w-24" src={Cl} />
                <h1 className="text-gray-700 dark:text-gray-500 sirin-stencil-regular text-[8px] md:text-4xl font-bold">C</h1>
            </div>
            <div className="w-full flex flex-col items-start justify-center">
                <p className="text-[0.29rem] md:text-base text-gray-500 dark:text-gray-600 font-medium">Lorem ipsum dolor sit.</p>
                <p className="text-[0.29rem] md:text-base text-gray-500 dark:text-gray-600 font-medium">Lorem ipsum dolor sit amet.</p>
                <p className="text-[0.29rem] md:text-base text-gray-500 dark:text-gray-600 font-medium">Lorem, ipsum dolor.</p>
            </div>
        </div>
    },
    {
        id: 2,
        content: <CPPCertificate />,
        className: "col-span-1",
        thumbnail: <div className="h-20 md:h-60 flex flex-col justify-around items-center  backdrop-blur-[1.5px] rounded-xl lg:rounded-3xl border-1 md:border-2 border-[#e0e0e0] dark:border-[#202020] cursor-pointer p-2 md:p-0 md:py-5 md:px-8">
            <div className="flex items-center w-full gap-0.5">
                <Image className=" h-full w-8 md:w-24" src={Cpp} />
                <h1 className="text-gray-700 dark:text-gray-500 sirin-stencil-regular text-[8px] md:text-4xl font-bold">C++</h1>
            </div>
            <div className="w-full flex flex-col items-start justify-center">
                <p className="text-[0.29rem] md:text-base text-gray-500 dark:text-gray-600 font-medium">Lorem ipsum dolor sit.</p>
                <p className="text-[0.29rem] md:text-base text-gray-500 dark:text-gray-600 font-medium">Lorem ipsum dolor sit amet.</p>
                <p className="text-[0.29rem] md:text-base text-gray-500 dark:text-gray-600 font-medium">Lorem, ipsum dolor.</p>
            </div>
        </div>
    },
    {
        id: 3,
        content: <WebDevCertificate />,
        className: "col-span-2 row-span-2 ",
        thumbnail: <div className="h-[180px] md:h-[520px] flex justify-around items-center backdrop-blur-[1.5px] rounded-xl lg:rounded-3xl border-1 md:border-2 border-[#e0e0e0] dark:border-[#202020] cursor-pointer p-2 md:p-0 md:py-5 md:px-8">
            <div className="flex flex-col items-start justify-around gap-3 md:gap-10">
                <div className="text-gray-700 dark:text-gray-500 sirin-stencil-regular font-bold text-lg md:text-5xl text-start w-full">Web Development</div>
                <div className="flex items-center justify-between w-full">
                    <Image className="h-full w-8 md:w-24" src={HTML} />
                    <Image className="h-full w-8 md:w-24" src={CSS} />
                    <Image className="h-full w-8 md:w-24" src={JS} />
                    <Image className="h-full w-8 md:w-24 p-0.5 md:p-1.5" src={ts} />
                </div>
                <div className="flex flex-col w-full items-start justify-start">
                    <p className="text-[0.29rem] md:text-base text-gray-500 dark:text-gray-600 font-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi nam officiis libero dignissimos assumenda impedit autem sint consectetur nobis dolor? sit.</p>
                    <p className="text-[0.29rem] md:text-base text-gray-500 dark:text-gray-600 font-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi nam officiis libero dignissimos assumenda impedit autem sint consectetur nobis dolor? sit amet.</p>
                    <p className="text-[0.29rem] md:text-base text-gray-500 dark:text-gray-600 font-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi nam officiis libero dignissimos assumenda impedit autem sint consectetur nobis dolor? .</p>
                </div>
            </div>
        </div>
    },
    {
        id: 4,
        content: <JavaCertificate />,
        className: "col-span-1",
        thumbnail: <div className="h-20 md:h-60 flex flex-col justify-around items-center  backdrop-blur-[1.5px] rounded-xl lg:rounded-3xl border-1 md:border-2 border-[#e0e0e0] dark:border-[#202020] cursor-pointer p-2 md:p-0 md:py-5 md:px-8">
            <div className="flex items-center w-full gap-0.5">
                <Image className=" h-full w-8 md:w-24" src={Java} />
                <h1 className="text-gray-700 dark:text-gray-500 sirin-stencil-regular text-[8px] md:text-4xl font-bold">Java</h1>
            </div>
            <div className="w-full flex flex-col items-start justify-center">
                <p className="text-[0.29rem] md:text-base text-gray-500 dark:text-gray-600 font-medium">Lorem ipsum dolor sit.</p>
                <p className="text-[0.29rem] md:text-base text-gray-500 dark:text-gray-600 font-medium">Lorem ipsum dolor sit amet.</p>
                <p className="text-[0.29rem] md:text-base text-gray-500 dark:text-gray-600 font-medium">Lorem, ipsum dolor.</p>
            </div>
        </div>
    },
    {
        id: 5,
        content: <WebDevCertificate />,
        className: "col-span-1",
        thumbnail: <div className="h-20 md:h-60 flex flex-col justify-around items-center  backdrop-blur-[1.5px] rounded-xl lg:rounded-3xl border-1 md:border-2 border-[#e0e0e0] dark:border-[#202020] cursor-pointer p-2 md:p-0 md:py-5 md:px-8">
            <div className="flex items-center w-full gap-0.5">
                <Image className=" h-full w-8 md:w-24" src={dsa} />
                <h1 className="text-gray-700 dark:text-gray-500 sirin-stencil-regular text-[8px] md:text-4xl font-bold">DSA</h1>
            </div>
            <div className="w-full flex flex-col items-start justify-center">
                <p className="text-[0.29rem] md:text-base text-gray-500 dark:text-gray-600 font-medium">Lorem ipsum dolor sit.</p>
                <p className="text-[0.29rem] md:text-base text-gray-500 dark:text-gray-600 font-medium">Lorem ipsum dolor sit amet.</p>
                <p className="text-[0.29rem] md:text-base text-gray-500 dark:text-gray-600 font-medium">Lorem, ipsum dolor.</p>
            </div>
        </div>
    },
    {
        id: 6,
        content: <WebDevCertificate />,
        className: "col-span-2 row-span-2",
        thumbnail: <div className="h-[180px] md:h-[520px] flex justify-around items-center backdrop-blur-[1.5px] rounded-xl lg:rounded-3xl border-1 md:border-2 border-[#e0e0e0] dark:border-[#202020] cursor-pointer p-2 md:p-0 md:py-5 md:px-8">
            <div className="flex flex-col items-start justify-around gap-3 md:gap-5">
                <div className="text-gray-700 dark:text-gray-500 sirin-stencil-regular font-bold text-lg md:text-5xl text-start w-full">MERN Stack</div>
                <div className="flex items-center justify-between w-full">
                    <Image className="h-full w-8 md:w-24" src={mdb} />
                    <Image className="h-full w-8 md:w-24 hidden dark:block" src={express} />
                    <Image className="h-full w-8 md:w-24 dark:hidden" src={expressb} />
                    <Image className="h-full w-8 md:w-24" src={ReactJS} />
                    <Image className="h-full w-8 md:w-24 p-0.5 md:p-1.5" src={node} />
                </div>
                <div className="flex flex-col w-full items-start justify-center">
                    <p className="text-[0.29rem] md:text-base text-gray-500 dark:text-gray-600 font-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi nam officiis libero dignissimos assumenda impedit autem sint consectetur nobis dolor? sit.</p>
                    <p className="text-[0.29rem] md:text-base text-gray-500 dark:text-gray-600 font-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi nam officiis libero dignissimos assumenda impedit autem sint consectetur nobis dolor? sit amet.</p>
                    <p className="text-[0.29rem] md:text-base text-gray-500 dark:text-gray-600 font-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi nam officiis libero dignissimos assumenda impedit autem sint consectetur nobis dolor? .</p>
                </div>
            </div>
        </div>
    },
    {
        id: 7,
        content: <WebDevCertificate />,
        className: "col-span-2 row-span-1",
        thumbnail: <div className="h-20 md:h-60 flex flex-wrap justify-around items-center backdrop-blur-[1.5px] rounded-xl lg:rounded-3xl border-1 md:border-2 border-[#e0e0e0] dark:border-[#202020] cursor-pointer p-2 md:p-0 md:py-5 md:px-8">
            <div className="flex flex-col items-start justify-around gap-3 md:gap-5 w-full">
                <div className="text-gray-700 dark:text-gray-500 sirin-stencil-regular text-sm md:text-4xl font-bold w-full">React Frameworks</div>
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center justify-evenly w-1/2">
                        <Image className="h-full w-8 md:w-24 hidden dark:block" src={NextJS} />
                        <Image className="h-full w-8 md:w-24 dark:hidden" src={NextJSL} />
                        <Image className="h-full w-8 md:w-24" src={vite} />
                    </div>
                    <div className="flex flex-col justify-around items-end">
                        <p className="text-[0.29rem] md:text-base text-gray-500 dark:text-gray-600 font-normal">Lorem ipsum dolor sit amet.</p>
                        <p className="text-[0.29rem] md:text-base text-gray-500 dark:text-gray-600 font-normal">Lorem ipsum dolor sit amet.</p>
                        <p className="text-[0.29rem] md:text-base text-gray-500 dark:text-gray-600 font-normal">Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
        </div>
    },
    {
        id: 8,
        content: <WebDevCertificate />,
        className: "col-span-2 row-span-1",
        thumbnail: <div className="h-20 md:h-60 flex flex-wrap justify-around items-center backdrop-blur-[1.5px] rounded-xl lg:rounded-3xl border-1 md:border-2 border-[#e0e0e0] dark:border-[#202020] cursor-pointer p-2 md:p-0 md:py-5 md:px-8">
            <div className="flex flex-col items-start justify-around gap-3 md:gap-5 w-full">
                <div className="text-gray-700 dark:text-gray-500 sirin-stencil-regular text-sm md:text-4xl font-bold w-full">CSS Frameworks</div>
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center justify-evenly w-1/2">
                        <Image className="h-full w-8 md:w-24" src={Tcss} />
                        <Image className="h-full w-8 md:w-24" src={BS} />
                    </div>
                    <div className="flex flex-col items-end justify-around">
                        <p className="text-[0.29rem] md:text-base text-gray-500 dark:text-gray-600 font-normal">Lorem ipsum dolor sit amet.</p>
                        <p className="text-[0.29rem] md:text-base text-gray-500 dark:text-gray-600 font-normal">Lorem ipsum dolor sit amet.</p>
                        <p className="text-[0.29rem] md:text-base text-gray-500 dark:text-gray-600 font-normal">Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
        </div>
    },
    {
        id: 9,
        content: <WebDevCertificate />,
        className: "col-span-1",
        thumbnail: <div className="h-20 md:h-60 flex flex-col justify-around items-center  backdrop-blur-[1.5px] rounded-xl lg:rounded-3xl border-1 md:border-2 border-[#e0e0e0] dark:border-[#202020] cursor-pointer p-2 md:p-0 md:py-5 md:px-8">
            <div className="flex items-center w-full gap-0.5">
                <Image className=" h-full w-8 md:w-24 px-1 md:px-2" src={appwrite} />
                <h1 className="text-gray-700 dark:text-gray-500 sirin-stencil-regular text-[8px] md:text-4xl font-bold">Appwrite</h1>
            </div>
            <div className="w-full flex flex-col items-start justify-center">
                <p className="text-[0.29rem] md:text-base text-gray-500 dark:text-gray-600 font-medium">Lorem ipsum dolor sit.</p>
                <p className="text-[0.29rem] md:text-base text-gray-500 dark:text-gray-600 font-medium">Lorem ipsum dolor sit amet.</p>
                <p className="text-[0.29rem] md:text-base text-gray-500 dark:text-gray-600 font-medium">Lorem, ipsum dolor.</p>
            </div>
        </div>
    },
    {
        id: 10,
        content: <WebDevCertificate />,
        className: "col-span-2 row-span-2",
        thumbnail: <div className="h-20 md:h-60 flex flex-wrap justify-around items-center backdrop-blur-[1.5px] rounded-xl lg:rounded-3xl border-1 md:border-2 border-[#e0e0e0] dark:border-[#202020] cursor-pointer p-2 md:p-0 md:py-5 md:px-8">
            <div className="flex flex-col items-start justify-around gap-3 md:gap-5 w-full">
                <div className="text-gray-700 dark:text-gray-500 sirin-stencil-regular text-sm md:text-4xl font-bold w-full">Web Animations</div>
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center justify-evenly w-1/2">
                        <Image className="h-full w-8 md:w-24" src={FM} />
                        <Image className="h-full w-8 md:w-24 rounded-full" src={gsap} />
                    </div>
                    <div className="flex flex-col items-end justify-around">
                        <p className="text-[0.29rem] md:text-base text-gray-500 dark:text-gray-600 font-normal">Lorem ipsum dolor sit amet.</p>
                        <p className="text-[0.29rem] md:text-base text-gray-500 dark:text-gray-600 font-normal">Lorem ipsum dolor sit amet.</p>
                        <p className="text-[0.29rem] md:text-base text-gray-500 dark:text-gray-600 font-normal">Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
        </div>
    },
    {
        id: 11,
        content: <WebDevCertificate />,
        className: "col-span-1",
        thumbnail: <div className="h-20 md:h-60 flex flex-col justify-around items-center  backdrop-blur-[1.5px] rounded-xl lg:rounded-3xl border-1 md:border-2 border-[#e0e0e0] dark:border-[#202020] cursor-pointer p-2 md:p-0 md:py-5 md:px-8">
            <div className="flex items-center w-full gap-0.5">
                <Image className=" h-full w-8 md:w-24 hidden dark:block" src={Chart} />
                <Image className=" h-full w-8 md:w-24 dark:hidden" src={ChartL} />
                <h1 className="text-gray-700 dark:text-gray-500 sirin-stencil-regular text-[8px] md:text-4xl font-bold">Chart.js</h1>
            </div>
            <div className="w-full flex flex-col items-start justify-center">
                <p className="text-[0.29rem] md:text-base text-gray-500 dark:text-gray-600 font-medium">Lorem ipsum dolor sit.</p>
                <p className="text-[0.29rem] md:text-base text-gray-500 dark:text-gray-600 font-medium">Lorem ipsum dolor sit amet.</p>
                <p className="text-[0.29rem] md:text-base text-gray-500 dark:text-gray-600 font-medium">Lorem, ipsum dolor.</p>
            </div>
        </div>
    },
];


