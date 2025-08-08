import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const cards = [
  { url: "/imgs/abstract/1.jpg", title: "Title 1", id: 1 },
  { url: "/imgs/abstract/2.jpg", title: "Title 2", id: 2 },
  { url: "/imgs/abstract/3.jpg", title: "Title 3", id: 3 },
  { url: "/imgs/abstract/4.jpg", title: "Title 4", id: 4 },
  { url: "/imgs/abstract/5.jpg", title: "Title 5", id: 5 },
  { url: "/imgs/abstract/6.jpg", title: "Title 6", id: 6 },
  { url: "/imgs/abstract/7.jpg", title: "Title 7", id: 7 },
  { url: "/imgs/abstract/7.jpg", title: "Title 8", id: 8 },
  { url: "/imgs/abstract/7.jpg", title: "Title 9", id: 9 },
  { url: "/imgs/abstract/7.jpg", title: "Title 10", id: 10 },
];

const Team = () => {
  return (
    <div className="bg-neutral-800">
      <div className="flex h-24 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div>

      <HorizontalScrollCarousel />

      <div className="flex h-24 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Animate horizontal movement based on vertical scroll
  const x = useTransform(scrollYProgress, [0, 1], ["8%", "-300%"]); // adjust this value


  return (
    <section ref={sectionRef} className="relative h-screen bg-neutral-900">
      {/* Spacer div to simulate scroll */}
      <div className="absolute top-0 left-0 w-full h-[1000vh] pointer-events-none"></div>

      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <motion.div style={{ x }} className="flex gap-4 px-[10vw]">
          {cards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200 rounded-xl shadow-xl">
      <div
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-5xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Team;
