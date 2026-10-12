import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Compass, Layers, ShieldCheck, Sparkles } from "lucide-react";
import PageTransition from "../Components/common/PageTransition";
import PageHero from "../Components/common/PageHero";
import SectionHeading from "../Components/common/SectionHeading";
import Reveal from "../Components/common/Reveal";
import CallToAction from "../Components/home/CallToAction";
import { getProcess } from "../context/ProductsContext";

const values = [
  { icon: Compass, title: "Clarity over complexity", text: "We turn complicated business needs into software that is simple to use and simple to run." },
  { icon: Layers, title: "One team, end to end", text: "Product thinking, design and engineering under one roof, so nothing is lost in hand-offs." },
  { icon: ShieldCheck, title: "Secure by default", text: "Security, data privacy and access control are designed in from the start, not added later." },
  { icon: Sparkles, title: "Technology with a purpose", text: "We use new technology, including AI, where it solves a real problem, not for its own sake." },
];


const chapters = getProcess();

const About = () => {
  const lineRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: lineRef, offset: ["start 70%", "end 60%"] });
  const h = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <PageTransition>
      <PageHero eyebrow="About us" title="Engineering partners for growing businesses." italic={[3, 4]}>
        We design, build and support the platforms our clients run on, and build products of our own.
      </PageHero>
      

      <section className="bg-[color:var(--paper)] py-28 md:py-36">
        <div className="container-x grid gap-16 lg:grid-cols-2">
          <SectionHeading eyebrow="Who we are" title="Product thinking, engineering depth." italic={[2, 3]} />
          <Reveal delay={0.15} className="space-y-6 text-lg leading-relaxed text-[#2B2F36]/75">
            <p>Engineers and designers working as an extension of your team. We own the full lifecycle, from scoping to long-term support, so you deal with <strong className="text-[color:var(--deep)]">one accountable partner</strong> instead of several vendors.</p>
            <p>Client work across education technology and academic publishing. Alongside it, AskBiz, an AI-powered business network for Indian MSMEs, which keeps us close to the problems clients face: scale, reliability and real value from AI.</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[color:var(--ivory)] py-28">
        <div className="container-x">
          <SectionHeading eyebrow="What we value" title="Principles we ship with." />
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <motion.div whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 250, damping: 20 }} className="cut group h-full bg-[color:var(--paper)] p-8 transition-colors duration-500 hover:bg-[color:var(--navy)]">
                  <Icon className="text-[color:var(--navy)] transition-colors duration-500 group-hover:text-[color:var(--brass)]" />
                  <h3 className="mt-8 font-display text-2xl text-[color:var(--deep)] transition-colors duration-500 group-hover:text-[color:var(--ivory)]">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#2B2F36]/65 transition-colors duration-500 group-hover:text-white/65">{text}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--deep)] py-28 text-[color:var(--ivory)] md:py-36">
        <div className="container-x">
          <SectionHeading eyebrow="How we work" title="One team, from idea to support." italic={[4, 5]} dark />
          <div ref={lineRef} className="relative mt-20 pl-10 md:pl-20">
            <div className="absolute left-0 top-0 h-full w-px bg-white/10 md:left-6" />
            <motion.div style={{ height: h }} className="absolute left-0 top-0 w-px bg-[color:var(--brass)] md:left-6" />
            {chapters.map((c, i) => (
              <Reveal key={c.t} delay={0.05} className="relative mb-20 last:mb-0">
                <span className="absolute -left-[45px] top-3 h-3 w-3 rotate-45 bg-[color:var(--brass)] md:-left-[61px]" />
                <div className="eyebrow text-[color:var(--mist)]">0{i + 1} / {c.k}</div>
                <div className="mt-3 font-display text-5xl md:text-6xl">{c.t}</div>
                <p className="mt-4 max-w-xl text-white/60">{c.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </PageTransition>
  );
};

export default About;
