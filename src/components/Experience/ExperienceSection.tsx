import { EDUCATION_DATA, EXPERIENCE_DATA } from "../../Helpers/constant";
import type { ExperienceType } from "../../Helpers/types";
import ExperienceCard from "./Card";

function ExperienceSection() {
  return (
    <main className="pt-32 pb-section-py max-w-container-max mx-auto px-margin-x">
      <header className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
        <div className="max-w-2xl">
          <h1 className="font-section-title text-section-title text-heading mb-4 uppercase">
            Experience
          </h1>
          <p className="font-label-mono text-label-mono text-accent uppercase tracking-[0.2em]">
            Where I've made an impact.
          </p>
        </div>
        <div className="hidden md:block h-px bg-border grow mx-8 mb-4"></div>
      </header>
      {EXPERIENCE_DATA.map((val: ExperienceType, i: number) => (
        <ExperienceCard data={val} key={i} index={i} />
      ))}
      <section className="mt-32">
        <h2 className="font-label-mono text-label-mono text-muted uppercase tracking-widest mb-12 border-b border-border pb-4">
          Academic Foundation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EDUCATION_DATA.map((val, i) => (
            <div
              className="bg-surface border border-border p-6 flex items-center justify-between"
              key={i}
            >
              <div>
                <p className="font-label-mono text-xs text-accent uppercase mb-1">
                  {val.degree}
                </p>
                <h4 className="font-card-title text-lg text-heading">
                  {val.college}
                </h4>
              </div>
              <span className="font-label-mono text-xs text-muted">
                {val.period}
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default ExperienceSection;
