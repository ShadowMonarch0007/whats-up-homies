import React from "react";
import Hambar from "@/components/hambar/hambar";
import Connects from "@/components/Connect/connect";
export default async function Connect() {
    return (
        <div>
            <div className=" lg:hidden md:hidden xl:hidden 2xl:hidden">
                <Hambar />
            </div>
            <div className="p-5 lg:p-10 lg:mx-10">
                <Connects />
            </div>
        </div>
    );
}