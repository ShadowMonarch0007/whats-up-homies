"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
    IconBrandGithub,
    IconBrandGoogle,
    IconBrandOnlyfans,
} from "@tabler/icons-react";

// Define schema using zod
const schema = z.object({
    firstname: z.string().min(1, "First name is required"),
    lastname: z.string().min(1, "Last name is required"),
    phone: z.string().min(1, "Phone number is required").regex(/^(\+?\d{1,2}[\s-]?)?\d{10}$/, "Phone number must be 10 digits"),
    email: z.string().email("Invalid email address"),
});

export function ConnectFormDemo() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data) => {
        console.log("Form submitted", data);
    };

    return (
        <>
            <div className="flex items-center justify-center mb-10">
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center lg:max-w-[45vw]">
                    Ready to take <span className="text-red-500">your</span> digital
                    presence to the next level?
                </h1>
            </div>
            <div className="max-w-4xl w-full mx-auto rounded-2xl p-4 md:p-8 shadow-input backdrop-blur-[2.5px] border-2 border-[#e0e0e0] dark:border-[#202020]">
                <h2 className="font-bold text-xl lg:text-2xl text-neutral-800 dark:text-neutral-200">
                    Let&apos;s get in touch
                </h2>
                <p className="text-neutral-600 text-sm lg:text-medium mt-2 dark:text-neutral-300">
                    Reach out to me today and let&apos;s discuss how I can help you.
                </p>

                <form className="my-8" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                        <LabelInputContainer>
                            <Label htmlFor="firstname">First name</Label>
                            <Input id="firstname" placeholder="Aditya" type="text" {...register("firstname")} />
                            {errors.firstname && <p className="text-red-500 text-sm">{errors.firstname.message}</p>}
                        </LabelInputContainer>
                        <LabelInputContainer>
                            <Label htmlFor="lastname">Last name</Label>
                            <Input id="lastname" placeholder="Chandra" type="text" {...register("lastname")} />
                            {errors.lastname && <p className="text-red-500 text-sm">{errors.lastname.message}</p>}
                        </LabelInputContainer>
                    </div>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" placeholder="+91 0000000000" type="text" {...register("phone")} />
                        {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                    </LabelInputContainer>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" placeholder="aditya.anil.chandra@gmail.com" type="email" {...register("email")} />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </LabelInputContainer>

                    <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

                    <button
                        className="bg-gradient-to-br relative group/btn from-zinc-100 dark:from-zinc-900 dark:to-zinc-900 to-neutral-100 block bg-zinc-50 dark:bg-zinc-800 w-full text-black dark:text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                        type="submit"
                    >
                        Send this to me &rarr;
                        <BottomGradient />
                    </button>
                </form>
            </div>
        </>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({ children, className }) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
