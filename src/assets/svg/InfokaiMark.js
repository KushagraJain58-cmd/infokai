import { motion } from "framer-motion";

// The Infokai mark: two offset blocks with hairline rails. `animate` assembles it piece by piece.
const pieces = [
  { d: "M309 34v178H203V111z", from: { y: -60, opacity: 0 } },
  { d: "M63 212l8-6h132v6z", from: { x: -80, opacity: 0 } },
  { d: "M203 300h106v101l-106 77z", from: { y: 60, opacity: 0 } },
  { d: "M309 300h139l-9 6H309z", from: { x: 80, opacity: 0 } },
];

const InfokaiMark = ({ size = 40, color = "currentColor", animate = false, delay = 0, className = "" }) => (
  <svg viewBox="0 0 512 512" width={size} height={size} className={className} aria-hidden="true">
    {pieces.map((p, i) => (
      <motion.path
        key={p.d}
        d={p.d}
        fill={color}
        initial={animate ? p.from : false}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 1.1, delay: delay + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
      />
    ))}
  </svg>
);

export default InfokaiMark;
