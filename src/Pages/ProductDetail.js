import { useRef } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Database, BookOpen, Globe } from "lucide-react";
import PageTransition from "../Components/common/PageTransition";
import PageHero from "../Components/common/PageHero";
import SectionHeading from "../Components/common/SectionHeading";
import Reveal from "../Components/common/Reveal";
import ScreenFrame from "../Components/common/ScreenFrame";
import AssistantDemo from "../Components/home/AssistantDemo";
import CallToAction from "../Components/home/CallToAction";
import PlatformOverview from "../Components/askbiz/PlatformOverview";
import RoleJourney from "../Components/askbiz/RoleJourney";
import { getProduct, getProducts } from "../context/ProductsContext";

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
      <div className="container-x grid gap-16 lg:grid-cols-2">
        <SectionHeading eyebrow="The problem" title="Knowledge isn't scarce. Access is." italic={[3, 4]} />
        <Reveal delay={0.15} className="space-y-6 text-lg leading-relaxed text-[#2B2F36]/75">
          <p>{p.problem}</p>
          <p>{p.solution}</p>
        </Reveal>
      </div>
    </section>
    <section className="bg-[color:var(--ivory)] py-24">
      <div className="container-x grid gap-px bg-[#0C3A57]/15 md:grid-cols-3">
        {p.sides.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.1} className="bg-[color:var(--ivory)] p-10">
            <div className="font-display text-7xl text-[#0C3A57]/15">0{i + 1}</div>
            <div className="mt-4 font-display text-3xl text-[color:var(--deep)]">{s.title}</div>
            <p className="mt-3 text-[#2B2F36]/65">{s.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
    <PlatformOverview p={p} />
    <RoleJourney p={p} />
    <section className="grain relative overflow-hidden bg-[color:var(--deep)] py-28 text-[color:var(--ivory)] md:py-36">
      <div className="container-x relative z-10 grid items-center gap-16 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="The AI assistant" title="Three sources. One instant answer." italic={[3, 4]} dark>{p.ai}</SectionHeading>
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
        <AssistantDemo />
      </div>
    </section>
    <Gallery shots={p.shots} />
    <section className="bg-[color:var(--paper)] py-28 text-center md:py-40">
      <div className="container-x">
        <Reveal><p className="mx-auto max-w-4xl font-serif text-[clamp(1.8rem,3.6vw,3rem)] font-light leading-[1.3] text-[color:var(--deep)]">{p.flywheel}</p></Reveal>
        <Reveal delay={0.2}><p className="eyebrow mt-12 text-[color:var(--navy)]">{p.closing}</p></Reveal>
        <Reveal delay={0.3} className="mx-auto mt-20 max-w-3xl border-t border-[#0C3A57]/15 pt-12">
          <div className="eyebrow text-[color:var(--brass)]">The one-line pitch</div>
          <p className="mt-5 font-display text-2xl leading-snug text-[color:var(--deep)] md:text-3xl">“{p.pitch}”</p>
        </Reveal>
      </div>
    </section>
  </>
);

const StandardBody = ({ p }) => (
  <>
    <section className="bg-[color:var(--paper)] py-28">
      <div className="container-x">
        <Reveal><ScreenFrame {...p.shots[0]} /></Reveal>
      </div>
    </section>
    <section className="bg-[color:var(--ivory)] py-28">
      <div className="container-x">
        <SectionHeading eyebrow="Capabilities" title="What's inside." />
        <div className="mt-16 grid gap-px bg-[#0C3A57]/15 md:grid-cols-2">
          {p.features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.07} className="group bg-[color:var(--ivory)] p-10 transition-colors duration-500 hover:bg-[color:var(--paper)]">
              <div className="flex items-baseline gap-4">
                <span className="font-display text-sm text-[color:var(--brass)]">0{i + 1}</span>
                <h3 className="font-display text-3xl text-[color:var(--deep)] transition-transform duration-500 group-hover:translate-x-2">{f.title}</h3>
              </div>
              <p className="mt-4 pl-8 text-[#2B2F36]/65">{f.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
    <Gallery shots={p.shots.slice(1)} />
  </>
);

const ProductDetail = () => {
  const { slug } = useParams();
  const p = getProduct(slug);
  if (!p) return <Navigate to="/products" replace />;
  const all = getProducts();
  const next = all[(all.indexOf(p) + 1) % all.length];

  return (
    <PageTransition>
      <PageHero eyebrow={p.kicker} title={p.name} >
        <span className="font-serif text-2xl italic text-white/80">{p.tagline}</span>
        <span className="mt-5 block">{p.short}</span>
      </PageHero>
      {p.flagship ? <AskBizBody p={p} /> : <StandardBody p={p} />}
      <section className="bg-[color:var(--paper)] py-16">
        <Link to={`/products/${next.slug}`} className="container-x group flex items-center justify-between border-y border-[#0C3A57]/15 py-10">
          <span className="eyebrow text-[#2B2F36]/50">Next product</span>
          <span className="flex items-center gap-6 font-display text-5xl text-[color:var(--deep)] md:text-7xl">
            {next.name}<ArrowRight className="transition-transform duration-500 group-hover:translate-x-3" size={40} />
          </span>
        </Link>
      </section>
      <CallToAction />
    </PageTransition>
  );
};

export default ProductDetail;
