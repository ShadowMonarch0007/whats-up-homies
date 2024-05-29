import React from "react";
import Hambar from "@/components/hambar/hambar";
import Projects from "@/components/Projects/Project";
export default async function Page() {
    return (
        <div>
            <div>
                <div className=" lg:hidden md:hidden xl:hidden 2xl:hidden">
                    <Hambar />
                </div>
                <div className="p-5 lg:p-10">
                    <Projects/>
                </div>
            </div>
        </div>
    );
}