import Image from "next/image";
import HeroPage from "./hero/page";
import AboutPage from "./about/page";

export default function Home() {
  return (
    <div className="w-full h-auto overflow-hidden">
      <HeroPage/>
      <AboutPage/>
    </div>
  );
}
