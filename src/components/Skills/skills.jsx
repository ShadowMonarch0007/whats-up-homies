import React from "react";
import Image from "next/image";
import LayoutGrid from "../ui/layout-grid";
import Cpp from "@/components/Skills/svg/cpp.svg"
import Java from "@/components/Skills/svg/java.svg"
import Cl from "@/components/Skills/svg/Clang.svg"
import Fwd from "@/components/Skills/svg/Fwebdev.svg"
import HTML from "@/components/Skills/svg/html.svg"
import CSS from "@/components/Skills/svg/css.svg"
import JS from "@/components/Skills/svg/javascript.svg"
import BS from "@/components/Skills/svg/Bootstrap.svg"
import NextJS from "@/components/Skills/svg/next-js.svg"
import NextJSL from "@/components/Skills/svg/next-js-light.svg"
import ReactJS from "@/components/Skills/svg/react.svg"
import Tcss from "@/components/Skills/svg/tailwind.svg"
import FM from "@/components/Skills/svg/framer.svg"
import WebDev from "@/components/Skills/img/WebDev.jpg"

export default async function Skills() {
    return (
        <div>
            <div className="w-full py-10 lg:py-0 xl:py-0 2xl:py-0 ">
                <LayoutGrid cards={cards} />
            </div>
        </div>
    );
}

const SkeletonOne = () => {
    return (
        <div>
            <Image src={WebDev} width={500} height={350}/>
        </div>
    );
};

const SkeletonTwo = () => {
    return (
        <div>
            <Image src={WebDev} width={500} height={350}/>
        </div>
    );
};
const SkeletonThree = () => {
    return (
        <div>
            <Image src={WebDev} width={500} height={350}/>
        </div>
    );
};
const SkeletonFour = () => {
    return (
        <div>
            <Image src={WebDev} width={500} height={350}/>
        </div>
    );
};

