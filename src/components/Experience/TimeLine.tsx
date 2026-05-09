import { EXPERIENCE_DATA } from "../../Helpers/constant";
import type { ExperienceType } from "../../Helpers/types";

interface Props {
  data: ExperienceType;
  index: number;
}

function TimeLine({ data, index }: Props) {
  return (
    <>
      <div className="w-24 md:w-32 shrink-0 pt-2">
        <span className="font-label-mono text-label-mono text-muted sticky top-24">
          {data.period}
        </span>
      </div>
      <div className="relative flex flex-col items-center px-4">
        <div className="w-3 h-3 bg-accent rounded-full ring-4 ring-accent/20 z-10"></div>
        {EXPERIENCE_DATA.length - 1 !== index && (
          <div className="absolute top-3 bottom-0 w-px bg-[repeating-linear-gradient(to_bottom,#E8A045_0px,#E8A045_4px,transparent_4px,transparent_10px)]" />
        )}
      </div>
    </>
  );
}

export default TimeLine;
