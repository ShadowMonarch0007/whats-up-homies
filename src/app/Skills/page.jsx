import React from "react";
import Hambar from "@/components/hambar/hambar";
import Skills from "@/components/Skills/skills";
export default async function Skill(){
    return(
        <div>
            <div className=" lg:hidden md:hidden xl:hidden 2xl:hidden">
                <Hambar />
            </div>
            <div className="p-5 lg:p-10">
                <Skills/>
            </div>
        </div>
    );
}