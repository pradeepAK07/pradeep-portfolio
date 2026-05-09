import { ECO_SYSTEM_DATA, SKILLS_DATA } from "../../constant";
import SkillsCard from "./SkillsCard";
import TagCard from "./TagCard";

function SkillsSection() {
  return (
    <main className="pt-32 pb-section-py max-w-container-max mx-auto px-margin-x">
      <header className="mb-24">
        <h1 className="font-section-title text-section-title text-heading uppercase mb-4 tracking-tight">
          MY STACK
        </h1>
        <p className="font-label-mono text-label-mono text-muted uppercase">
          The tools Im familiar in.
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-32">
        {SKILLS_DATA.map((data, i) => (
          <SkillsCard data={data} key={i} />
        ))}
      </div>
      <section className="mb-32">
        <h2 className="font-label-mono text-label-mono text-accent uppercase mb-12 tracking-[0.2em] border-l-2 border-accent pl-4">
          Engineering Ecosystem, i worked on
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          {ECO_SYSTEM_DATA.map((val, i) => (
            <TagCard data={val} key={i} />
          ))}
        </div>
      </section>
      {/* <section className="border border-border bg-surface-container-lowest overflow-hidden">
<div className="px-8 py-4 border-b border-border flex items-center justify-between">
<span className="font-label-mono text-[10px] text-muted uppercase tracking-[0.3em]">Status: Deep Learning</span>
<div className="flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
</span>
<span className="font-label-mono text-[10px] text-success uppercase">Active</span>
</div>
</div>
<div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-border">
<div className="p-8 flex-1 group hover:bg-surface transition-colors duration-200">
<p className="font-label-mono text-xs text-muted uppercase mb-2">Researching</p>
<h5 className="font-card-title text-heading">React Server Components</h5>
</div>
<div className="p-8 flex-1 group hover:bg-surface transition-colors duration-200">
<p className="font-label-mono text-xs text-muted uppercase mb-2">Compiling</p>
<h5 className="font-card-title text-heading">Rust</h5>
</div>
<div className="p-8 flex-1 group hover:bg-surface transition-colors duration-200">
<p className="font-label-mono text-xs text-muted uppercase mb-2">Rendering</p>
<h5 className="font-card-title text-heading">Three.js</h5>
</div>
</div>
</section> */}
    </main>
  );
}

export default SkillsSection;
