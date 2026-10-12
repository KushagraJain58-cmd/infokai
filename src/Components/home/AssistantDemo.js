import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronLeft, BadgeCheck, FileText, Users, Signal, Wifi, BatteryFull } from "lucide-react";

// The AskBiz "Ask" screen, drawn at the app's 390px design width and scaled to fit.
// Every answer points to something on AskBiz itself: experts, posts, communities, suppliers.
const W = 390, H = 844;
const BLUE = "#1465FE";

const script = [
  { who: "me", text: "I'm opening a bakery in Pune. Who on AskBiz can help me with the licences?" },
  {
    who: "bot",
    title: "Here's who can help, from AskBiz:",
    groups: [
      { tag: "Expert", items: [{ ini: "AK", t: "Ananya Kulkarni", v: true, s: "FSSAI licensing · Pune · ★ 4.9", a: "Connect" }] },
      { tag: "Post", items: [{ icon: FileText, t: "“Our FSSAI and PMC licences, step by step”", s: "Crumb & Co. Bakehouse · 86 helpful", a: "View" }] },
      { tag: "Community", items: [{ icon: Users, t: "Food Processing Founders", s: "1.8k members · active today", a: "Join" }] },
    ],
  },
  { who: "me", text: "Any flour suppliers who deliver to Hadapsar?" },
  {
    who: "bot",
    title: "2 verified suppliers on AskBiz deliver there:",
    groups: [{ items: [
      { ini: "SB", t: "Shree Balaji Flour Mills", v: true, s: "Bhosari · MOQ 100 kg", a: "Message" },
      { ini: "DA", t: "Deccan Agro Foods", v: true, s: "Hadapsar · bakery premixes", a: "Message" },
    ] }],
  },
];

const Item = ({ ini, icon: Icon, t, v, s, a }) => (
  <div className="mt-[7px] flex items-center gap-[10px] rounded-[12px] border border-[#EDF1F3] bg-white px-[10px] py-[9px]">
    <div className="grid h-[34px] w-[34px] shrink-0 place-items-center rounded-[10px] bg-[#E7F0FF] text-[12px] font-bold" style={{ color: BLUE }}>
      {Icon ? <Icon size={17} /> : ini}
    </div>
    <div className="min-w-0">
      <div className="flex items-center gap-1 text-[12.5px] font-bold text-black">{t}{v && <BadgeCheck size={13} color={BLUE} />}</div>
      <div className="mt-px text-[11.5px] text-[#777]">{s}</div>
    </div>
    <span className="ml-auto shrink-0 text-[12px] font-bold" style={{ color: BLUE }}>{a}</span>
  </div>
);

const AssistantDemo = ({ className = "" }) => {
  const ref = useRef(null);
  const screenRef = useRef(null);
  const threadRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [step, setStep] = useState(0);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = screenRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setScale(e.contentRect.width / W));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Step 2k waits for message k (typing indicator if it's a reply); step 2k+1 shows it.
  useEffect(() => {
    if (!inView || step >= script.length * 2) return;
    const delay = step % 2 ? 1100 : script[step / 2].who === "bot" ? 1500 : 500;
    const t = setTimeout(() => setStep((s) => s + 1), delay);
    return () => clearTimeout(t);
  }, [inView, step]);

  const shown = script.slice(0, Math.floor((step + 1) / 2));
  const typing = step % 2 === 0 && script[step / 2]?.who === "bot";

  useEffect(() => {
    const el = threadRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [shown.length, typing]);

  return (
    <div ref={ref} className={`relative w-full rounded-[34px] bg-[#0b0f14] p-[9px] shadow-[0_40px_80px_-30px_rgba(3,19,30,.7)] ${className}`}>
      <div className="absolute left-1/2 top-[14px] z-10 h-[18px] w-[80px] -translate-x-1/2 rounded-full bg-[#0b0f14]" />
      <div ref={screenRef} className="relative aspect-[9/19.5] overflow-hidden rounded-[26px] bg-white">
        <div className="absolute left-0 top-0 flex origin-top-left flex-col font-[Manrope,sans-serif] text-[#444]" style={{ width: W, height: H, transform: `scale(${scale})` }}>
          <div className="flex h-[46px] shrink-0 items-center justify-between pl-[30px] pr-[26px] text-[15px] font-bold text-black">
            <span>9:41</span><span className="flex items-center gap-[5px]"><Signal size={17} /><Wifi size={17} /><BatteryFull size={17} /></span>
          </div>
          <div className="flex shrink-0 items-center justify-between border-b border-[#EDF1F3] px-[18px] pb-[12px] pt-[4px]">
            <ChevronLeft size={24} color="#000" />
            <span className="text-[18px] font-bold text-black">Ask</span>
            <span className="font-semibold text-[#777]">Clear</span>
          </div>
          <div ref={threadRef} className="flex flex-1 flex-col gap-[10px] overflow-hidden px-[16px] py-[14px]">
            <AnimatePresence initial={false}>
              {shown.map((m, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className={m.who === "me"
                    ? "max-w-[82%] self-end rounded-[18px_18px_4px_18px] px-[14px] py-[10px] text-[13.5px] font-medium leading-[1.45] text-white"
                    : "max-w-[92%] self-start rounded-[18px_18px_18px_4px] border border-[#EDF1F3] p-[12px] text-[13px] leading-[1.45]"}
                  style={m.who === "me" ? { background: BLUE } : undefined}>
                  {m.who === "me" ? m.text : (
                    <>
                      <div className="mb-[8px] font-bold text-black">{m.title}</div>
                      {m.groups.map((g, gi) => (
                        <div key={gi} className={gi ? "mt-[9px]" : ""}>
                          {g.tag && <div className="text-[9.5px] font-extrabold uppercase tracking-[.06em]" style={{ color: BLUE }}>{g.tag}</div>}
                          {g.items.map((it, ii) => (
                            <motion.div key={it.t} initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 + (gi + ii) * 0.12 }}>
                              <Item {...it} />
                            </motion.div>
                          ))}
                        </div>
                      ))}
                    </>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
            {typing && <div className="typing w-fit self-start rounded-[18px] border border-[#EDF1F3] px-[14px] py-[12px]"><span /><span /><span /></div>}
          </div>
          <div className="flex shrink-0 gap-[8px] px-[14px] pb-[26px] pt-[8px]">
            <div className="flex-1 rounded-full bg-[#F8F8F8] px-[16px] py-[13px] text-[13px] text-[#6C7278]">Ask about starting a business…</div>
            <div className="grid place-items-center rounded-full px-[18px] text-[13px] font-bold text-white" style={{ background: BLUE }}>Send</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssistantDemo;
