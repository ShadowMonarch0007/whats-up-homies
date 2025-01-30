import React from "react";
import { GlobeDemo } from "./globeDemo";

export default async function GlobeGrid() {
    return (
        <div>
            <div className="border-[0.05px] backdrop-blur-[2px] dark:border-[#e0e0e0]/50 border-[#202020]/50 rounded-xl overflow-hidden">
                <div className="flex flex-col group hover:translate-x-2.5 transition-all">
                    <div className="w-full h-40 md:h-20 lg:h-52 flex flex-col items-center justify-start p-5 lg:p-14 relative z-0">
                        <p className="uppercase tracking-widest text-[9px] md:text-xs text-center text-red-100">
                            &quot;Design is not just what it looks like and feels like. Design is how it works.&quot;
                        </p>
                        <p className="uppercase tracking-widest text-xs md:text-base text-end text-red-500">-Steve Jobs</p>
                    </div>
                    <div>
                        <GlobeDemo />
                    </div>
                </div>
            </div>
        </div>
    );
}
