import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// Full screenshot in a lightbox. Portalled to <body> so transformed parents don't break `fixed`.
const Lightbox = ({ src, label, onClose }) => {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  return createPortal(
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}
      className="fixed inset-0 z-[100] flex cursor-zoom-out flex-col items-center justify-center gap-4 bg-[#03131e]/90 p-4 backdrop-blur-sm md:p-10">
      <button type="button" onClick={onClose} aria-label="Close" className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"><X size={18} /></button>
      <motion.img initial={{ scale: 0.96 }} animate={{ scale: 1 }} src={src} alt={label} className="max-h-[85vh] max-w-full rounded-lg shadow-2xl" />
      <div className="eyebrow text-white/60">{label}</div>
    </motion.div>,
    document.body
  );
};

// Browser or phone chrome around a product screenshot; shows a placeholder until the image exists.
const ScreenFrame = ({ src, label, device = "browser", className = "" }) => {
  const [missing, setMissing] = useState(false);
  const [open, setOpen] = useState(false);

  const inner = missing ? (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-6 text-center" style={{ background: "linear-gradient(135deg,#0C3A57,#061F30)", color: "var(--mist)", minHeight: device === "phone" ? 460 : 260 }}>
      <span className="font-display text-xl text-[color:var(--ivory)]">{label}</span>
      <span className="text-xs opacity-70">public{src}</span>
    </div>
  ) : (
    <img src={src} alt={label} loading="lazy" onError={() => setMissing(true)} className="block h-full w-full object-cover object-top" />
  );

  const zoom = !missing && { role: "button", tabIndex: 0, "aria-label": `Enlarge ${label}`, onClick: () => setOpen(true), onKeyDown: (e) => e.key === "Enter" && setOpen(true) };
  const lightbox = <AnimatePresence>{open && <Lightbox src={src} label={label} onClose={() => setOpen(false)} />}</AnimatePresence>;

  if (device === "phone") {
    return (
      <div className={`relative rounded-[34px] bg-[#0b0f14] p-[9px] shadow-[0_40px_80px_-30px_rgba(3,19,30,.7)] ${className}`}>
        <div className="absolute left-1/2 top-[14px] z-10 h-[18px] w-[80px] -translate-x-1/2 rounded-full bg-[#0b0f14]" />
        <div {...zoom} className="aspect-[9/19.5] cursor-zoom-in overflow-hidden rounded-[26px] bg-white">{inner}</div>
        {lightbox}
      </div>
    );
  }
  return (
    <div className={`overflow-hidden rounded-xl bg-[#0b0f14] shadow-[0_50px_100px_-40px_rgba(3,19,30,.65)] ring-1 ring-white/10 ${className}`}>
      <div className="flex items-center gap-2 px-4 py-3">
        {["#ff5f57", "#febc2e", "#28c840"].map((c) => <span key={c} className="h-[10px] w-[10px] rounded-full" style={{ background: c }} />)}
        <span className="ml-3 flex-1 truncate rounded-md bg-white/5 px-3 py-1 text-[11px] text-white/40">{label}</span>
      </div>
      <div {...zoom} className="aspect-[16/8.7] cursor-zoom-in overflow-hidden bg-white">{inner}</div>
      {lightbox}
    </div>
  );
};

export default ScreenFrame;
