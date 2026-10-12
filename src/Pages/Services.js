import { motion } from "framer-motion";
import { Check } from "lucide-react";
import PageTransition from "../Components/common/PageTransition";
import PageHero from "../Components/common/PageHero";
import SectionHeading from "../Components/common/SectionHeading";
import Reveal from "../Components/common/Reveal";
import CallToAction from "../Components/home/CallToAction";
import { icons } from "../Components/home/Services";
import { getServices, getProcess } from "../context/ProductsContext";

const Services = () => (
  <PageTransition>
    <PageHero eyebrow="Services" title="Software and IT, end to end." italic={[3, 4, 5]}>
      We design, build, launch and support the software your business runs on, from a single application to the cloud infrastructure behind it.
    </PageHero>

    <section className="bg-[color:var(--paper)] py-28">
      <div className="container-x grid gap-6 md:grid-cols-2">
        {getServices().map((s, i) => {
          const Icon = icons[s.icon];
          return (
            <Reveal key={s.title} delay={(i % 2) * 0.08}>
              <motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 250, damping: 20 }} className="cut h-full bg-[color:var(--ivory)] p-9">
                <Icon className="text-[color:var(--navy)]" />
                <h2 className="mt-6 font-display text-3xl text-[color:var(--deep)]">{s.title}</h2>
                <p className="mt-3 text-[#2B2F36]/70">{s.text}</p>
                <ul className="mt-6 space-y-2 text-sm text-[#2B2F36]/75">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-center gap-3"><Check size={14} className="text-[color:var(--brass)]" />{it}</li>
                  ))}
                </ul>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </section>

    <section className="bg-[color:var(--deep)] py-28 text-[color:var(--ivory)] md:py-36">
      <div className="container-x">
        <SectionHeading eyebrow="How we work" title="One team, from idea to support." italic={[4, 5]} dark />
        <div className="mt-16 grid gap-px bg-white/10 md:grid-cols-4">
          {getProcess().map((s, i) => (
            <Reveal key={s.k} delay={i * 0.08} className="bg-[color:var(--deep)] p-8">
              <div className="font-display text-5xl text-white/15">0{i + 1}</div>
              <div className="eyebrow mt-4 text-[color:var(--brass)]">{s.k}</div>
              <div className="mt-3 font-display text-2xl">{s.t}</div>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{s.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
    <CallToAction />
  </PageTransition>
);

export default Services;
