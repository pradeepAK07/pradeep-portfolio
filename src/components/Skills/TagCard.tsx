import type { EcoSystemType } from "../../Helpers/types";

interface TagCardProps {
  data: EcoSystemType;
}

function TagCard({ data }: TagCardProps) {
  return (
    <div>
      <h4 className="font-label-mono text-xs text-muted uppercase mb-6 tracking-widest">
        {data.label}
      </h4>
      <div className="flex flex-wrap gap-3">
        {data.techs.map((val) => (
          <span className="font-label-mono text-xs text-body border border-border px-3 py-1.5 bg-bg hover:text-accent hover:border-accent transition-colors cursor-default">
            {val}
          </span>
        ))}
      </div>
    </div>
  );
}

export default TagCard;
