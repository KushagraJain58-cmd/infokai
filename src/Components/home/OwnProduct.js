import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "../common/Reveal";

// Deliberately small: AskBiz is one product among the company's work, not the headline.
const OwnProduct = () => {
  return (
    <section className="bg-[color:var(--deep)] py-16 text-[color:var(--ivory)]">
      <Reveal className="container-x flex flex-col justify-between gap-8 md:flex-row md:items-center">
        <div className="max-w-2xl">
          <div className="eyebrow text-[color:var(--brass)]">AskBiz</div>
          <p className="mt-4 font-display text-2xl leading-snug md:text-3xl">An AI-powered business network connecting India's MSMEs with verified experts, suppliers and peers.</p>
        </div>
        <Link to="/askbiz" className="btn btn-light cut w-fit shrink-0">Learn more <ArrowRight size={16} /></Link>
      </Reveal>
    </section>
  );
};

export default OwnProduct;
