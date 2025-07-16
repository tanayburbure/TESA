import { motion } from "framer-motion";

export default function Transition() {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed inset-0 bg-black"
    />
  );
}
