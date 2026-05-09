import Footer from "../Footer/Footer";
import AboutMeSection from "./AboutMeSection";
import EndContainer from "./EndContainer";
import MainSection from "./MainSection";
import ProjectsSection from "./ProjectsSection";

function Hero() {
  return (
    <div className="bg-[#141313]">
      <MainSection />
      <AboutMeSection />
      <ProjectsSection />
      <EndContainer />
      <Footer />
    </div>
  );
}

export default Hero;
