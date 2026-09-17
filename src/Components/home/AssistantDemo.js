import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Sparkles, Database, BookOpen, Globe, UserPlus, FileText } from "lucide-react";

const script = [
  { who: "user", text: "Do I need permission from the municipality to open a shop?" },
  {
    who: "ai",
    title: "Yes, in most cases.",
    lines: [
      "Trade Licence from your Municipal Corporation / Panchayat",
      "Shops & Establishments registration within 30 days",
      "Udyam registration: free, takes 10 minutes",
      "GST registration if turnover crosses ₹40 lakh (₹20 lakh for services)",
      "Fire & health NOCs for food, retail or hospitality outlets",
    ],
  },
  { who: "expert", text: "Mamta Kaur · Agri-marketing & FPO expert can guide you further →" },
  {
    who: "network",
    title: "On AskBiz",
    people: [{ name: "Mamta Kaur", role: "Agri-marketing & FPO expert" }, { name: "Rohan Shetty", role: "Retail licensing consultant" }],
    posts: [{ author: "Rohan Shetty", text: "5 permits every new shop owner forgets" }],
  },
];
const sourceIcons = [Database, BookOpen, Globe];

const AssistantDemo = () => {
  const ref = useRef(null);
  const scrollRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!inView || step >= script.length * 2) return;
    const t = setTimeout(() => setStep((s) => s + 1), step % 2 ? 1300 : 700);
    return () => clearTimeout(t);
  }, [inView, step]);

  const shown = script.slice(0, Math.ceil(step / 2));
  const typing = step % 2 === 1 && step < script.length * 2;

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [shown.length, typing]);

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-[420px] rounded-[28px] border border-white/15 bg-white/[0.06] p-5 shadow-[0_8px_40px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-2xl">
      <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-white"><Sparkles size={16} className="text-[color:var(--brass)]" /> Business Assistant</div>
        <div className="flex gap-1.5">{sourceIcons.map((I, i) => <span key={i} className="grid h-7 w-7 place-items-center rounded-full bg-white/5 text-[color:var(--mist)]"><I size={13} /></span>)}</div>
      </div>
      <div ref={scrollRef} className="flex h-[340px] flex-col gap-3 overflow-y-auto pr-1 scroll-smooth">
        <AnimatePresence>
          {shown.map((m, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={
                m.who === "user"
                  ? "ml-auto max-w-[80%] rounded-2xl rounded-br-sm bg-[#2F6BFF] px-4 py-3 text-sm text-white"
                  : m.who === "expert"
                  ? "rounded-xl border border-[#C9A45C]/40 bg-[#C9A45C]/[0.06] px-4 backdrop-blur-md py-3 text-sm text-[color:var(--brass)]"
                  : m.who === "network"
                  ? "max-w-[92%] rounded-2xl rounded-bl-sm border border-white/15 bg-white/10 px-4 py-4 text-sm text-white backdrop-blur-md"
                  : "max-w-[92%] rounded-2xl rounded-bl-sm border border-white/15 bg-white/10 px-4 py-3 text-sm text-white backdrop-blur-md"
              }>
              {m.who === "ai" ? (
                <>
                  <div className="mb-2 font-semibold">{m.title}</div>
                  <ul className="space-y-1.5">{m.lines.map((l, j) => (
                    <motion.li key={l} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + j * 0.15 }} className="flex gap-2"><span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#2F6BFF]" />{l}</motion.li>
                  ))}</ul>
                </>
              ) : m.who === "network" ? (
                <>
                  <div className="mb-3 font-semibold text-[color:var(--brass)]">{m.title}</div>
                  <div className="mb-1.5 text-xs uppercase tracking-wide text-white/40">Connect with these people</div>
                  <div className="space-y-2">
                    {m.people.map((p) => (
                      <div key={p.name} className="flex items-center justify-between gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                        <div>
                          <div className="text-sm font-medium text-white">{p.name}</div>
                          <div className="text-xs text-white/50">{p.role}</div>
                        </div>
                        <button type="button" className="flex shrink-0 items-center gap-1 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-white/20">
                          <UserPlus size={13} /> View profile
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="mb-1.5 mt-4 text-xs uppercase tracking-wide text-white/40">View these posts</div>
                  <div className="space-y-2">
                    {m.posts.map((post) => (
                      <div key={post.text} className="flex items-center justify-between gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                        <div>
                          <div className="text-sm text-white">{post.text}</div>
                          <div className="text-xs text-white/50">{post.author}</div>
                        </div>
                        <button type="button" className="flex shrink-0 items-center gap-1 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-white/20">
                          <FileText size={13} /> View post
                        </button>
                      </div>
                    ))}
                  </div>
                </>
              ) : m.text}
            </motion.div>
          ))}
        </AnimatePresence>
        {typing && <div className="typing w-fit rounded-2xl bg-white/10 px-4 py-3"><span /><span /><span /></div>}
      </div>
      <div className="mt-4 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white/40 backdrop-blur-md">Ask about starting a business…</div>
    </div>
  );
};

export default AssistantDemo;
