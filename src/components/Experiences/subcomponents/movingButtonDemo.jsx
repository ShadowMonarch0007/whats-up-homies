import React from "react";
import Image from "next/image";
import { MovingButton } from "@/components/ui/wobble-card";

export default async function MovingButtonDemo({img, title, note}){
    return(
        <div>
            <MovingButton
                    duration={Math.floor(Math.random() * 10000) + 10000}
                    borderRadius="1.75rem"
                    className="w-full flex-1 items-center justify-center"
                >
                    <div className="p-10 w-full flex gap-5 items-center justify-center">
                        <div className="w-full lg:w-1/2 flex dark:bg-white rounded-xl">
                            <Image src={img}/>
                        </div>
                        <div className="lg:ms-5 flex flex-col gap-2.5">
                            <h1 className="text-start text-lg lg:text-2xl font-light lg:font-medium text-[#202020] dark:text-white">{title}</h1>
                            <p className="text-start text-[10px] leading-4 lg:leading:5 lg:text-base font-extralight lg:font-light text-[#606060] dark:text-[#e0e0e0]">{note}</p>
                        </div>
                    </div>
                </MovingButton>
        </div>
    )
}