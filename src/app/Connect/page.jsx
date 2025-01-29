import React from "react";
import Hambar from "@/components/hambar/hambar";
import Connects from "@/components/Connect/connect";
export default async function Connect() {
    return (
        <div>
            <div className=" md:hidden">
                <Hambar />
            </div>
            <div className="p-5 md:p-10 md:mx-10">
                <Connects />
            </div>
        </div>
    );
}