import type { ExperienceType } from "../../Helpers/types";
import TimeLine from "./TimeLine";

interface ExperienceCardProps {
  data: ExperienceType;
  index: number;
}

function ExperienceCard({ data, index }: ExperienceCardProps) {
  return (
    <div className="relative flex">
      <TimeLine data={data} index={index} />
      <div className="ml-4 md:ml-10 grow pb-8">
        <div className="bg-surface border border-border p-8 hover:border-accent transition-all duration-300 group hover:-translate-y-1">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
            <div>
              <h3 className="font-card-title text-card-title text-heading mb-1">
                {data.role}
              </h3>
              <p className="font-label-mono text-label-mono text-accent">
                {data.company}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {data.tech_stack?.map((val: string, i: number) => (
                <span
                  className="bg-accent/10 text-accent border border-accent/30 font-label-mono text-[10px] px-2 py-1 uppercase tracking-wider"
                  key={i}
                >
                  {val}
                </span>
              ))}
            </div>
          </div>
          <p className="text-body-main mb-6 opacity-80 max-w-2xl">
            {data.description}
          </p>
          <ul className="space-y-3">
            {data.achievements.map((val: string, i: number) => (
              <li className="flex items-start gap-3" key={i}>
                <span
                  className="material-symbols-outlined text-accent text-sm mt-1"
                  data-icon="terminal"
                >
                  terminal
                </span>
                <span className="text-label-mono text-sm">{val}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;
