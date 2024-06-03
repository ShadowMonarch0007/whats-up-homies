import Image from "next/image";
import Hambar from "@/components/hambar/hambar";
import Hero from "@/components/Home/home";

export default function Home() {
  return (
    <div>
      <div className=" lg:hidden md:hidden xl:hidden 2xl:hidden">
        <Hambar />
      </div>
      <div className="p-5 lg:p-10">
        <Hero/>
      </div>
    </div>
  );
}
