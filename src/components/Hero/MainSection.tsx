import { JetBrains, MainSectionContainer, PlayFair } from "../../index.styles";

function MainSection() {
  return (
    <MainSectionContainer>
      <JetBrains className="text-[#e39c43]">AVAILABLE FOR WORK</JetBrains>
      <PlayFair className="text-[128px]">PRADEEP &nbsp;A</PlayFair>
      <JetBrains className="text-[rgb(196,199,199)]  text-2xl flex gap-3 items-center">
        FRONTEND DEVELOPER{" "}
        <div className="bg-[#e39c43] w-0.5 h-7 animate-pulse" />
      </JetBrains>
      <div className="mt-12! flex justify-center items-center gap-4">
        <button className="jetBrains uppercase bg-[#e39c43] px-10! py-4! text-bg text-black  tracking-wider hover:bg-[#B87A30] transition-all duration-200 cursor-pointer">
          View Projects
        </button>
        <button className="jetBrains cursor-pointer border border-border border-[#84807a] px-10 py-4 uppercase tracking-wider hover:border-[#E8A045] transition-all duration-200">
          Read resume
        </button>
      </div>
    </MainSectionContainer>
  );
}

export default MainSection;
