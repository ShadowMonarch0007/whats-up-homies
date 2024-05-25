import React from "react";
import HamSheet from "./subcomponents/hamSheet";

export default async function Hambar({text}) {
    return (
        <div className="pb-5 px-5 lg:px-10 flex items-center justify-between">
            <div className="w-12"></div>
            <div className="navtext text-2xl font-bold flex items-center justify-end">
                {text}
            </div>
            <div>
                <HamSheet/>
            </div>
        </div>
    );
}