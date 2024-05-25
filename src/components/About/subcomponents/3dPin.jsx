import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PinContainer } from "@/components/ui/3d-pin";

export function AnimatedPinDemo({ title, name, nlink, description, Logo }) {
  return (
    <div className="w-full flex items-center justify-center ">
      <PinContainer title={title} href={nlink}>
        <Link href={nlink}>
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-[#202020] dark:text-slate-100">
              {name}
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">{description}</span>
            </div>
            <div className="flex items-center justify-center p-5">
              <Image className="rounded-2xl" src={Logo} height={200} width={200} />
            </div>
          </div>
        </Link>
      </PinContainer>
    </div>
  );
}
