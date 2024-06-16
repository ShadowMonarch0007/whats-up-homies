import "server-only"
import React from "react";
import Image from "next/image";
import ThemeButton from "./subcomponents/themeButton";
import Link from "next/link";
import logo from '@/components/header/svg/lgd.png'
import logoL from '@/components/header/svg/lglight.png'
import Navbar from "../navbar/navbar";

export default async function Headers() {
    return (
        <div className="fixed w-full top-0 left-0 z-[51] backdrop-blur-lg flex items-center justify-between pt-2.5 pb-2.5 px-5 lg:px-10">
            <div className="w-[30.5%] lg:hidden md:hidden xl:hidden 2xl:hidden">

            </div>
            <Link href="./">
                <div>
                    <Image className="h-12 w-12 hidden dark:block" src={logo} />
                    <Image className="h-12 w-12 dark:hidden" src={logoL} />
                </div>
            </Link>
            <div><Navbar /></div>
            <div>
                <ThemeButton />
            </div>
        </div>
    );
}