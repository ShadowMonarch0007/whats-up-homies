import React from "react";
import Image from "next/image";
import ThemeButton from "./subcomponents/themeButton";

export default async function Headers() {
    return(
        <div className="flex items-center justify-between my-5 mx-5 lg:mx-10">
            <div>

            </div>
            <div>
                <ThemeButton/>
            </div>
        </div>
    );
}