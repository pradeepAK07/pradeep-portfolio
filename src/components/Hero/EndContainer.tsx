function EndContainer() {
  return (
    <div className="relative overflow-hidden py-12! px-24! bg-[rgb(22,22,22)] text-amber-50 flex items-center justify-between group cursor-pointer border-t-[0.5px] border-b-[0.5px] border-[#2a2a2a]/40">
      <div className="absolute inset-0 bg-[#e39c43] translate-y-full group-hover:translate-y-0  transition-transform duration-500 ease-in-out z-0"></div>

      <span className="text-5xl relative z-10 playFair transition-colors duration-500 group-hover:text-black">
        Lets Build Something Great Together →
      </span>

      <span className="uppercase relative z-10 jetBrains text-[#e39c43] transition-colors duration-500 group-hover:text-black">
        Get In Touch
      </span>
    </div>
  );
}

export default EndContainer;
