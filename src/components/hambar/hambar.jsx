import React from "react";
import HamSheet from "./subcomponents/hamSheet";

export default async function Hambar({text}) {
    return (
        <div className="fixed z-[52] top-0 px-5 lg:px-10 flex items-center justify-between">
            <div className="absolute top-2.5 left-5">
                <HamSheet/>
            </div>
        </div>
    );
}