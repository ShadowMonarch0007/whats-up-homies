import React from "react";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import Grid from "./subcomponents/grid";
import Hero from "./subcomponents/Hero";

export default async function HomePage() {
    return (
        <div>
            <Hero/>
            <Grid/>
        </div>
    );
}