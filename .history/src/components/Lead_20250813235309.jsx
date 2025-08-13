"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const products = [
  { title: "Product 1", link: "#", thumbnail: "/images/img1.jpg" },
  { title: "Product 2", link: "#", thumbnail: "/images/img2.jpg" },
  { title: "Product 3", link: "#", thumbnail: "/images/img3.jpg" },
  { title: "Product 4", link: "#", thumbnail: "/images/img4.jpg" },
  { title: "Product 5", link: "#", thumbnail: "/images/img5.jpg" },
  { title: "Product 6", link: "#", thumbnail: "/images/img6.jpg" },
];

export default function Lead() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLDivElement>(".card");

      // GSAP horizontal scroll — start after original motion intro
      gsap.to(cards, {
        xPercent: -100 * (cards.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          start: "+=100%", // wait until motion intro has finished
          end: `+=${cards.length * 300}`,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full overflow-hidden">
      <div className="flex space-x-6">
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="card min-w-[80vw] md:min-w-[50vw] h-[60vh] bg-gray-200 rounded-xl flex items-center justify-center shadow-lg"
            initial={{ opacity: 0, rotateX: 20, rotateZ: 10, y: -50 }}
            whileInView={{
              opacity: 1,
              rotateX: 0,
              rotateZ: 0,
              y: 0,
              transition: { duration: 0.8, delay: index * 0.15, ease: "easeOut" },
            }}
            viewport={{ once: true, amount: 0.6 }}
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-full object-cover rounded-xl"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
