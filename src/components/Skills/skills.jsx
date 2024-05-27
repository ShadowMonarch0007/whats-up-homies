import React from "react";
import Image from "next/image";
import LayoutGrid from "../ui/layout-grid";
import HTML from "@/components/Skills/svg/html.svg"
import NextJS from "@/components/Skills/svg/next-js.svg"
import ReactJS from "@/components/Skills/svg/react.svg"
import WebDev from "@/components/Skills/img/WebDev.jpg"
import { BackgroundGradient } from "../ui/background-gradient";

export default async function Skills() {
    return (
        <div>
            <div className="w-full">
                <LayoutGrid cards={cards} />
            </div>
        </div>
    );
}

const SkeletonOne = () => {
    return (
        <div>
            <p className="font-bold text-4xl text-white">House in the woods</p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                A serene and tranquil retreat, this house in the woods offers a peaceful
                escape from the hustle and bustle of city life.
            </p>
        </div>
    );
};

const SkeletonTwo = () => {
    return (
        <div>
            <p className="font-bold text-4xl text-white">House above the clouds</p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                Perched high above the world, this house offers breathtaking views and a
                unique living experience. It&apos;s a place where the sky meets home,
                and tranquility is a way of life.
            </p>
        </div>
    );
};
const SkeletonThree = () => {
    return (
        <div>
            <p className="font-bold text-4xl text-white">Greens all over</p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
                perfect place to relax, unwind, and enjoy life.
            </p>
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
        thumbnail: <Image className="h-full w-full" src={HTML} />
    },
    {
        id: 2,
        content: <SkeletonTwo />,
        className: "col-span-1",
        thumbnail: <Image className="h-full w-full" src={HTML} />
    },
    {
        id: 3,
        content: <SkeletonThree />,
        className: "col-span-2 row-span-2 ",
        thumbnail: <BackgroundGradient><Image className="h-full w-full" src={HTML} /></BackgroundGradient>
    },
    {
        id: 4,
        content: <SkeletonFour />,
        className: "col-span-1",
        thumbnail: <Image className="h-full w-full" src={HTML} />
    },
    {
        id: 5,
        content: <SkeletonFour />,
        className: "col-span-1",
        thumbnail: <Image className="h-full w-full" src={HTML} />
    },
    {
        id: 6,
        content: <SkeletonFour />,
        className: "col-span-3",
        thumbnail: <div className="flex gap-5 lg:gap-24 justify-center items-center "><Image className="h-full w-1/4" src={HTML} /><Image className="h-full w-1/4" src={HTML} /><Image className="h-full w-1/4" src={HTML} /></div>
    },
    {
        id: 7,
        content: <SkeletonFour />,
        className: "col-span-1",
        thumbnail: <Image className="h-full w-full" src={HTML} />
    },
    {
        id: 8,
        content: <SkeletonFour />,
        className: "col-span-2 row-span-2",
        thumbnail: <div className="flex flex-wrap gap-5 lg:gap-x-24 justify-center items-center "><Image className="h-full w-[40%]" src={HTML} /><Image className="h-full w-[40%]" src={HTML} /><Image className="h-full w-[40%]" src={HTML} /><Image className="h-full w-[40%]" src={HTML} /></div>
    },
    {
        id: 9,
        content: <SkeletonFour />,
        className: "col-span-2 row-span-2",
        thumbnail: <div className="flex flex-wrap gap-5 lg:gap-x-24 justify-center items-center "><Image className="h-full w-[40%]" src={HTML} /><Image className="h-full w-[40%]" src={HTML} /><Image className="h-full w-[40%]" src={HTML} /><Image className="h-full w-[40%]" src={HTML} /></div>
    },
    {
        id: 10,
        content: <SkeletonFour />,
        className: "col-span-1",
        thumbnail: <Image className="h-full w-full" src={HTML} />
    },
    {
        id: 11,
        content: <SkeletonFour />,
        className: "col-span-1",
        thumbnail: <Image className="h-full w-full" src={HTML} />
    },
    {
        id: 12,
        content: <SkeletonFour />,
        className: "col-span-2",
        thumbnail: <div className="flex gap-5 lg:gap-24 justify-center items-center "><Image className="h-full w-[40%]" src={HTML} /><Image className="h-full w-[40%]" src={HTML} /></div>
    },
];


