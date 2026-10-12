import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Database, BookOpen, Globe, BadgeCheck, Users, Network, Sparkles } from "lucide-react";
import PageTransition from "../Components/common/PageTransition";
import PageHero from "../Components/common/PageHero";
import SectionHeading from "../Components/common/SectionHeading";
import Reveal from "../Components/common/Reveal";
import ScreenFrame from "../Components/common/ScreenFrame";
import AssistantDemo from "../Components/home/AssistantDemo";
import CallToAction from "../Components/home/CallToAction";
import { getAskBiz } from "../context/ProductsContext";

const featureIcons = { BadgeCheck, Users, Network, Sparkles };

const Gallery = ({ shots }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-35%"]);
  const phone = shots[0].device === "phone";
  return (
    <section ref={ref} className="overflow-hidden bg-[color:var(--deep)] py-24">
      <motion.div style={{ x }} className="flex gap-8 pl-[5vw]">
        {shots.map((s, i) => (
          <div key={s.src} className={phone ? "w-[260px] shrink-0 md:w-[300px]" : "w-[80vw] shrink-0 md:w-[58vw]"} style={{ marginTop: i % 2 ? 60 : 0 }}>
            <ScreenFrame {...s} />
            <div className="eyebrow mt-4 text-white/40">{String(i + 1).padStart(2, "0")} · {s.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

const AskBizBody = ({ p }) => (
  <>
    <section className="bg-[color:var(--paper)] py-28 md:py-36">
      <div className="container-x">
        <div className="grid gap-16 lg:grid-cols-2">
          <SectionHeading eyebrow="The problem" title="Knowledge isn't scarce. Access is." italic={[3, 4]} />
          <Reveal delay={0.15} className="space-y-6 text-lg leading-relaxed text-[#2B2F36]/75">
            <p>{p.problem}</p>
            <p>{p.solution}</p>
          </Reveal>
        </div>
        <div className="mt-20 grid gap-px bg-[#0C3A57]/15 md:grid-cols-3">
          {p.sides.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1} className="bg-[color:var(--paper)] p-10">
              <div className="font-display text-6xl text-[#0C3A57]/15">0{i + 1}</div>
              <div className="mt-4 font-display text-3xl text-[color:var(--deep)]">{s.title}</div>
              <p className="mt-3 text-[#2B2F36]/65">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
    <section className="bg-[color:var(--ivory)] py-28">
      <div className="container-x">
        <SectionHeading eyebrow="The platform" title="What members get." italic={[2]} />
        <div className="mt-14 grid gap-px bg-[#0C3A57]/15 md:grid-cols-2 lg:grid-cols-4">
          {p.features.map((f, i) => {
            const Icon = featureIcons[f.icon];
            return (
              <Reveal key={f.title} delay={i * 0.08} className="bg-[color:var(--ivory)] p-8">
                <Icon size={22} className="text-[color:var(--navy)]" />
                <h3 className="mt-6 font-display text-2xl text-[color:var(--deep)]">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#2B2F36]/65">{f.text}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
    <section className="grain relative overflow-hidden bg-[color:var(--deep)] py-28 text-[color:var(--ivory)] md:py-36">
      <div className="container-x relative z-10 grid items-center gap-16 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="The AI assistant" title="Three sources. One grounded answer." italic={[3, 4]} dark>{p.ai}</SectionHeading>
          <div className="mt-10 flex flex-col gap-3">
            {p.sources.map((s, i) => {
              const Icon = [Database, BookOpen, Globe][i];
              return (
                <Reveal key={s} delay={0.1 * i} className="flex items-center gap-4 border-b border-white/10 pb-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-[color:var(--brass)]"><Icon size={16} /></span>
                  <span className="text-white/80">{s}</span>
                </Reveal>
              );
            })}
          </div>
        </div>
        <AssistantDemo className="mx-auto max-w-[320px]" />
      </div>
    </section>
    <Gallery shots={p.shots} />
  </>
);

const AskBiz = () => {
  const p = getAskBiz();
  return (
    <PageTransition>
      <PageHero eyebrow={p.kicker} title={p.name}>
        <span className="font-serif text-2xl italic text-white/80">{p.tagline}</span>
        <span className="mt-5 block">{p.short}</span>
      </PageHero>
      <AskBizBody p={p} />
      <CallToAction />
    </PageTransition>
  );
};

export default AskBiz;
