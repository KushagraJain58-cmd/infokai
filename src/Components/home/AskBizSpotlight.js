import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Users, Building2, BadgeCheck } from "lucide-react";
import Reveal from "../common/Reveal";
import SectionHeading from "../common/SectionHeading";
import AssistantDemo from "./AssistantDemo";
import { getProduct } from "../../context/ProductsContext";

const icons = [Users, Building2, BadgeCheck];

const AskBizSpotlight = () => {
  const p = getProduct("askbiz");
  return (
    <section className="grain relative overflow-hidden bg-[color:var(--deep)] py-28 text-[color:var(--ivory)] md:py-40">
      <div className="absolute left-[-10%] top-1/3 h-[500px] w-[500px] rounded-full bg-[#2F6BFF] opacity-[0.18] blur-[140px]" />
      <div className="absolute right-[-5%] top-[10%] h-[420px] w-[420px] rounded-full bg-[#C9A45C] opacity-[0.10] blur-[140px]" />
      <div className="container-x relative z-10 grid items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <SectionHeading eyebrow="Our flagship" title="AskBiz. Access, not just answers." italic={[2, 3]} dark>
            {p.short}
          </SectionHeading>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:grid-cols-3">
            {p.sides.map((s, i) => {
              const Icon = icons[i];
              return (
                <Reveal key={s.title} delay={0.1 * i} className="group bg-white/[0.03] p-6 backdrop-blur-xl transition-colors duration-500 hover:bg-white/[0.08]">
                  <Icon size={22} className="text-[color:var(--brass)] transition-transform duration-500 group-hover:-translate-y-1" />
                  <div className="mt-5 font-display text-xl">{s.title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{s.text}</p>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.3} className="mt-10">
            <Link to="/products/askbiz" className="btn btn-light cut">Explore AskBiz <ArrowRight size={16} /></Link>
          </Reveal>
        </div>

        <motion.div initial={{ opacity: 0, rotate: -4, y: 60 }} whileInView={{ opacity: 1, rotate: 0, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}>
          <AssistantDemo />
        </motion.div>
      </div>
    </section>
  );
};

export default AskBizSpotlight;
