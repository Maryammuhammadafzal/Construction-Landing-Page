import Image from "next/image";
import HeroPage from "./hero/page";
import AboutPage from "./about/page";
import ServicesPage from "./services/page";
import ChoosePage from "./choose/page";
import ProjectPage from "./project/page";

export default function Home() {
  return (
    <div className="w-full h-auto overflow-hidden">
      <HeroPage/>
      <AboutPage/>
      <ServicesPage/>
      <ChoosePage/>
      <ProjectPage/>
    </div>
  );
}
