import React from "react";
import TechStack from "./techStack";

export default async function Grid() {
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 lg:gap-10">
                <div className="lg:col-span-3 lg:row-span-2"><TechStack/></div>
                <div className="lg:col-span-2 lg:row-span-2">
                    
                </div>
            </div>
        </div>
    );
}