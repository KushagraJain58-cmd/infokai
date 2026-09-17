import { motion } from "framer-motion";

const PageTransition = ({ children }) => (
  <>
    <motion.div
      className="fixed inset-0 z-[60] pointer-events-none"
      style={{ background: "var(--deep)", transformOrigin: "top" }}
      initial={{ scaleY: 1 }}
      animate={{ scaleY: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
      exit={{ scaleY: 1, originY: 1, transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } }}
    />
    {children}
  </>
);

export default PageTransition;
