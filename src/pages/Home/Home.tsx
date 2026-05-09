import AboutMeSection from "../../components/Hero/AboutMeSection";
import EndContainer from "../../components/Hero/EndContainer";
import MainSection from "../../components/Hero/MainSection";
import ProjectsSection from "../../components/Hero/ProjectsSection";
import NavWithFooter from "../NavWithFooter/NavWithFooter";

function Home() {
  return (
    <NavWithFooter>
      <div className="bg-[#141313]">
        <MainSection />
        <AboutMeSection />
        <ProjectsSection />
        <EndContainer />
      </div>
    </NavWithFooter>
  );
}

export default Home;
