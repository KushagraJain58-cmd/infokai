import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import InfokaiMark from "../../assets/svg/InfokaiMark";
import SplitText from "../common/SplitText";

const CallToAction = () => (
  <section className="bg-[color:var(--paper)] pb-28">
    <div className="container-x">
      <motion.div initial={{ clipPath: "inset(20% 20% 20% 20%)" }} whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.3, ease: [0.76, 0, 0.24, 1] }}
        className="grain relative overflow-hidden bg-[color:var(--navy)] px-8 py-20 text-[color:var(--ivory)] md:px-20 md:py-28">
        <motion.div className="absolute -right-20 -top-10 opacity-20" animate={{ rotate: 360 }} transition={{ duration: 120, repeat: Infinity, ease: "linear" }}>
          <InfokaiMark size={460} color="#ffffff" />
        </motion.div>
        <div className="relative z-10 max-w-3xl">
          <h2 className="font-display text-[clamp(2.4rem,6vw,5.4rem)] leading-[1]">
            <SplitText text="Have an idea worth building?" italic={[3, 4]} inView />
          </h2>
          <p className="mt-6 max-w-lg text-lg text-white/65">Tell us about it. We'll bring the engineering, design and product thinking to take it to market.</p>
          <Link to="/contact" className="btn btn-light cut mt-10">Start a conversation <ArrowRight size={16} /></Link>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CallToAction;
