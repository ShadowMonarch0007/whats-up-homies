import React from "react";
import mobi32 from "@/components/Experiences/img/32mobi.webp";
import MovingButtonDemo from "./subcomponents/movingButtonDemo";

export default async function MyExperiences() {
    return (
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="col-span-1 row-span-1"><MovingButtonDemo img={mobi32} title={"Front-end SDE Intern"} note={"Assisted remotely in the development of web-based platforms using Next.js & Tailwind CSS enhancing interactivity."} /></div>
            <div className="col-span-1 row-span-1"><MovingButtonDemo img={mobi32} title={"Front-end SDE Intern"} note={"Assisted remotely in the development of web-based platforms using Next.js & Tailwind CSS enhancing interactivity."} /></div>
        </div>
    );
}

