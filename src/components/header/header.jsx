import React from "react";
import Image from "next/image";
import ThemeButton from "./subcomponents/themeButton";
import logo from '@/components/header/svg/adityalogo.svg'

export default async function Headers() {
    return(
        <div className="flex items-center justify-between py-5 px-5 lg:px-10">
            <div>
                <Image className="dark:bg-white rounded-lg" src={logo} height={48} width={48}/>
            </div>
            <div>
                <ThemeButton/>
            </div>
        </div>
    );
}