import React from "react";
import { motion } from "framer-motion";

/**
 * TryNew.jsx
 * ----------------------
 * A single-file React component that recreates the video animation using
 * Framer Motion + Tailwind CSS. This is a flexible starting point — replace
 * placeholder assets, tweak timing, easing and keyframes to match the video
 * exactly.
 *
 * Usage:
 * 1. Drop your extracted frames or other image assets into `public/frames/`
 *    (or supply image URLs via the `frames` prop).
 * 2. Import and use <TryNew /> in your app.
 *
 * Notes:
 * - Tailwind classes are used for layout; adjust according to your project.
 * - The animation is built from small, composable variants so you can match
 *   movement, opacity, scaling, and rotation precisely.
 */

const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: (custom = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.2, 0.8, 0.2, 1],
      delay: custom * 0.06,
    },
  }),
};

const floatVariant = {
  floatA: {
    y: [0, -10, 0],
    x: [0, 6, 0],
    transition: {
      duration: 3.6,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    },
  },
  floatB: {
    y: [0, -6, 0],
    x: [0, -6, 0],
    transition: {
      duration: 4.4,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    },
  },
};

export default function TryNew({ frames = [], autoplay = true }) {
  // `frames` is an optional array of image URLs (strings). If empty it will
  // render placeholder shapes that mimic motion.

  // Helper: render either image frames (if provided) or placeholder boxes
  const FrameItems = () => {
    if (frames && frames.length > 0) {
      // show first 6 frames as layered cards for parallax-style animation
      return frames.slice(0, 6).map((src, i) => (
        <motion.img
          key={src}
          src={src}
          alt={`frame-${i}`}
          custom={i}
          variants={cardVariant}
          initial="hidden"
          animate={autoplay ? "show" : "hidden"}
          className={`absolute inset-0 m-auto w-3/4 max-w-[520px] rounded-2xl shadow-2xl object-cover`}
          style={{ zIndex: 10 - i }}
        />
      ));
    }

    // Fallback placeholders (vector-ish shapes recreating the motion)
    return [0, 1, 2, 3, 4].map((i) => (
      <motion.div
        key={i}
        custom={i}
        variants={cardVariant}
        initial="hidden"
        animate={autoplay ? "show" : "hidden"}
        className={`absolute rounded-2xl shadow-xl border border-white/10 bg-gradient-to-br from-white/6 to-white/3`}
        style={{
          width: 360 - i * 24,
          height: 220 - i * 12,
          left: `calc(50% - ${(360 - i * 24) / 2}px)`,
          top: 72 + i * 8,
          zIndex: 20 - i,
        }}
      />
    ));
  };

  return (
    <div className="w-full min-h-[420px] flex items-center justify-center bg-gradient-to-b from-slate-900 to-slate-950 p-6">
      <motion.div
        className="relative w-full max-w-5xl h-[420px] rounded-3xl overflow-visible"
        variants={containerVariant}
        initial="hidden"
        animate={autoplay ? "show" : "hidden"}
      >
        {/* Subtle floating decorative shapes */}
        <motion.div
          className="absolute -left-16 -top-10 w-48 h-48 rounded-full blur-3xl opacity-60"
          variants={floatVariant}
          animate="floatA"
          aria-hidden
        />
        <motion.div
          className="absolute -right-20 top-20 w-56 h-56 rounded-full blur-3xl opacity-50"
          variants={floatVariant}
          animate="floatB"
          aria-hidden
        />

        {/* Center stage: stacked frames / cards */}
        <div className="relative w-full h-full flex items-center justify-center">
          <FrameItems />
        </div>

        {/* Foreground animated caption + buttons */}
        <motion.div
          className="absolute left-8 bottom-6 flex flex-col gap-3"
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <motion.h3
            initial={{ y: 6, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.55 }}
            className="text-white text-2xl font-semibold leading-tight"
          >
            Recreated animation
          </motion.h3>

          <motion.p
            initial={{ y: 6, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.08, duration: 0.55 }}
            className="text-slate-300 text-sm max-w-xs"
          >
            This component reproduces layered entrance, float, and staggered
            timings using Framer Motion. Swap frames or tweak timing to match
            your video exactly.
          </motion.p>

          <div className="flex gap-3 mt-2">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="px-4 py-2 rounded-md bg-white/6 border border-white/10 text-white text-sm"
            >
              Primary
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="px-4 py-2 rounded-md bg-white/3 text-slate-900 text-sm"
            >
              Secondary
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
