import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Users, Network, Sparkles } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import ScreenFrame from "../common/ScreenFrame";
import AssistantDemo from "./AssistantDemo";
import { getAskBiz } from "../../context/ProductsContext";

const featureIcons = { BadgeCheck, Users, Network, Sparkles };

const AskBizSpotlight = () => {
  const p = getAskBiz();
  const [feed] = p.shots;
  return (
    <section className="grain relative overflow-hidden bg-[color:var(--deep)] py-28 text-[color:var(--ivory)] md:py-36">
      <div className="absolute right-[-10%] top-[10%] h-[520px] w-[520px] rounded-full bg-[#2F6BFF] opacity-[0.16] blur-[150px]" />
      <div className="container-x relative z-10 grid items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <SectionHeading eyebrow={p.kicker} title="AskBiz: where India's MSMEs find answers." italic={[0]} dark>
            {p.short}
          </SectionHeading>
          <div className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {p.features.map((f, i) => {
              const Icon = featureIcons[f.icon];
              return (
                <Reveal key={f.title} delay={0.1 + i * 0.06} className="flex gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/5 text-[color:var(--brass)]"><Icon size={17} /></span>
                  <div>
                    <div className="font-semibold">{f.title}</div>
                    <p className="mt-1 text-sm leading-relaxed text-white/55">{f.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <Reveal delay={0.3} className="mt-12 flex flex-wrap gap-3">
            <Link to="/askbiz" className="btn btn-light cut">Explore AskBiz <ArrowRight size={16} /></Link>
          </Reveal>
        </div>
        <div className="relative mx-auto flex w-full max-w-[520px] justify-center gap-6 sm:justify-between">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }} className="hidden w-[46%] sm:block">
            <ScreenFrame {...feed} />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 40 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }} className="w-full max-w-[280px] sm:w-[46%] sm:max-w-none">
            <AssistantDemo />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AskBizSpotlight;
