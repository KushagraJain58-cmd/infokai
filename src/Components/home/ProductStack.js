import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import ScreenFrame from "../common/ScreenFrame";
import { getProducts } from "../../context/ProductsContext";

const palettes = {
  pioneer: { bg: "#ECEBFA", accent: "#4F46E5" },
  jamsd: { bg: "#F3EBDA", accent: "#B8862F" },
  askbiz: { bg: "#E4EDFB", accent: "#2F6BFF" },
};

const Card = ({ product, index, total }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const imgY = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const pal = palettes[product.slug];

  return (
    <div ref={ref} className="sticky" style={{ top: 90 + index * 26 }}>
      <motion.div style={{ scale, background: pal.bg }} className="cut grid min-h-[70vh] items-center gap-10 overflow-hidden p-8 md:grid-cols-[1fr_1.3fr] md:p-14">
        <div>
          <div className="eyebrow" style={{ color: pal.accent }}>0{index + 1} / 0{total} — {product.kicker}</div>
          <h3 className="mt-6 font-display text-5xl text-[color:var(--deep)] md:text-7xl">{product.name}</h3>
          <p className="mt-3 font-serif text-2xl italic font-light text-[#061F30]/80">{product.tagline}</p>
          <p className="mt-6 max-w-md leading-relaxed text-[#2B2F36]/70">{product.short}</p>
          <Link to={`/products/${product.slug}`} className="btn btn-navy mt-8">View case <ArrowUpRight size={16} /></Link>
        </div>
        <motion.div style={{ y: imgY }} className="relative">
          <ScreenFrame {...product.shots[0]} />
          {product.shots[1] && product.shots[1].device === "browser" && (
            <ScreenFrame {...product.shots[1]} className="absolute -bottom-10 -left-6 hidden w-[55%] md:block" />
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

const ProductStack = () => {
  const list = getProducts().filter((p) => !p.flagship);
  return (
    <section className="bg-[color:var(--paper)] py-28 md:py-40">
      <div className="container-x">
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading eyebrow="Selected work" title="Built for people who build futures." italic={[4, 5]} />
          <Link to="/products" className="link-u w-fit text-sm font-semibold text-[color:var(--navy)]">See all products →</Link>
        </div>
        <div className="flex flex-col gap-10 pb-10">
          {list.map((p, i) => <Card key={p.slug} product={p} index={i} total={list.length} />)}
        </div>
      </div>
    </section>
  );
};

export default ProductStack;