const cards = [
    {
        id: 1,
        content: <SkeletonOne />,
        className: "col-span-1",
        thumbnail: <div className="bg-[#e0e0e0]/50 dark:bg-[#202020]/50 rounded-xl lg:rounded-3xl border-3 lg:border-5 border-[#e0e0e0] dark:border-[#202020]"><Image className="h-full w-full" src={Cpp} /></div>
    },
    {
        id: 2,
        content: <SkeletonTwo />,
        className: "col-span-1",
        thumbnail: <div className="bg-[#e0e0e0]/50 dark:bg-[#202020]/50 rounded-xl lg:rounded-3xl border-3 lg:border-5 border-[#e0e0e0] dark:border-[#202020]"><Image className="h-full w-full" src={Java} /></div>
    },
    {
        id: 3,
        content: <SkeletonFour />,
        className: "col-span-2 row-span-2 ",
        thumbnail: <div className="bg-[#e0e0e0]/50 dark:bg-[#202020]/50 rounded-xl lg:rounded-3xl border-3 lg:border-5 border-[#e0e0e0] dark:border-[#202020]"><Image className="h-full w-full my-2 lg:my-6" src={Fwd} /></div>
    },
    {
        id: 4,
        content: <SkeletonOne />,
        className: "col-span-1",
        thumbnail: <div className="bg-[#e0e0e0]/50 dark:bg-[#202020]/50 rounded-xl lg:rounded-3xl border-3 lg:border-5 border-[#e0e0e0] dark:border-[#202020]"><Image className="h-full w-full" src={HTML} /></div>
    },
    {
        id: 5,
        content: <SkeletonOne />,
        className: "col-span-1",
        thumbnail: <div className="bg-[#e0e0e0]/50 dark:bg-[#202020]/50 rounded-xl lg:rounded-3xl border-3 lg:border-5 border-[#e0e0e0] dark:border-[#202020]"><Image className="h-full w-full" src={Cl} /></div>
    },
    {
        id: 6,
        content: <SkeletonFour />,
        className: "col-span-3",
        thumbnail: <div className="flex gap-5 lg:gap-24 justify-center items-center bg-[#e0e0e0]/50 dark:bg-[#202020]/50 rounded-xl lg:rounded-3xl border-3 lg:border-5 border-[#e0e0e0] dark:border-[#202020]"><Image className="h-full w-1/4" src={HTML} /><Image className="h-full w-1/4" src={CSS} /><Image className="h-full w-1/4" src={JS} /></div>
    },
    {
        id: 7,
        content: <SkeletonFour />,
        className: "col-span-1",
        thumbnail: <div className="bg-[#e0e0e0]/50 dark:bg-[#202020]/50 rounded-xl lg:rounded-3xl border-3 lg:border-5 border-[#e0e0e0] dark:border-[#202020]"><Image className="h-full w-full my-1 lg:my-5" src={BS} /></div>
    },
    {
        id: 8,
        content: <SkeletonFour />,
        className: "col-span-2 row-span-2",
        thumbnail: <div className="flex flex-wrap gap-5 lg:gap-x-24 justify-center items-center bg-[#e0e0e0]/50 dark:bg-[#202020]/50 rounded-xl lg:rounded-3xl border-3 lg:border-5 border-[#e0e0e0] dark:border-[#202020]"><Image className="h-full w-[40%] hidden dark:block" src={NextJS} /><Image className="h-full w-[40%] dark:hidden" src={NextJSL} /><Image className="h-full w-[40%]" src={ReactJS} /><Image className="h-full w-[40%]" src={Tcss} /><Image className="h-full w-[40%]" src={FM} /></div>
    },
    {
        id: 9,
        content: <SkeletonFour />,
        className: "col-span-2",
        thumbnail: <div className="flex flex-wrap gap-5 lg:gap-x-24 justify-center items-center bg-[#e0e0e0]/50 dark:bg-[#202020]/50 rounded-xl lg:rounded-3xl border-3 lg:border-5 border-[#e0e0e0] dark:border-[#202020]"><Image className="h-full w-[38.5%] md:w-[39.5%] lg:w-[32.5%]" src={HTML} /><Image className="h-full w-[38.5%] md:w-[39.5%] lg:w-[32.5%]" src={HTML} /></div>
    },
    {
        id: 10,
        content: <SkeletonFour />,
        className: "col-span-2",
        thumbnail: <div className="flex gap-5 lg:gap-24 justify-center items-center bg-[#e0e0e0]/50 dark:bg-[#202020]/50 rounded-xl lg:rounded-3xl border-3 lg:border-5 border-[#e0e0e0] dark:border-[#202020] "><Image className="h-full w-[38.5%] md:w-[39.5%] lg:w-[32.5%]" src={HTML} /><Image className="h-full w-[38.5%] md:w-[39.5%] lg:w-[32.5%]" src={HTML} /></div>
    },
    // {
    //     id: 11,
    //     content: <SkeletonFour />,
    //     className: "col-span-2",
    //     thumbnail: <div className="flex gap-5 lg:gap-24 justify-center items-center bg-[#e0e0e0]/50 dark:bg-[#202020]/50 rounded-xl lg:rounded-3xl border-3 lg:border-5 border-[#e0e0e0] dark:border-[#202020] "><Image className="h-full w-[41%] md:w-[47%] lg:w-[41%]" src={HTML} /><Image className="h-full w-[41%] md:w-[47%] lg:w-[41%]" src={HTML} /></div>
    // },
    // {
    //     id: 12,
    //     content: <SkeletonFour />,
    //     className: "col-span-1",
    //     thumbnail: <div className="bg-[#e0e0e0]/50 dark:bg-[#202020]/50 rounded-xl lg:rounded-3xl border-3 lg:border-5 border-[#e0e0e0] dark:border-[#202020]"><Image className="h-full w-full" src={HTML} /></div>
    // },
    // {
    //     id: 13,
    //     content: <SkeletonFour />,
    //     className: "col-span-1",
    //     thumbnail: <div className="bg-[#e0e0e0]/50 dark:bg-[#202020]/50 rounded-xl lg:rounded-3xl border-3 lg:border-5 border-[#e0e0e0] dark:border-[#202020]"><Image className="h-full w-full" src={HTML} /></div>
    // },
    
];


