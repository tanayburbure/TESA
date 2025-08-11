"use client";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

export default function SmoothGsapFramerAnimation() {
  const boxRef = useRef(null);

  useEffect(() => {
    const el = boxRef.current;

    // GSAP timeline for smooth, controlled animation
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    tl.fromTo(
      el,
      { scale: 0.85, y: 30, opacity: 0 },
      { scale: 1, y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
      .to(el, {
        y: -10,
        duration: 1.2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: 1,
      })
      .to(el, { scale: 0.9, opacity: 0, duration: 0.8, ease: "power2.in" });
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <motion.div
        ref={boxRef}
        className="w-64 h-64 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl shadow-xl"
        initial={false} // disable framer's initial animations
      />
    </div>
  );
}
