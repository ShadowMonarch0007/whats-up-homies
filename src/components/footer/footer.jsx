import React from "react";
import Image from "next/image";
import FollowMe from "./subcomponents/followme";
import EmailSnppet from "./subcomponents/emailSnippet";
import { WavyBackground } from "../ui/wavy-background";

export default async function Footer() {
    return (
        <div className="overflow-hidden">
            <WavyBackground>
                <div className="flex flex-col gap-5 lg:gap-10">
                    <div className="flex flex-col lg:flex-row items-center justify-evenly px-5 lg:px-16">
                        <div className="w-[380px] flex flex-col items-start justify-center rounded-xl">
                            <FollowMe />
                        </div>
                        <div className="w-[380px] flex flex-col items-start justify-center rounded-xl">
                            <EmailSnppet />
                        </div>
                    </div>
                    <div className="text-[#202020] dark:text-[#e0e0e0] font-semibold flex text-center align-middle justify-center">Copyright © 2024 - All rights reserved</div>
                </div>
            </WavyBackground>
        </div>
    );
}

