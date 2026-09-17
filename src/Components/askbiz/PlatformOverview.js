import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Store, BadgeCheck, Users, Rss, Network, Database, BookOpen, Globe, Sparkles, MousePointerClick } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";

const roleIcons = { individual: User, business: Store, expert: BadgeCheck };
const outputIcons = [Users, Rss, Network];
const sourceIcons = [Database, BookOpen, Globe];

// Lines between a row of three and a single centred node. `into` = converge, otherwise fan out.
const Connector = ({ into, active }) => (
  <svg viewBox="0 0 300 70" preserveAspectRatio="none" className="hidden h-16 w-full md:block" aria-hidden="true">
    {[50, 150, 250].map((x, i) => {
      const lit = active === null || active === i;
      const d = into ? `M${x} 0 L150 70` : `M150 0 L${x} 70`;
      return (
        <g key={x}>
          <path d={d} stroke="rgba(255,255,255,0.12)" strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" />
          <motion.path d={d} stroke="var(--brass)" strokeWidth="1.5" fill="none" vectorEffect="non-scaling-stroke" strokeDasharray="4 6"
            animate={{ strokeDashoffset: [0, -20], opacity: lit ? 0.9 : 0.1 }} transition={{ strokeDashoffset: { repeat: Infinity, duration: 1.2, ease: "linear" }, opacity: { duration: 0.3 } }} />
        </g>
      );
    })}
  </svg>
);

const VLine = () => (
  <div className="mx-auto h-10 w-px overflow-hidden bg-white/10 md:h-14">
    <motion.div className="h-1/2 w-full bg-[color:var(--brass)]" animate={{ y: ["-100%", "200%"] }} transition={{ repeat: Infinity, duration: 1.6, ease: "linear" }} />
  </div>
);

const glass = "border border-white/15 bg-white/[0.06] backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.12)]";

