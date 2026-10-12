import { Link } from "react-router-dom";
import { Code2, Smartphone, Layers, PenTool, Cloud, Bot, LifeBuoy } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import { getServices } from "../../context/ProductsContext";

export const icons = { Code2, Smartphone, Layers, PenTool, Cloud, Bot, LifeBuoy };

const Services = () => (
  <section className="bg-[color:var(--ivory)] py-28 md:py-36">
    <div className="container-x">
      <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <SectionHeading eyebrow="What we do" title="End-to-end IT solutions." italic={[0]}>
          One team handles strategy, design, engineering and operations, from the first conversation through launch and long-term support.
        </SectionHeading>
        <Link to="/services" className="link-u w-fit text-sm font-semibold text-[color:var(--navy)]">All services →</Link>
      </div>
      <div className="grid gap-px bg-[#0C3A57]/15 md:grid-cols-2 lg:grid-cols-3">
        {getServices().map((s, i) => {
          const Icon = icons[s.icon];
          return (
            <Reveal key={s.title} delay={(i % 3) * 0.08} className="group bg-[color:var(--ivory)] p-9 transition-colors duration-500 hover:bg-[color:var(--paper)]">
              <Icon size={24} className="text-[color:var(--navy)]" />
              <h3 className="mt-6 font-display text-2xl text-[color:var(--deep)]">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#2B2F36]/65">{s.text}</p>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default Services;
