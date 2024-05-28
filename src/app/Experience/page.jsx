import React from "react";
import Hambar from "@/components/hambar/hambar";
import MyExperiences from "@/components/Experiences/experiences";
export default async function Experience(){
    return(
        <div>
            <div className=" lg:hidden md:hidden xl:hidden 2xl:hidden">
                <Hambar />
            </div>
            <div className="p-5 lg:p-10 lg:mx-10">
                <MyExperiences/>
            </div>
        </div>
    );
}