const PlatformOverview = ({ p }) => {
  const { roles, hub, outputs, ai } = p.overview;
  const [sel, setSel] = useState({ kind: "role", i: 0 });
  const [hoverRole, setHoverRole] = useState(null);
  const [hoverOut, setHoverOut] = useState(null);

  const detail =
    sel.kind === "role" ? { title: roles[sel.i].title, text: roles[sel.i].text }
    : sel.kind === "hub" ? hub.items[sel.i]
    : sel.kind === "out" ? { title: outputs[sel.i].title, text: outputs[sel.i].text }
    : ai.sources[sel.i];

  const isSel = (kind, i) => sel.kind === kind && sel.i === i;
  const ring = (on) => (on ? "border-[color:var(--brass)]/70 bg-white/[0.12]" : "hover:border-white/30 hover:bg-white/[0.09]");

  return (
    <section className="grain relative overflow-hidden bg-[color:var(--deep)] py-16 text-[color:var(--ivory)] md:py-20">
      <div className="absolute right-[-10%] top-[5%] h-[520px] w-[520px] rounded-full bg-[#2F6BFF] opacity-[0.18] blur-[150px]" />
      <div className="absolute bottom-[10%] left-[-8%] h-[420px] w-[420px] rounded-full bg-[#C9A45C] opacity-[0.12] blur-[150px]" />
      <div className="container-x relative z-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <SectionHeading eyebrow="Platform overview" title="A triangle of trust, wired together by AI." italic={[3, 4]} dark>
            {p.triangle}
          </SectionHeading>
          <Reveal delay={0.2} className="flex items-center gap-2 text-sm text-white/45 lg:justify-end">
            <MousePointerClick size={16} className="text-[color:var(--brass)]" /> Tap any node to explore how it works
          </Reveal>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_300px]">
          <div>
            {/* Roles */}
            <div className="grid gap-3 md:grid-cols-3">
              {roles.map((r, i) => {
                const Icon = roleIcons[r.key];
                return (
                  <button key={r.key} type="button" onClick={() => setSel({ kind: "role", i })} onMouseEnter={() => setHoverRole(i)} onMouseLeave={() => setHoverRole(null)}
                    className={`rounded-2xl p-4 text-left transition-all duration-300 ${glass} ${ring(isSel("role", i))}`}>
                    <Icon size={20} className="text-[color:var(--brass)]" />
                    <div className="mt-3 font-display text-2xl">{r.title}</div>
                    <div className="mt-1 text-sm text-white/60">{r.sub}</div>
                    <div className="mt-0.5 text-sm text-[color:var(--mist)]">{r.verbs}</div>
                  </button>
                );
              })}
            </div>
            <Connector into active={hoverRole} />
            <div className="h-4 md:hidden" />

            {/* Hub */}
            <div className={`rounded-3xl p-5 md:p-6 ${glass}`}>
              <div className="text-center font-display text-3xl">{hub.title}</div>
              <div className="mt-5 grid grid-cols-2 gap-2 md:grid-cols-3">
                {hub.items.map((it, i) => (
                  <button key={it.title} type="button" onClick={() => setSel({ kind: "hub", i })}
                    className={`rounded-full border border-white/15 bg-white/[0.03] px-3 py-2 text-sm text-white/75 backdrop-blur-md transition-all duration-300 ${isSel("hub", i) ? "border-[color:var(--brass)]/70 bg-[color:var(--brass)]/15 text-white" : "hover:border-white/30 hover:bg-white/[0.09]"}`}>
                    {it.title}
                  </button>
                ))}
              </div>
              <div className="mt-5 text-center font-serif text-lg italic text-white/55">{hub.tagline}</div>
            </div>
            <Connector active={hoverOut} />
            <div className="h-4 md:hidden" />

            {/* Outputs */}
            <div className="grid gap-3 md:grid-cols-3">
              {outputs.map((o, i) => {
                const Icon = outputIcons[i];
                return (
                  <button key={o.title} type="button" onClick={() => setSel({ kind: "out", i })} onMouseEnter={() => setHoverOut(i)} onMouseLeave={() => setHoverOut(null)}
                    className={`rounded-2xl p-4 text-left transition-all duration-300 ${glass} ${ring(isSel("out", i))}`}>
                    <Icon size={20} className="text-[color:var(--mist)]" />
                    <div className="mt-3 font-display text-2xl">{o.title}</div>
                    {o.lines.map((l) => <div key={l} className="mt-1 text-sm text-white/55">{l}</div>)}
                  </button>
                );
              })}
            </div>

            {/* AI layer */}
            <div className="my-8 flex items-center gap-4">
              <span className="h-px flex-1 border-t border-dashed border-white/15" />
              <span className="eyebrow text-[color:var(--brass)]">AI assistant layer</span>
              <span className="h-px flex-1 border-t border-dashed border-white/15" />
            </div>
            <div className={`rounded-3xl p-5 md:p-6 ${glass}`}>
              <div className="flex items-center justify-center gap-2 font-display text-3xl"><Sparkles size={20} className="text-[color:var(--brass)]" />{ai.title}</div>
              <div className="mt-5 grid gap-3 md:grid-cols-3">
                {ai.sources.map((s, i) => {
                  const Icon = sourceIcons[i];
                  return (
                    <button key={s.title} type="button" onClick={() => setSel({ kind: "ai", i })}
                      className={`flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-sm backdrop-blur-md transition-all duration-300 ${isSel("ai", i) ? "border-[#2F6BFF]/70 bg-[#2F6BFF]/20" : "hover:border-white/30 hover:bg-white/[0.09]"}`}>
                      <Icon size={15} className="text-[color:var(--mist)]" /> {s.title}
                    </button>
                  );
                })}
              </div>
              <VLine />
              <div className="text-center font-serif text-lg italic text-white/70">{ai.result}</div>
            </div>
          </div>

          {/* Detail panel */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className={`rounded-3xl p-6 ${glass}`}>
              <div className="eyebrow text-[color:var(--brass)]">Selected</div>
              <AnimatePresence mode="wait">
                <motion.div key={`${sel.kind}-${sel.i}`} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.35 }}>
                  <div className="mt-4 font-display text-3xl">{detail.title}</div>
                  <p className="mt-3 leading-relaxed text-white/65">{detail.text}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformOverview;
