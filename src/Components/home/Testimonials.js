import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { getTestimonials } from "../../context/ProductsContext";

const Testimonials = () => {
  const items = getTestimonials();
  const [[i, dir], setI] = useState([0, 1]);
  const go = (d) => setI(([c]) => [(c + d + items.length) % items.length, d]);

  useEffect(() => {
    const t = setInterval(() => go(1), 7000);
    return () => clearInterval(t);
  }, [i]); // eslint-disable-line react-hooks/exhaustive-deps

  const t = items[i];
  return (
    <section className="relative overflow-hidden bg-[color:var(--paper)] py-28 md:py-40">
      <div className="container-x grid gap-16 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <SectionHeading eyebrow="Client feedback" title="Words from the people we build with." italic={[5, 6]} />
          <div className="mt-10 flex items-center gap-4">
            {[[-1, ArrowLeft], [1, ArrowRight]].map(([d, Icon]) => (
              <button key={d} onClick={() => go(d)} aria-label={d < 0 ? "Previous" : "Next"} className="grid h-14 w-14 place-items-center rounded-full border border-[#0C3A57]/25 text-[color:var(--navy)] transition-all duration-500 hover:bg-[color:var(--navy)] hover:text-[color:var(--ivory)]">
                <Icon size={18} />
              </button>
            ))}
            <span className="ml-3 font-display text-lg text-[color:var(--navy)]">{String(i + 1).padStart(2, "0")} <span className="opacity-30">/ {String(items.length).padStart(2, "0")}</span></span>
          </div>
        </div>
        <div className="relative min-h-[340px]">
          <Quote size={90} className="absolute -top-6 left-0 text-[color:var(--navy)] opacity-[0.07]" />
          <AnimatePresence mode="wait" custom={dir}>
            <motion.figure key={i} custom={dir}
              initial={{ opacity: 0, x: dir * 60, filter: "blur(8px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: dir * -60, filter: "blur(8px)" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="pt-10">
              <blockquote className="font-serif text-[clamp(1.6rem,3vw,2.6rem)] font-light leading-[1.25] text-[color:var(--deep)]">“{t.quote}”</blockquote>
              <figcaption className="mt-10 flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center bg-[color:var(--navy)] font-display text-[color:var(--ivory)] cut-tl">{t.name[0]}</span>
                <span><span className="block font-semibold text-[color:var(--deep)]">{t.name}</span><span className="text-sm text-[#2B2F36]/55">{t.role}</span></span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
          <div className="absolute bottom-0 left-0 right-0 flex gap-2">
            {items.map((_, k) => (
              <span key={k} className="h-[2px] flex-1 overflow-hidden bg-[#0C3A57]/10">
                {k === i && <motion.span key={i} className="block h-full bg-[color:var(--navy)]" initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 7, ease: "linear" }} />}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
