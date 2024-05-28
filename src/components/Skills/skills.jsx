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
import FM from "@/components/Skills/svg/framer-motion.svg"
import Aui from "@/components/Skills/svg/acerternity.svg"
import Chart from "@/components/Skills/svg/chartjs.svg"
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
        thumbnail: <div className="bg-[#e0e0e0]/50 dark:bg-[#202020]/50 rounded-xl lg:rounded-3xl border-3 lg:border-5 border-[#e0e0e0] dark:border-[#202020]"><Image className="h-full w-full" src={Fwd} /></div>
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
        thumbnail: <div className="bg-[#e0e0e0]/50 dark:bg-[#202020]/50 rounded-xl lg:rounded-3xl border-3 lg:border-5 border-[#e0e0e0] dark:border-[#202020]"><Image className="h-full w-full" src={BS} /></div>
    },
    {
        id: 8,
        content: <SkeletonFour />,
        className: "col-span-2 row-span-2",
        thumbnail: <div className="flex flex-wrap gap-5 lg:gap-x-24 justify-center items-center bg-[#e0e0e0]/50 dark:bg-[#202020]/50 rounded-xl lg:rounded-3xl border-3 lg:border-5 border-[#e0e0e0] dark:border-[#202020]"><Image className="h-full w-[40%] hidden dark:block" src={NextJS} /><Image className="h-full w-[40%] dark:hidden" src={NextJSL} /><Image className="h-full w-[40%]" src={ReactJS} /><Image className="h-full w-[40%]" src={Tcss} /><Image className="h-full w-[40%] p-4 md:p-5 lg:p-6" src={FM} /></div>
    },
    {
        id: 9,
        content: <SkeletonFour />,
        className: "row-span-2 col-span-1",
        thumbnail: <div className="flex flex-wrap gap-3 justify-evenly bg-[#e0e0e0]/50 dark:bg-[#202020]/50 rounded-xl md:rounded-2xl lg:rounded-3xl border-3 lg:border-5 border-[#e0e0e0] dark:border-[#202020]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class=" h-full w-full rounded-3xl md:rounded-[4rem] lg:rounded-[4rem] p-2 md:p-7 lg:p-5"><rect className="fill-black dark:fill-white" width="256" height="256" fill="none"></rect><line className="stroke-[#e0e0e0] dark:stroke-[#202020]" x1="208" y1="128" x2="128" y2="208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line className="stroke-[#e0e0e0] dark:stroke-[#202020]" x1="192" y1="40" x2="40" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg><svg class="data-[auto=true]:sm:hidden block text-foreground  h-full w-full p-2 md:p-7 lg:p-5 " fill="currentColor" viewBox="0 0 43 43" ><path d="M32 43H11a10.928 10.928 0 01-7.778-3.222A10.928 10.928 0 010 32V11a10.928 10.928 0 013.222-7.778A10.928 10.928 0 0111 0h21a10.929 10.929 0 017.779 3.222A10.927 10.927 0 0143 11v21a10.927 10.927 0 01-3.222 7.778A10.929 10.929 0 0132 43zM11.314 12.293v12.033a6.35 6.35 0 00.87 3.31 6.243 6.243 0 002.422 2.3 7.458 7.458 0 003.595.843 7.474 7.474 0 003.6-.839 6.2 6.2 0 002.418-2.3 6.381 6.381 0 00.869-3.315V12.292h-1.659V24.21a5.149 5.149 0 01-.643 2.578 4.6 4.6 0 01-1.824 1.779 5.668 5.668 0 01-2.759.648 5.646 5.646 0 01-2.756-.648 4.64 4.64 0 01-1.823-1.779 5.116 5.116 0 01-.648-2.578V12.292zm18.6 0v18.175h1.66V12.293z"></path></svg></div>
    },
    {
        id: 10,
        content: <SkeletonFour />,
        className: "row-span-2 col-span-1",
        thumbnail: <div className="flex flex-col gap-y-4 justify-center items-center bg-[#e0e0e0]/50 dark:bg-[#202020]/50 rounded-xl lg:rounded-3xl border-3 lg:border-5 border-[#e0e0e0] dark:border-[#202020] "><Image className="h-full w-full pt-1.5 lg:pt-7" src={Aui} /><Image className="h-full w-full" src={Chart} /></div>
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


