function Card() {
  return (
    <div className="border border-[#e39c43] p-6! cursor-pointer hover:-translate-y-2 hover:border-[#E8A045] transition-all duration-300">
      <div className="aspect-video border border-[#e39c43] mb-4! hover:border-[#E8A045]">
        <img
          alt="Cyber security project"
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
          data-alt="A macro shot of a glowing computer circuit board with neon amber lights flowing through silicon pathways in a dark, tech-focused environment. The lighting is low-key and dramatic, emphasizing the intricate details of the hardware. The aesthetic is futuristic and industrial, with a deep black background and vibrant orange accents that create a sense of high-speed data transmission."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCf9F3nS0DbRBKOY4qs7xUUx9Ib8OFi3U7WmViw7zrnyJhrs0yazhz6WRe0hUtm8HB3fJ_3MkCZjpDvz3sPPML3nCRf2us4iU0q43G709ROt4AwJFITj4CFHrP_DEFBD70nSpSiQ_38KhAm5rHXH2wbtysJctX80gMrZgplMklM-Kx1NTHIfesa6UTBo11DW7_SiEd3si-3dCFOy2oE3hcS2z28vTuH_dODiJBWLR_UsgDn3PZS1pyjmU8wvOKi6Oqrbp87Y1xwCic"
        />
      </div>
      <div>
        <p className="dmSherif text-2xl mb-3!">Hyperion Dashboard</p>
        <p className="dmSans mb-6! text-[#c4c7c7]">
          A real-time data visualization platform for high-frequency trading
          terminals.
        </p>
      </div>
      <div>
        <span className="border border-[#e39c43] px-2! py-1! rounded-x0.5 hover:text-[#e39c43] text-[#c4c7c7]">
          React js
        </span>
      </div>
    </div>
  );
}

export default Card;
