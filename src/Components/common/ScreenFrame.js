import { useState } from "react";

// Browser or phone chrome around a product screenshot; shows a placeholder until the image exists.
const ScreenFrame = ({ src, label, device = "browser", className = "" }) => {
  const [missing, setMissing] = useState(false);
  const inner = missing ? (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-6 text-center" style={{ background: "linear-gradient(135deg,#0C3A57,#061F30)", color: "var(--mist)", minHeight: device === "phone" ? 460 : 260 }}>
      <span className="font-display text-xl text-[color:var(--ivory)]">{label}</span>
      <span className="text-xs opacity-70">public{src}</span>
    </div>
  ) : (
    <img src={src} alt={label} loading="lazy" onError={() => setMissing(true)} className="block h-full w-full object-cover object-top" />
  );

  if (device === "phone") {
    return (
      <div className={`relative rounded-[34px] bg-[#0b0f14] p-[9px] shadow-[0_40px_80px_-30px_rgba(3,19,30,.7)] ${className}`}>
        <div className="absolute left-1/2 top-[14px] z-10 h-[18px] w-[80px] -translate-x-1/2 rounded-full bg-[#0b0f14]" />
        <div className="aspect-[9/19.5] overflow-hidden rounded-[26px] bg-white">{inner}</div>
      </div>
    );
  }
  return (
    <div className={`overflow-hidden rounded-xl bg-[#0b0f14] shadow-[0_50px_100px_-40px_rgba(3,19,30,.65)] ring-1 ring-white/10 ${className}`}>
      <div className="flex items-center gap-2 px-4 py-3">
        {["#ff5f57", "#febc2e", "#28c840"].map((c) => <span key={c} className="h-[10px] w-[10px] rounded-full" style={{ background: c }} />)}
        <span className="ml-3 flex-1 truncate rounded-md bg-white/5 px-3 py-1 text-[11px] text-white/40">{label}</span>
      </div>
      <div className="aspect-[16/9.2] overflow-hidden bg-white">{inner}</div>
    </div>
  );
};

export default ScreenFrame;
