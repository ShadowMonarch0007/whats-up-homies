"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/ui/label";
import { Input, Textarea } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

// Define schema using zod
const schema = z.object({
    firstname: z.string().min(1, "First name is required"),
    lastname: z.string().min(1, "Last name is required"),
    phone: z
        .string()
        .min(1, "Phone number is required")
        .regex(
            /^(\+?\d{1,2}[\s-]?)?\d{10}$/,
            "Phone number must be 10 digits"
        ),
    email: z.string().email("Invalid email address"),
    help: z.string().min(1, "This field is required"),
});

export function ConnectFormDemo() {
    const { toast } = useToast();
    const [mobileNumber, setMobileNumber] = useState("");
    const [fname, setfName] = useState("");
    const [lname, setlName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
    });

    const onSubmit = async () => {
        try {
            const response = await axios.post(`/api/message`, {
                mobileNumber,
                fname,
                lname,
                email,
                message,
            });
            console.log(response.data);
            toast({
                title: "Message Sent",
                description: "Thank You for contacting me.",
                variant: "default",
            });
        } catch (error) {
            console.error("Error contacting:", error);
            toast({
                title: "Message not sent",
                description: "There must be some server error.",
                variant: "destructive",
                action: <ToastAction altText="Try again">Try again</ToastAction>,
            });
        }
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

                <form className="my-8" onSubmit={(e) => {
                    handleSubmit(onSubmit)(e);
                }}>
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                        <LabelInputContainer>
                            <Label htmlFor="firstname">First name</Label>
                            <Input
                                id="firstname"
                                placeholder="Enter your First Name"
                                type="text"
                                {...register("firstname")}
                                value={fname}
                                onChange={(e) => setfName(e.target.value)}
                            />
                            {errors.firstname && (
                                <p className="text-red-500 text-sm">{errors.firstname.message}</p>
                            )}
                        </LabelInputContainer>
                        <LabelInputContainer>
                            <Label htmlFor="lastname">Last name</Label>
                            <Input
                                id="lastname"
                                placeholder="Enter your Last Name"
                                type="text"
                                {...register("lastname")}
                                value={lname}
                                onChange={(e) => setlName(e.target.value)}
                            />
                            {errors.lastname && (
                                <p className="text-red-500 text-sm">{errors.lastname.message}</p>
                            )}
                        </LabelInputContainer>
                    </div>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                            id="phone"
                            placeholder="Enter your Phone Number"
                            type="text"
                            {...register("phone")}
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value)}
                        />
                        {errors.phone && (
                            <p className="text-red-500 text-sm">{errors.phone.message}</p>
                        )}
                    </LabelInputContainer>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                            id="email"
                            placeholder="Enter your Email"
                            type="email"
                            {...register("email")}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm">{errors.email.message}</p>
                        )}
                    </LabelInputContainer>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="help">How can I help you?</Label>
                        <Textarea
                            id="help"
                            placeholder="Enter"
                            type="text"
                            {...register("help")}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        {errors.help && (
                            <p className="text-red-500 text-sm">{errors.help.message}</p>
                        )}
                    </LabelInputContainer>

                    <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

                    <button
                        type="submit"
                        className="bg-gradient-to-br relative group/btn from-zinc-300 dark:from-zinc-900 dark:to-neutral-900 to-neutral-300 block bg-zinc-200 dark:bg-zinc-800 w-full text-[#202020] dark:text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
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
