import "server-only"
import React from "react";
import Image from "next/image";
import ThemeButton from "./subcomponents/themeButton";
import Link from "next/link";
import logo from '@/components/header/svg/adityalogo.svg'
import Navbar from "../navbar/navbar";

export default async function Headers() {
    return (
        <div className="flex items-center justify-between pt-5 pb-2.5 px-5 lg:px-10">
            <div className="w-[30%] lg:hidden md:hidden xl:hidden 2xl:hidden">

            </div>
            <Link href="./">
                <div>
                    <Image className="dark:bg-white rounded-lg" src={logo} height={48} width={48} />
                </div>
            </Link>
            <div><Navbar /></div>
            <div>
                <ThemeButton />
            </div>
        </div>
    );
}