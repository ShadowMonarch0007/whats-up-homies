import React from "react";
import TechStack from "./techStack";
import { Education } from "./aboutStack";
import Experience from "./expStack";

export default async function Grid() {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-5 lg:gap-10">
                <div className="md:col-span-3 md:row-span-2 lg:col-span-3 lg:row-span-2"><TechStack/></div>
                <div className="md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2 border-[0.05px] backdrop-blur-[2px] dark:border-[#e0e0e0]/50 border-[#202020]/50 rounded-xl overflow-hidden">
                    <Education/>
                </div>
                <div className="md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-1"></div>
                <div className="md:col-span-3 md:row-span-3 lg:col-span-3 lg:row-span-3"><Experience/></div>
                <div className="md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-1"></div>
            </div>
        </div>
    );
}