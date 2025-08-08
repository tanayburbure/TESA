import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Team = () => {
  return (
    <div className="bg-neutral-800">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // More aggressive transform to complete animation in shorter distance
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

  const cards = [
    {
      url: "/imgs/abstract/1.jpg",
      title: "Principal",
      id: 1,
    },
    {
      url: "/imgs/abstract/2.jpg",
      title: "Head of Department",
      id: 2,
    },
    {
      url: "/imgs/abstract/3.jpg",
      title: "TESA Chairperson",
      id: 3,
    },
    {
      url: "/imgs/abstract/4.jpg",
      title: "President",
      id: 4,
    },
    {
      url: "/imgs/abstract/5.jpg",
      title: "Vice-President",
      id: 5,
    },
    {
      url: "/imgs/abstract/6.jpg",
      title: "General Secretary",
      id: 6,
    },
    {
      url: "/imgs/abstract/7.jpg",
      title: "Treasurer",
      id: 7,
    },
  ];

  return (
    <section ref={targetRef} className="relative h-screen bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* Title overlay */}
        <div className="absolute top-1/2 left-16 -translate-y-1/2 z-20">
          <h1 className="text-blue-600 text-8xl font-bold tracking-tight">
            OUR CORE TEAM
          </h1>
        </div>
        
        {/* Scrolling cards container */}
        <motion.div 
          style={{ x }} 
          className="flex gap-6 pl-96"
        >
          {cards.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div className="group relative h-96 w-72 overflow-hidden bg-neutral-200 border-4 border-white flex-shrink-0">
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute bottom-4 left-4 z-10">
        <p className="bg-black/50 backdrop-blur-sm px-4 py-2 text-xl font-bold text-white rounded">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Team;
