import { motion } from 'framer-motion';
import { useState } from 'react';

const CONTAINER_ANIMATION_CONFIG = {
  duration: 0.15,
  ease: "easeInOut"
};

export default function HamburgerMenu() {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredItemIndex, setHoveredItemIndex] = useState(null);

  const EXPANDED_WIDTH = "50vw";
  const EXPANDED_HEIGHT = "102vh";

  const LINE_WIDTH = "28px";
  const LINE_HEIGHT = "3px";

  const topBarAnimation = {
    y: isHovered ? 0 : -6,
    rotateZ: isHovered ? 45 : 0
  };

  const middleBarAnimation = {
    opacity: isHovered ? 0 : 1
  };

  const bottomBarAnimation = {
    y: isHovered ? 0 : 6,
    rotateZ: isHovered ? -45 : 0
  };

  const lineTransition = {
    duration: 0.4,
    ease: [0.34, 1.56, 0.64, 1],
    type: "spring",
    stiffness: 180,
    damping: 15
  };

  const menuItems = [
    { name: 'Home' },
    { name: 'About Us' },
    { name: 'Domain', subItems: ['Technical', 'SPORTS', 'T & P', 'Cultural', 'Media', 'Social', 'Study Circle', 'Editoral'] },
    { name: 'Events' },
    { name: 'Interview Exp' },
    { name: 'Startups' }
  ];

  return (
    <div className='no-draw'>
      {/* Background blur overlay */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 backdrop-blur-sm bg-black/10 z-[99]"
        />
      )}

      <div className="fixed top-6 right-6 z-[99999]">
        {/* Expanding green background and menu content */}
        <motion.div
          className="absolute top-0 right-0 rounded-lg bg-[#4A9782] overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setHoveredItemIndex(null); // Reset hovered item state on menu close
          }}
          animate={{
            width: isHovered ? EXPANDED_WIDTH : "64px",
            height: isHovered ? EXPANDED_HEIGHT : "64px",
            marginTop: isHovered ? "-30px" : "0px",
            marginRight: isHovered ? "-30px" : "0px"
          }}
          transition={CONTAINER_ANIMATION_CONFIG}
          style={{
            transformOrigin: "top right",
            zIndex: -1
          }}
        >
          {isHovered && (
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className='space-y-6 select-none mt-20 text-zinc-900 font-[font3] font-semibold text-5xl pt-24 px-8'
            >
              {menuItems.map((item, index) => (
                <motion.li
                  key={index}
                  onMouseEnter={() => setHoveredItemIndex(index)}
                  onMouseLeave={() => setHoveredItemIndex(null)}
                  animate={{
                    color: hoveredItemIndex !== null && hoveredItemIndex !== index ? "#454547ff" : "#18181B",
                    scale: hoveredItemIndex === index ? 1.05 : 1, // Add zoom effect here
                    transition: { duration: 0.2 }
                  }}
                  className='relative' // Make the list item a relative container
                  style={{ transformOrigin: 'left' }}
                >
                  {item.subItems ? (
                    <div className='group relative'> {/* Make this div relative */}
                      <button
                        onClick={() => document.getElementById(`services-submenu-${index}`).classList.toggle('hidden')}
                      >
                        {item.name}
                      </button>
                      <ul
                        id={`services-submenu-${index}`}
                        className={`absolute top-2 left-80 z-20 ml-4 hidden space-y-4 text-3xl whitespace-nowrap`}
                      >
                        {item.subItems.map((subItem, subIndex) => (
                          <li key={subIndex}>{subItem}</li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    item.name
                  )}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </motion.div>

        {/* Hamburger icon (the three lines) */}
        <div
          className="relative flex flex-col justify-center items-center w-16 h-16 cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setHoveredItemIndex(null);
          }}
        >
          <motion.div
            className="absolute bg-zinc-800 rounded-full"
            style={{ width: LINE_WIDTH, height: LINE_HEIGHT }}
            animate={topBarAnimation}
            transition={lineTransition}
          />
          <motion.div
            className="absolute bg-zinc-800 rounded-full"
            style={{ width: LINE_WIDTH, height: LINE_HEIGHT }}
            animate={middleBarAnimation}
            transition={{ ...lineTransition, duration: 0.1 }}
          />
          <motion.div
            className="absolute bg-zinc-800 rounded-full"
            style={{ width: LINE_WIDTH, height: LINE_HEIGHT }}
            animate={bottomBarAnimation}
            transition={lineTransition}
          />
        </div>
      </div>
    </div>
  );
}