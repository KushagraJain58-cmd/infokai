import Reveal from "./Reveal";
import SplitText from "./SplitText";

const SectionHeading = ({ eyebrow, title, italic = [], dark = false, children, align = "left" }) => (
  <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
    <Reveal>
      <div className={`eyebrow mb-5 flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`} style={{ color: dark ? "var(--brass)" : "var(--navy)" }}>
        <span className="inline-block h-px w-8 bg-current" /> {eyebrow}
      </div>
    </Reveal>
    <h2 className="font-display text-[clamp(2.2rem,5vw,4rem)] leading-[1.02]" style={{ color: dark ? "var(--ivory)" : "var(--deep)" }}>
      <SplitText text={title} italic={italic} inView />
    </h2>
    {children && <Reveal delay={0.2} className={`mt-6 text-lg leading-relaxed ${dark ? "text-white/60" : "text-[#2B2F36]/70"}`}>{children}</Reveal>}
  </div>
);

export default SectionHeading;
