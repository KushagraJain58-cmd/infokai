import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import InfokaiMark from "../../assets/svg/InfokaiMark";
import { getProducts } from "../../context/ProductsContext";

const Footer = () => (
  <footer className="grain relative overflow-hidden bg-[color:var(--abyss)] pt-24 text-[color:var(--ivory)]">
    <div className="container-x relative z-10">
      <div className="grid gap-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <InfokaiMark size={48} color="var(--ivory)" />
          <p className="mt-6 max-w-sm font-serif text-2xl font-light leading-snug text-white/80">
            We build software with <em>quiet precision</em> — for the people and businesses that power India.
          </p>
        </div>
        <div>
          <div className="eyebrow mb-5 text-[color:var(--brass)]">Products</div>
          {getProducts().map((p) => (
            <Link key={p.slug} to={`/products/${p.slug}`} className="link-u mb-3 block w-fit text-white/70 hover:text-white">{p.name}</Link>
          ))}
        </div>
        <div>
          <div className="eyebrow mb-5 text-[color:var(--brass)]">Company</div>
          {[["About", "/about"], ["Contact", "/contact"]].map(([l, to]) => (
            <Link key={to} to={to} className="link-u mb-3 block w-fit text-white/70 hover:text-white">{l}</Link>
          ))}
          <a href="mailto:hello@infokai.com" className="mt-6 inline-flex items-center gap-2 text-white hover:text-[color:var(--brass)]">hello@infokai.com <ArrowUpRight size={16} /></a>
        </div>
      </div>
      <div className="pointer-events-none mt-20 select-none font-display leading-[0.8] text-white/[0.04]" style={{ fontSize: "clamp(5rem,22vw,20rem)" }}>INFOKAI</div>
      <div className="flex flex-col justify-between gap-2 border-t border-white/10 py-6 text-xs text-white/40 md:flex-row">
        <span>© {new Date().getFullYear()} Infokai. All rights reserved.</span>
        <span>Crafted in India.</span>
      </div>
    </div>
  </footer>
);

export default Footer;
