import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Image from "next/image";
import Swim from "@/components/About/img/Swimming.avif"
import Code1 from "@/components/About/img/coding.jpg"
import Code2 from "@/components/About/img/coding2.jpg"
import Sing from "@/components/About/img/singing.jpg"
import Cook from "@/components/About/img/cooking.jpg"
import Anime from "@/components/About/img/anime.gif"

export default function BentoGridDemo() {
  return (
    <BentoGrid className="w-[86%] lg:w-full md:w-full xl:w-full 2xl:w-full mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          img={item.img}
          className={i === 1 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "Love to Swim!",
    description: "Member of college swimming team.",
    img: <Image className="w-full rounded-xl" src={Swim}/>,    
  },
  {
    title: "Coding is Life!",
    description: "Developing websites nowadays.",
    img: <div><Image className="w-full lg:hidden md:hidden xl:hidden 2xl:hidden rounded-xl" src={Code1}/><Image className="w-full hidden lg:block md:block xl:block 2xl:block rounded-xl" src={Code2}/></div> ,    
  },
  {
    title: "Next in line are my vocals!",
    description: "A decent Singer.",
    img: <Image className="w-full rounded-xl" src={Sing}/>,    
  },
  {
    title: "Anime Nerd",
    description:
      "Anime and Manga keeps me sane.",
    img: <div><Image className="w-full rounded-xl" src={Anime}/></div> ,    
  },
  {
    title: "Cook sometimes!",
    description: "To fulfill my cravings.",
    img: <Image className="w-full rounded-xl" src={Cook}/>,    
  },
];
