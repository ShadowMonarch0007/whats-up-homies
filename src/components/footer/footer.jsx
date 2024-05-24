import React from "react";
import Image from "next/image";
import pfp from "@/components/footer/img/pfp.jpg";
import FollowMe from "./subcomponents/followme";
import EmailSnppet from "./subcomponents/emailSnippet";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { WavyBackground } from "../ui/wavy-background";
import { Vortex } from "../ui/vortex";

export default async function Footer() {
    return (
        <div className="overflow-hidden">
            {/* <Vortex> */}
            <WavyBackground >
                <div className="flex flex-col gap-5 lg:gap-10">
                    <div className="flex flex-col lg:flex-row items-center justify-evenly px-5 lg:px-16">
                        {/* <div className="logo flex items-center justify-center">
                        <BackgroundGradient><Image className="rounded-3xl p-0.5" src={pfp} height={200} width={200} /></BackgroundGradient>

                    </div> */}
                        {/* <div className="w-[380px] flex flex-col items-start justify-center backdrop-blur-lg rounded-xl shadow-fm shadow-[#e0e0e0]/50"> */}
                        <div className="w-[380px] flex flex-col items-start justify-center rounded-xl">
                            <FollowMe />
                        </div>
                        {/* <div className="w-[380px] flex flex-col items-start justify-center backdrop-blur-lg rounded-xl shadow-fm shadow-[#e0e0e0]/50"> */}
                        <div className="w-[380px] flex flex-col items-start justify-center rounded-xl">
                            <EmailSnppet />
                        </div>
                    </div>
                    <div className="text-[#e0e0e0] flex text-center align-middle justify-center">Copyright © 2024 - All rights reserved</div>
                </div>
            </WavyBackground>
            {/* </Vortex> */}
        </div>
    );
}

