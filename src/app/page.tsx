
import HeroPage from "./hero/page";
import AboutPage from "./about/page";
import ServicesPage from "./services/page";
import ChoosePage from "./choose/page";
import ProjectPage from "./project/page";
import TestimonialPage from "./testimonial/page";
import ContactPage from "./contact/page";


export default function Home() {
  return (
    <div className="w-full h-auto overflow-hidden">
      <HeroPage/>
      <AboutPage/>
      <ServicesPage/>
      <ChoosePage/>
      <ProjectPage/>
      <TestimonialPage/>
      <ContactPage/>
    </div>
  );
}
