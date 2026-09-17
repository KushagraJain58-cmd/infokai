import { motion } from "framer-motion";
import SplitText from "./SplitText";
import InfokaiMark from "../../assets/svg/InfokaiMark";

const PageHero = ({ eyebrow, title, italic = [], children }) => (
  <section className="grain relative overflow-hidden bg-[color:var(--deep)] pb-24 pt-44 text-[color:var(--ivory)] md:pb-32 md:pt-52">
    <div className="hero-grid absolute inset-0" />
    <div className="pointer-events-none absolute -right-24 top-16 opacity-40"><InfokaiMark size={420} color="#0f4a70" animate delay={0.5} /></div>
    <div className="container-x relative z-10">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="eyebrow mb-6 flex items-center gap-3 text-[color:var(--brass)]">
        <span className="h-px w-10 bg-current" /> {eyebrow}
      </motion.div>
      <h1 className="max-w-5xl font-display text-[clamp(2.8rem,7.5vw,7rem)] leading-[0.98]">
        <SplitText text={title} italic={italic} delay={0.5} />
      </h1>
      {children && <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 1 }} className="mt-8 max-w-2xl text-lg leading-relaxed text-white/60">{children}</motion.div>}
    </div>
  </section>
);

export default PageHero;
