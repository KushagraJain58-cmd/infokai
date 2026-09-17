import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowDown, Play, Pause, User, Store } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";

const tabIcons = { individual: User, business: Store };
const stages = ["Who", "Problems", "On the platform", "Their profile", "What they gain"];

const Label = ({ children, lit }) => (
  <div className="flex flex-col items-center py-3">
    <ArrowDown size={16} className={`transition-colors duration-500 ${lit ? "text-[color:var(--brass)]" : "text-[#0C3A57]/25"}`} />
    <div className={`eyebrow mt-2 transition-colors duration-500 ${lit ? "text-[color:var(--navy)]" : "text-[#2B2F36]/40"}`}>{children}</div>
  </div>
);

const RoleJourney = ({ p }) => {
  const [tab, setTab] = useState(0);
  const [focus, setFocus] = useState(null); // { type: "problem" | "action" | "gain", i }
  const [stage, setStage] = useState(null);
  const [playing, setPlaying] = useState(false);
  const j = p.journeys[tab];

  useEffect(() => {
    if (!playing) return;
    const t = setTimeout(() => {
      if (stage === null || stage < stages.length - 1) setStage((s) => (s === null ? 0 : s + 1));
      else { setPlaying(false); setStage(null); }
    }, stage === null ? 0 : 1500);
    return () => clearTimeout(t);
  }, [playing, stage]);

  const switchTab = (i) => { setTab(i); setFocus(null); setPlaying(false); setStage(null); };

  // Work out which nodes relate to the focused node.
  const litProblems = new Set(), litActions = new Set(), litGains = new Set();
  if (focus?.type === "problem") { litProblems.add(focus.i); j.problems[focus.i].solves.forEach((a) => litActions.add(a)); j.gains.forEach((g, gi) => g.from.some((a) => litActions.has(a)) && litGains.add(gi)); }
  if (focus?.type === "action") { litActions.add(focus.i); j.problems.forEach((pr, pi) => pr.solves.includes(focus.i) && litProblems.add(pi)); j.gains.forEach((g, gi) => g.from.includes(focus.i) && litGains.add(gi)); }
  if (focus?.type === "gain") { litGains.add(focus.i); j.gains[focus.i].from.forEach((a) => litActions.add(a)); j.problems.forEach((pr, pi) => pr.solves.some((a) => litActions.has(a)) && litProblems.add(pi)); }

  const dim = (set, i, row) => {
    if (stage !== null) return stage === row ? "" : "opacity-35";
    return focus && !set.has(i) ? "opacity-35" : "";
  };
  const rowDim = (row) => (stage !== null && stage !== row ? "opacity-35" : "");
  const bind = (type, i) => ({ onMouseEnter: () => setFocus({ type, i }), onMouseLeave: () => setFocus(null), onClick: () => setFocus((f) => (f?.type === type && f.i === i ? null : { type, i })) });
  const node = "rounded-2xl border px-4 py-4 text-center transition-all duration-500 cursor-pointer backdrop-blur-md";

  return (
    <section className="bg-[color:var(--paper)] py-28 md:py-36">
      <div className="container-x">
        <SectionHeading eyebrow="Who it's for" title="Two journeys. One platform." italic={[2, 3]}>
          Pick a role, then hover or tap any problem, action or outcome to trace how AskBiz solves it — or press play to walk through the journey.
        </SectionHeading>

        <Reveal delay={0.1} className="mt-12 flex flex-wrap items-center gap-3">
          {p.journeys.map((x, i) => {
            const Icon = tabIcons[x.key];
            return (
              <button key={x.key} type="button" onClick={() => switchTab(i)}
                className={`flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${tab === i ? "border-[color:var(--deep)] bg-[color:var(--deep)] text-[color:var(--ivory)]" : "border-[#0C3A57]/20 text-[color:var(--deep)] hover:border-[#0C3A57]/50"}`}>
                <Icon size={15} /> {x.label}
              </button>
            );
          })}
          <button type="button" onClick={() => { setFocus(null); if (playing) { setPlaying(false); setStage(null); } else { setStage(null); setPlaying(true); } }}
            className="ml-auto flex items-center gap-2 rounded-full border border-[color:var(--brass)]/60 px-5 py-2.5 text-sm font-semibold text-[color:var(--deep)] transition-colors hover:bg-[color:var(--brass)]/15">
            {playing ? <Pause size={15} /> : <Play size={15} />} {playing ? "Stop" : "Walk through"}
          </button>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div key={j.key} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -24 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 grid gap-14 lg:grid-cols-[1fr_1.5fr]">
            {/* Narrative */}
            <div className="space-y-6 text-lg leading-relaxed text-[#2B2F36]/75 lg:sticky lg:top-28 lg:self-start">
              <div className="font-display text-4xl text-[color:var(--deep)]">The {j.label}</div>
              {j.story.map((s) => <p key={s.slice(0, 20)}>{s}</p>)}
              <div className="flex flex-wrap gap-2 pt-2">
                {stages.map((s, i) => (
                  <span key={s} className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors duration-500 ${stage === i ? "bg-[color:var(--brass)] text-[color:var(--deep)]" : "bg-[#0C3A57]/[0.06] text-[#2B2F36]/50"}`}>{i + 1}. {s}</span>
                ))}
              </div>
            </div>

            {/* Diagram */}
            <div className="rounded-[28px] border border-[#0C3A57]/10 bg-white/60 p-5 shadow-[0_20px_60px_rgba(6,31,48,0.08)] backdrop-blur-xl md:p-8">
              <div className={`transition-opacity duration-500 ${rowDim(0)}`}>
                <div className="mx-auto max-w-md rounded-2xl border border-[#2F6BFF]/25 bg-[#2F6BFF]/[0.06] px-5 py-4 text-center">
                  <div className="font-display text-2xl text-[color:var(--deep)]">Who is the {j.label}?</div>
                  <div className="mt-1 text-sm text-[#0C3A57]/75">{j.who}</div>
                </div>
              </div>

              <Label lit={stage === 1}>Problems they face today</Label>
              <div className="grid gap-3 sm:grid-cols-3">
                {j.problems.map((pr, i) => (
                  <div key={pr.title} {...bind("problem", i)} className={`${node} ${dim(litProblems, i, 1)} ${litProblems.has(i) ? "border-[#C0573E] bg-[#C0573E]/[0.12] -translate-y-0.5 shadow-md" : "border-[#C0573E]/30 bg-[#C0573E]/[0.05]"}`}>
                    <div className="font-semibold text-[#8A3A26]">{pr.title}</div>
                    <div className="mt-1 text-sm text-[#8A3A26]/75">{pr.text}</div>
                  </div>
                ))}
              </div>

              <Label lit={stage === 2}>What they can do on the platform</Label>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {j.actions.map((a, i) => (
                  <div key={a.title} {...bind("action", i)} className={`${node} ${dim(litActions, i, 2)} ${litActions.has(i) ? "border-[#2F6BFF] bg-[#2F6BFF]/[0.12] -translate-y-0.5 shadow-md" : "border-[#2F6BFF]/25 bg-[#2F6BFF]/[0.05]"}`}>
                    <div className="font-semibold text-[color:var(--navy)]">{a.title}</div>
                    <div className="mt-1 text-sm text-[#0C3A57]/70">{a.text}</div>
                  </div>
                ))}
              </div>

              <Label lit={stage === 3}>Builds</Label>
              <div className={`rounded-2xl border border-[#2B2F36]/15 bg-[#2B2F36]/[0.04] px-5 py-5 text-center transition-opacity duration-500 ${rowDim(3)}`}>
                <div className="font-display text-2xl text-[color:var(--deep)]">Their profile</div>
                <div className="mt-3 flex flex-wrap justify-center gap-2">
                  {j.profile.map((x) => <span key={x} className="rounded-full border border-[#2B2F36]/10 bg-white/70 px-3 py-1 text-sm text-[#2B2F36]/70">{x}</span>)}
                </div>
              </div>

              <Label lit={stage === 4}>What they gain</Label>
              <div className="grid gap-3 sm:grid-cols-3">
                {j.gains.map((g, i) => (
                  <div key={g.title} {...bind("gain", i)} className={`${node} ${dim(litGains, i, 4)} ${litGains.has(i) ? "border-[#2E8B62] bg-[#2E8B62]/[0.12] -translate-y-0.5 shadow-md" : "border-[#2E8B62]/30 bg-[#2E8B62]/[0.05]"}`}>
                    <div className="font-semibold text-[#1F6B4A]">{g.title}</div>
                    <div className="mt-1 text-sm text-[#1F6B4A]/75">{g.text}</div>
                  </div>
                ))}
              </div>

              {j.highlight && <div className="mt-6 rounded-2xl border border-[#2E8B62]/30 bg-[#2E8B62]/[0.07] px-5 py-4 text-center font-semibold text-[#1F6B4A]">{j.highlight}</div>}

              <div className="mt-8 text-center font-serif text-lg italic text-[#2B2F36]/60">{j.quote}</div>
              <div className="mt-4 flex items-center justify-center gap-3 rounded-2xl bg-[color:var(--deep)] px-5 py-4 text-[color:var(--ivory)]">
                <span className="text-white/60">Journey:</span>
                <span className="font-semibold">{j.journey[0]}</span>
                <motion.span animate={{ x: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}><ArrowRight size={18} className="text-[color:var(--brass)]" /></motion.span>
                <span className="font-semibold">{j.journey[1]}</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default RoleJourney;
