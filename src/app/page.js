import Image from "next/image";
import Hambar from "@/components/hambar/hambar";
import HomePage from "@/components/Home/home";

export default function Home() {
  return (
    <div>
      <div className="md:hidden">
        <Hambar />
      </div>
      <div className="p-5 md:p-10">
        <HomePage/>
      </div>
    </div>
  );
}
