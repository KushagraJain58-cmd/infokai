import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import InfokaiMark from "../../assets/svg/InfokaiMark";
import SplitText from "../common/SplitText";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const markY = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const markRotate = useTransform(scrollYProgress, [0, 1], [0, 18]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 30);
    my.set(((e.clientY - r.top) / r.height - 0.5) * 30);
  };

  return (
    <section ref={ref} onMouseMove={onMove} className="grain relative min-h-[100svh] overflow-hidden bg-[color:var(--deep)] text-[color:var(--ivory)]">
      <div className="hero-grid absolute inset-0" />
      <motion.div className="absolute -right-40 top-10 h-[640px] w-[640px] rounded-full opacity-40 blur-[120px]" style={{ background: "radial-gradient(circle, #1d6a98, transparent 65%)", x: sx, y: sy }} />

      <motion.div style={{ y: markY, rotate: markRotate, x: sx }} className="pointer-events-none absolute right-[-8%] top-[12%] text-[color:var(--navy)] md:right-[4%]">
        <InfokaiMark size={620} color="#0f4a70" animate delay={0.4} className="h-[62vw] w-[62vw] max-h-[640px] max-w-[640px] opacity-80" />
      </motion.div>

      <motion.div style={{ y: textY, opacity: fade }} className="container-x relative z-10 flex min-h-[100svh] flex-col justify-end pb-20 pt-40">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="eyebrow mb-8 flex items-center gap-3 text-[color:var(--brass)]">
          <span className="h-px w-10 bg-current" /> Software company · Est. in India
        </motion.div>
        <h1 className="font-display text-[clamp(3rem,9vw,8.6rem)] leading-[0.95]">
          <SplitText text="We engineer" delay={0.6} /><br />
          <SplitText text="products that" delay={0.8} /><br />
          <SplitText text="open doors." delay={1} italic={[1]} className="text-[color:var(--mist)]" />
        </h1>
        <div className="mt-12 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5, duration: 1 }} className="max-w-md text-lg leading-relaxed text-white/60">
            Infokai designs and builds modern software for schools, publishers and enterprises — and is the team behind <span className="text-white">AskBiz</span>, the AI business network for India's MSMEs.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.7, duration: 1 }} className="flex flex-wrap gap-3">
            <Link to="/products/askbiz" className="btn btn-light cut">Meet AskBiz <ArrowRight size={16} /></Link>
            <Link to="/products" className="btn btn-ghost text-[color:var(--ivory)]">All products</Link>
          </motion.div>
        </div>
      </motion.div>

      <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 2, duration: 1.2 }} className="absolute bottom-0 left-1/2 hidden h-16 w-px origin-top bg-gradient-to-b from-white/50 to-transparent md:block" />
    </section>
  );
};

export default Hero;
