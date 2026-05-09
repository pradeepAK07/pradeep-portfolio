import { ProjectsSectionContainer } from "../../index.styles";
import Card from "./Card";

function ProjectsSection() {
  return (
    <ProjectsSectionContainer className="px-12! py-24! w-6xl">
      <div className="flex items-end justify-between w-full">
        <h2 className="font-bold text-amber-50 dmSherif text-5xl">
          Featured Projects
        </h2>
        <p className="jetBrains cursor-pointer text-[#5A5A5A] hover:text-[#e39c43]  transition-colors">
          View All →
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {[0, 1, 3].map((_, i) => (
          <Card key={i} />
        ))}
      </div>
    </ProjectsSectionContainer>
  );
}

export default ProjectsSection;
