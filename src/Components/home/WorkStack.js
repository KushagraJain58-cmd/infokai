import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import ScreenFrame from "../common/ScreenFrame";
import InfokaiMark from "../../assets/svg/InfokaiMark";
import { getClientWork } from "../../context/ProductsContext";

const palettes = {
  "edu-platform": { bg: "#ECEBFA", accent: "#4F46E5" },
  "journal-platform": { bg: "#F3EBDA", accent: "#B8862F" },
};

const Card = ({ project, index, total }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const imgY = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const pal = palettes[project.slug];

  return (
    <div ref={ref} className="sticky" style={{ top: 90 + index * 26 }}>
      <motion.div style={{ scale, background: pal.bg }} className="cut grid min-h-[70vh] items-center gap-10 overflow-hidden p-8 lg:grid-cols-[1fr_1.7fr] md:p-12">
        <div>
          <div className="eyebrow" style={{ color: pal.accent }}>0{index + 1} / 0{total} · {project.kicker}</div>
          <h3 className="mt-6 font-display text-3xl text-[color:var(--deep)] md:text-5xl">{project.title}</h3>
          <p className="mt-3 font-serif text-2xl italic font-light text-[#061F30]/80">{project.tagline}</p>
          <p className="mt-6 max-w-md leading-relaxed text-[#2B2F36]/70">{project.short}</p>
          <Link to="/work" className="btn btn-navy mt-8">View project <ArrowUpRight size={16} /></Link>
        </div>
        <motion.div style={{ y: imgY }} className="relative">
          {project.shots.length ? (
            <>
              <ScreenFrame {...project.shots[0]} />
            </>
          ) : (
            <div className="grid aspect-[16/8.7] place-items-center rounded-xl bg-[color:var(--deep)]">
              <InfokaiMark size={120} color="#0f4a70" />
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

const WorkStack = () => {
  const list = getClientWork();
  return (
    <section className="bg-[color:var(--paper)] py-28 md:py-40">
      <div className="container-x">
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading eyebrow="Client work" title="Platforms our clients run on." italic={[3, 4]} />
          <Link to="/work" className="link-u w-fit text-sm font-semibold text-[color:var(--navy)]">See our work →</Link>
        </div>
        <div className="flex flex-col gap-10 pb-10">
          {list.map((p, i) => <Card key={p.slug} project={p} index={i} total={list.length} />)}
        </div>
      </div>
    </section>
  );
};

export default WorkStack;
