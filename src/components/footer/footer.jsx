import React from "react";
import Image from "next/image";
import pfp from "@/components/footer/img/pfp.jpg";
import FollowMe from "./subcomponents/followme";
import EmailSnppet from "./subcomponents/emailSnippet";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Vortex } from "../ui/vortex";

export default async function Footer() {
    return (
        <div className="p-5 lg:p-10 bg-black">
            
            <div className="text-[#e0e0e0] flex text-center align-middle justify-center pb-10">Copyright © 2024 - All rights reserved</div>
            <div className="flex flex-wrap lg:flex-nowrap justify-evenly">
                <div className="logo flex items-center justify-center">
                    <BackgroundGradient><Image className="rounded-3xl p-0.5" src={pfp} height={250} width={250} /></BackgroundGradient>
                    
                </div>
                <div className="flex items-center justify-center w-1/3 text-[#e0e0e0] font-medium text-xl leading-7">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, neque eius facilis vel dolorem cupiditate maxime corporis. Ad alias modi iste? Consequatur numquam quibusdam pariatur.
                </div>
                <div className="flex flex-col items-start justify-center">
                    <FollowMe />
                    <EmailSnppet />
                </div>
            </div>
        </div>
    );
}

