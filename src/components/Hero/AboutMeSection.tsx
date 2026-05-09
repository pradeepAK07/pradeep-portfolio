import { AboutMeContainer } from "../../index.styles";

function AboutMeSection() {
  return (
    <AboutMeContainer className="p-12! pb-24! w-6xl!">
      <div className="max-w-xl">
        <p className="dmSherif text-amber-50 text-7xl mb-5!">About Me</p>
        <p className="dmSans text-[18px] mb-4! text-[#c4c7c7]">
          I specialize in building high-performance, accessible, and visually
          striking digital experiences. My approach blends the rigorous
          architecture of modern frontend engineering with a meticulous eye for
          editorial typography and brutalist aesthetics.
        </p>
        <p className="dmSans text-[18px] text-[#c4c7c7]">
          Beyond code, I focus on the "craft"—ensuring every interaction feels
          intentional, every transition snappy, and every interface
          human-centric.
        </p>
      </div>
      <div className="md:col-span-5">
        <div className="bg-[#161616] jetBrains  border border-[#e39c43] p-6! rounded-lg font-label-mono text-sm relative group overflow-hidden">
          <div className="flex items-center gap-2 mb-4! border-b border-[#e39c43] pb-3!">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/40"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/40"></div>
            <span className="ml-2! text-muted text-xs">zsh — whoami</span>
          </div>
          <div className="space-y- 2">
            <p className="text-[#e39c43]">$ whoami</p>
            <p className="text-on-surface mt-2!">
              Software Engineer @ Tringapps Research Labs PVT LTD
            </p>
            <p className="text-[#e39c43] mt-2!">$ location</p>
            <p className="text-on-surface mt-2!">
              Ekkattuthangal, Chennai (India)
            </p>
            <p className="text-[#e39c43] mt-2!">$ stack --list</p>
            <p className="text-on-surface mt-2!">
              React, Next.js, TypeScript, Rest, GraphQL, Node js, Postgres
            </p>
            <p className="text-[#e39c43] animate-pulse mt-2!">$ _</p>
          </div>
        </div>
      </div>
    </AboutMeContainer>
  );
}

export default AboutMeSection;
