import React from "react";
import { Snippet } from "@nextui-org/react";
import Gmail from '@/components/footer/svg/Gmail_icon.svg'

export default async function EmailSnppet() {
    return (
        <div className="p-5">
            <h1 className="text-white font-semibold text-4xl font-sans mb-5">Mail</h1>
            <div className="flex justify-evenly gap-2 group">
                <div className="mail-icon backdrop:blur-lg group-hover:bg-[#e0e0e0] bg-[#e0e0e0] md:bg-[#333333]/80 lg:bg-[#333333]/80 rounded-xl h-11 w-11 py-2 px-[5px]">
                    <a href="https://mail.google.com/mail/u/4/#inbox?compose=CllgCJfnbWjFqccwvCtQDQkztVNGDdTpkldNgpnZXGNdZtKJkPWMDvQQTCLQVrSbSSllfrLbqcL"><svg xmlns="http://www.w3.org/2000/svg" viewBox="52 42 88 66">
                        <path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6" />
                        <path fill="#34a853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15" />
                        <path fill="#fbbc04" d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2" />
                        <path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92" />
                        <path fill="#c5221f" d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2" />
                    </svg></a>                    
                </div>
                <Snippet symbol="" className="emailsnip hover:bg-[#333333]/80 bg-[#333333]/80 text-white text-sm">aditya.anil.chandra@gmail.com</Snippet>
            </div>
        </div>
    );
}

