import type { SkillType } from "../../Helpers/types";

interface SkillsCardProps {
  data: SkillType;
}

function SkillsCard({ data }: SkillsCardProps) {
  return (
    <div className="group bg-surface border border-border p-8 transition-all duration-200 hover:-translate-y-1 hover:border-accent">
      <div className="flex justify-between items-start mb-12">
        <span className="material-symbols-outlined text-accent text-5xl"></span>
        <span className="font-label-mono text-xs bg-accent/10 text-accent px-3 py-1 uppercase tracking-widest">
          {data.exp} Years
        </span>
      </div>
      <h3 className="font-card-title text-card-title text-heading mb-4">
        {data.name}
      </h3>
      <p className="text-body text-body-main opacity-80 mb-6">
        {data.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {data.sub_tech.map((val) => (
          <span className="font-label-mono text-[10px] text-muted border border-border px-2 py-0.5 uppercase">
            {val}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillsCard;
