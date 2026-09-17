import { motion } from "framer-motion";

// Word-by-word masked rise. Pass `italic` words (by index) to set them in Fraunces italic.
const SplitText = ({ text, className = "", delay = 0, italic = [], inView = false }) => {
  const words = text.split(" ");
  const trigger = inView
    ? { whileInView: "show", viewport: { once: true, margin: "-60px" } }
    : { animate: "show" };
  return (
    <motion.span className={className} initial="hidden" {...trigger} transition={{ staggerChildren: 0.07, delayChildren: delay }}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em]">
          <motion.span
            className={`inline-block ${italic.includes(i) ? "font-serif italic" : ""}`}
            variants={{ hidden: { y: "110%" }, show: { y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } } }}
          >
            {w}&nbsp;
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};

export default SplitText;
