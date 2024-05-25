import React from "react";
import Hambar from "@/components/hambar/hambar";
import Abouts from "@/components/About/about";
export default async function About() {
    return (
        <div>
            <div className=" lg:hidden md:hidden xl:hidden 2xl:hidden">
                <Hambar />
            </div>
            <div className="p-5 lg:p-10">
                <Abouts/>
            </div>
        </div>
    );
}