import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import PageTransition from "../Components/common/PageTransition";
import PageHero from "../Components/common/PageHero";
import Reveal from "../Components/common/Reveal";
import ScreenFrame from "../Components/common/ScreenFrame";
import { getProducts } from "../context/ProductsContext";

const Products = () => (
  <PageTransition>
    <PageHero eyebrow="Products" title="Three platforms. One standard." italic={[2, 3]}>
      From AI-powered business networks to school SaaS and academic publishing — every product we ship is built to last.
    </PageHero>
    <section className="bg-[color:var(--paper)] py-28">
      <div className="container-x flex flex-col gap-32">
        {getProducts().map((p, i) => (
          <div key={p.slug} className={`grid items-center gap-14 lg:grid-cols-2 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <Reveal>
              <Link to={`/products/${p.slug}`} className="group block">
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
                  {p.shots[0].device === "phone" ? (
                    <div className="cut flex justify-center gap-5 bg-[color:var(--deep)] px-6 py-14">
                      {p.shots.slice(0, 2).map((s, k) => <ScreenFrame key={s.src} {...s} className={`w-[42%] max-w-[230px] ${k ? "mt-12" : ""}`} />)}
                    </div>
                  ) : <ScreenFrame {...p.shots[0]} />}
                </motion.div>
              </Link>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="eyebrow text-[color:var(--navy)]">{p.kicker}</div>
              <h2 className="mt-5 font-display text-6xl text-[color:var(--deep)] md:text-7xl">{p.name}</h2>
              <p className="mt-3 font-serif text-2xl italic font-light text-[#061F30]/75">{p.tagline}</p>
              <p className="mt-6 leading-relaxed text-[#2B2F36]/70">{p.short}</p>
              <Link to={`/products/${p.slug}`} className="btn btn-navy mt-8">Explore {p.name} <ArrowUpRight size={16} /></Link>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  </PageTransition>
);

export default Products;
