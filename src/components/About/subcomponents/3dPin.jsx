import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PinContainer } from "@/components/ui/3d-pin";
import { Component } from 'lucide-react';

export function AnimatedPinDemo({ title, name, nlink, description1, description2, description3, Logo, Cover }) {
  return (
    <div className="w-full md:w-[40%] lg:w-full xl:w-full 2xl:w-full flex items-center justify-center ">
      <PinContainer title={title} href={nlink}>
        <Link href={nlink}>
          <div className="flex flex-col basis-full justify-between p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-64 h-64 md:w-80 md:h-80">
            <div className="">
              <Image src={Cover} className="w-full absolute -z-10 top-0 left-0 right-0 scale-125 opacity-50" />
              <Image src={Logo} className="rounded-lg w-20 md:w-24 bg-white/60 backdrop-blur-lg translate-y-[50%]" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="w-full flex items-center justify-end -translate-y-[50%]"><h1 className="max-w-xs !pb-2 !m-0 font-bold text-sm md:text-lg text-[#202020] dark:text-slate-100">{name}</h1></div>
              <div className="text-[11px] md:text-sm !m-0 !p-0 font-normal text-slate-500 flex flex-col items-center gap-0.5 md:gap-1">
                <div className="flex items-center justify-between"><Component color="#FFD700" className="size-3 md:size-5" /><div className="w-[90%]">{description1}</div></div>
                <div className="flex items-center justify-between"><Component color="#FFD700" className="size-3 md:size-5" /><div className="w-[90%]">{description2}</div></div>
                <div className="flex items-center justify-between"><Component color="#FFD700" className="size-3 md:size-5" /><div className="w-[90%]">{description3}</div></div>
              </div>
            </div>
          </div>
        </Link>
      </PinContainer>
    </div>
  );
}
