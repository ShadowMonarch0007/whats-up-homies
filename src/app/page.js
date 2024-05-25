import Image from "next/image";
import Hambar from "@/components/hambar/hambar";

export default function Home() {
  return (
    <div className=" lg:hidden md:hidden xl:hidden 2xl:hidden">
      <div><Hambar/></div>
    </div>
  );
}
