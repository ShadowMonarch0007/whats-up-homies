import React from "react";
import Link from "next/link";
import NavMenu from "./subcomponents/navmenu";

export default async function Navbar(){
    return(
        <div className="hidden lg:block md:block xl:block 2xl:block">
            <NavMenu/>
        </div>
    );
} 