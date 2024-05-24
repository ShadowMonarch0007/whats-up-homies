import React from "react";
import Image from "next/image";
import ThemeButton from "./subcomponents/themeButton";

export default async function Headers() {
    return(
        <div className="flex items-center justify-between py-5 px-5 lg:px-10">
            <div>

            </div>
            <div>
                <ThemeButton/>
            </div>
        </div>
    );
}