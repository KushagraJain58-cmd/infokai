import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import InfokaiMark from "../../assets/svg/InfokaiMark";

const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
        style={{ background: scrolled ? "rgba(6,31,48,.78)" : "transparent", backdropFilter: scrolled ? "blur(14px)" : "none", borderBottom: scrolled ? "1px solid rgba(255,255,255,.06)" : "1px solid transparent" }}
      >
        <div className={`container-x flex items-center justify-between transition-all duration-500 ${scrolled ? "py-3" : "py-6"}`}>
          <Link to="/" className="flex items-center gap-3 text-[color:var(--ivory)]">
            <span className="rounded-sm bg-[color:var(--ivory)] p-1.5"><InfokaiMark size={26} color="#0C3A57" /></span>
            <span className="font-display text-xl tracking-[0.2em]">INFOKAI</span>
          </Link>
          <nav className="hidden items-center gap-9 md:flex">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end className={({ isActive }) => `link-u text-sm text-[#F5F1E8]/80 hover:text-[color:var(--ivory)] ${isActive ? "active text-[color:var(--ivory)]" : ""}`}>
                {l.label}
              </NavLink>
            ))}
            <Link to="/products/askbiz" className="btn btn-light !py-2.5 !px-4 text-xs">Try AskBiz <ArrowUpRight size={14} /></Link>
          </nav>
          <button onClick={() => setOpen((o) => !o)} className="relative z-50 h-10 w-10 md:hidden" aria-label="Menu">
            <span className={`absolute left-2 right-2 h-px bg-[color:var(--ivory)] transition-all ${open ? "top-5 rotate-45" : "top-4"}`} />
            <span className={`absolute left-2 right-2 h-px bg-[color:var(--ivory)] transition-all ${open ? "top-5 -rotate-45" : "top-6"}`} />
          </button>
        </div>
      </motion.header>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-center gap-4 bg-[color:var(--deep)] px-8 md:hidden"
            initial={{ clipPath: "circle(0% at 92% 4%)" }}
            animate={{ clipPath: "circle(150% at 92% 4%)" }}
            exit={{ clipPath: "circle(0% at 92% 4%)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            {links.map((l, i) => (
              <motion.div key={l.to} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25 + i * 0.07 }}>
                <Link to={l.to} className="font-display text-5xl text-[color:var(--ivory)]">{l.label}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
