import React from "react";
import Hambar from "@/components/hambar/hambar";
import MyExperiences from "@/components/Experiences/experiences";
export default async function Experience(){
    return(
        <div>
            <div className="md:hidden">
                <Hambar />
            </div>
            <div className="p-5 md:p-10 md:mx-10">
                <MyExperiences/>
            </div>
        </div>
    );
}