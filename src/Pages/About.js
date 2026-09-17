import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Compass, Layers, ShieldCheck, Sparkles } from "lucide-react";
import PageTransition from "../Components/common/PageTransition";
import PageHero from "../Components/common/PageHero";
import SectionHeading from "../Components/common/SectionHeading";
import Reveal from "../Components/common/Reveal";
import Stats from "../Components/home/Stats";
import Testimonials from "../Components/home/Testimonials";
import CallToAction from "../Components/home/CallToAction";

const values = [
  { icon: Compass, title: "Access over noise", text: "We build tools that connect people to the knowledge, networks and opportunities they were locked out of." },
  { icon: Layers, title: "Crafted end to end", text: "Product thinking, design and engineering under one roof — so nothing gets lost in hand-offs." },
  { icon: ShieldCheck, title: "Trust by design", text: "Verified experts, transparent peer review, safe spaces for students. Trust is a feature we engineer." },
  { icon: Sparkles, title: "AI with a purpose", text: "We use AI where it genuinely shortens the path to an answer — grounded in verified data." },
];

const chapters = [
  { k: "Build", t: "JAMSD", d: "A peer-reviewed, open-access journal platform with a complete author and editor workflow." },
  { k: "Scale", t: "Pioneer", d: "A SaaS learning and career-consultancy platform licensed to schools across India." },
  { k: "Lead", t: "AskBiz", d: "Our flagship: an AI-powered, three-sided network for India's 63 million MSMEs." },
];

const About = () => {
  const lineRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: lineRef, offset: ["start 70%", "end 60%"] });
  const h = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <PageTransition>
      <PageHero eyebrow="About us" title="Software with quiet precision." italic={[2, 3]}>
        Infokai is a product studio and software company. We partner with schools, publishers and businesses to build modern platforms — and we build our own, starting with AskBiz.
      </PageHero>

      <section className="bg-[color:var(--paper)] py-28 md:py-36">
        <div className="container-x grid gap-16 lg:grid-cols-2">
          <SectionHeading eyebrow="Who we are" title="Two blocks, one direction." italic={[2, 3]} />
          <Reveal delay={0.15} className="space-y-6 text-lg leading-relaxed text-[#2B2F36]/75">
            <p>Our mark is two offset blocks moving in opposite directions, held together by a single line. It's how we work: <strong className="text-[color:var(--deep)]">deep engineering</strong> and <strong className="text-[color:var(--deep)]">thoughtful design</strong>, pulling toward the same outcome.</p>
            <p>We've shipped platforms for medical publishing, school education and career guidance — and we pour everything we've learned into AskBiz, a platform built for the legacy businesses and first-time founders everyone else has overlooked.</p>
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
          <SectionHeading eyebrow="Our journey" title="From client work to a flagship." italic={[4]} dark />
          <div ref={lineRef} className="relative mt-20 pl-10 md:pl-20">
            <div className="absolute left-0 top-0 h-full w-px bg-white/10 md:left-6" />
            <motion.div style={{ height: h }} className="absolute left-0 top-0 w-px bg-[color:var(--brass)] md:left-6" />
            {chapters.map((c, i) => (
              <Reveal key={c.t} delay={0.05} className="relative mb-20 last:mb-0">
                <span className="absolute -left-[45px] top-3 h-3 w-3 rotate-45 bg-[color:var(--brass)] md:-left-[61px]" />
                <div className="eyebrow text-[color:var(--mist)]">0{i + 1} — {c.k}</div>
                <div className="mt-3 font-display text-5xl md:text-6xl">{c.t}</div>
                <p className="mt-4 max-w-xl text-white/60">{c.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Stats />
      <Testimonials />
      <CallToAction />
    </PageTransition>
  );
};

export default About;
