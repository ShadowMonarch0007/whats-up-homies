import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Image from "next/image";
import Swim from "@/components/About/img/swim.gif"
import Code1 from "@/components/About/img/code.gif"
import Code2 from "@/components/About/img/coding2.jpg"
import Sing from "@/components/About/img/singing.jpg"
import Cook from "@/components/About/img/cooking.gif"
import Anime from "@/components/About/img/anime.gif"

export default function BentoGridDemo() {
  return (
    <BentoGrid className="w-[86%] md:w-full mx-auto">
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
    img: <Image className="w-full h-48 rounded-xl" src={Swim}/>,    
  },
  {
    title: "Coding is Life!",
    description: "Developing websites nowadays.",
    img: <div><Image className="w-full h-48 lg:hidden md:hidden xl:hidden 2xl:hidden rounded-xl" src={Code1}/><Image className="w-full h-48 hidden lg:block md:block xl:block 2xl:block rounded-xl" src={Code1}/></div> ,    
  },
  {
    title: "Next in line are my vocals!",
    description: "More than a bathroom singer.",
    img: <Image className="w-full rounded-xl" src={Sing}/>,    
  },
  {
    title: "Anime Nerd",
    description:
      "Anime and Manga keeps me sane.",
    img: <div><Image className="w-full h-48 rounded-xl" src={Anime}/></div> ,    
  },
  {
    title: "Cook sometimes!",
    description: "Wannabe Masterchef.",
    img: <Image className="w-full h-48 rounded-xl" src={Cook}/>,    
  },
];
