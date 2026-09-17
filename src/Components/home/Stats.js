import { useCountUp } from "../../hooks/useCountUp";
import { getStats } from "../../context/ProductsContext";
import Reveal from "../common/Reveal";

const Stat = ({ value, suffix, label, i }) => {
  const [ref, n] = useCountUp(value);
  return (
    <Reveal delay={i * 0.1} className="border-t border-[#0C3A57]/20 pt-6">
      <div ref={ref} className="font-display text-6xl text-[color:var(--navy)] md:text-7xl">{n}<span className="text-[color:var(--brass)]">{suffix}</span></div>
      <div className="mt-3 text-sm text-[#2B2F36]/60">{label}</div>
    </Reveal>
  );
};

const Stats = () => (
  <section className="bg-[color:var(--ivory)] py-24">
    <div className="container-x grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
      {getStats().map((s, i) => <Stat key={s.label} {...s} i={i} />)}
    </div>
  </section>
);

export default Stats;
