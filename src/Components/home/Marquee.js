import InfokaiMark from "../../assets/svg/InfokaiMark";

const words = ["AI Assistants", "SaaS Platforms", "EdTech", "Publishing Systems", "Mobile Apps", "Business Networks", "Design Systems"];

const Marquee = () => (
  <div className="overflow-hidden border-y border-[#0C3A57]/10 bg-[color:var(--ivory)] py-6">
    <div className="marquee">
      {[...words, ...words].map((w, i) => (
        <span key={i} className="flex items-center gap-8 pr-8 font-display text-3xl text-[color:var(--deep)] md:text-5xl">
          {i % 2 ? <em className="font-serif font-light">{w}</em> : w}
          <InfokaiMark size={26} color="var(--navy)" />
        </span>
      ))}
    </div>
  </div>
);

export default Marquee;
