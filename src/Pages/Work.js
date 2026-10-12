import { useState } from "react";
import PageTransition from "../Components/common/PageTransition";
import PageHero from "../Components/common/PageHero";
import Reveal from "../Components/common/Reveal";
import ScreenFrame from "../Components/common/ScreenFrame";
import InfokaiMark from "../assets/svg/InfokaiMark";
import CallToAction from "../Components/home/CallToAction";
import OwnProduct from "../Components/home/OwnProduct";
import { getClientWork } from "../context/ProductsContext";

// One screen at a time, switched by label, so each stays large enough to read.
const Visual = ({ shots }) => {
  const [active, setActive] = useState(0);
  return shots.length ? (
    <div>
      <ScreenFrame key={shots[active].src} {...shots[active]} />
      <div className="mt-5 flex flex-wrap items-center gap-2">
        {shots.length > 1 && shots.map((s, i) => (
          <button key={s.src} type="button" onClick={() => setActive(i)}
            className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors ${i === active ? "border-[color:var(--deep)] bg-[color:var(--deep)] text-[color:var(--ivory)]" : "border-[#0C3A57]/20 text-[color:var(--deep)] hover:border-[#0C3A57]/50"}`}>
            {s.label}
          </button>
        ))}
        <span className="ml-auto text-xs text-[#2B2F36]/50">Click to enlarge</span>
      </div>
    </div>
  ) : (
    <div className="cut grid aspect-[16/8.7] place-items-center bg-[color:var(--deep)]">
      <InfokaiMark size={120} color="#0f4a70" />
    </div>
  );
};

const Work = () => (
  <PageTransition>
    <PageHero eyebrow="Our work" title="Selected client work." italic={[1, 2]}>
      We act as the engineering partner for organisations that need a dependable platform designed, built and supported. Client names are withheld for confidentiality.
    </PageHero>
    <section className="bg-[color:var(--paper)] py-28">
      <div className="container-x flex flex-col gap-32">
        {getClientWork().map((p) => (
          <div key={p.slug}>
            <Reveal className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
              <div>
                <div className="eyebrow text-[color:var(--navy)]">{p.kicker}</div>
                <h2 className="mt-5 font-display text-4xl text-[color:var(--deep)] md:text-5xl">{p.title}</h2>
                <p className="mt-3 font-serif text-2xl italic font-light text-[#061F30]/75">{p.tagline}</p>
              </div>
              <div>
                <p className="leading-relaxed text-[#2B2F36]/70">{p.short}</p>
                <p className="mt-4 text-sm leading-relaxed text-[#2B2F36]/60"><strong className="text-[color:var(--deep)]">Our role:</strong> {p.built}</p>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="mt-12"><Visual shots={p.shots} /></Reveal>
            <Reveal delay={0.15}>
              <ul className={`mt-12 grid gap-x-10 gap-y-6 sm:grid-cols-2 ${p.features.length > 3 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
                {p.features.map((f) => (
                  <li key={f.title} className="border-t border-[#0C3A57]/15 pt-5">
                    <div className="font-display text-lg text-[color:var(--deep)]">{f.title}</div>
                    <p className="mt-1 text-sm text-[#2B2F36]/65">{f.text}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
    <OwnProduct />
    <CallToAction />
  </PageTransition>
);

export default Work;
