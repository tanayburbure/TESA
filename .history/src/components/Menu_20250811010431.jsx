import { motion } from 'framer-motion';
import { useState } from 'react';

const CONTAINER_ANIMATION_CONFIG = {
  duration: 0.15,
  ease: "easeInOut"
};

export default function HamburgerMenu() {
  const [isHovered, setIsHovered] = useState(false);

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

  return (
    <div className='no-draw '>
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
          className="absolute top-0  right-0 rounded-lg bg-[#4A9782] overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
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
              className='space-y-6 mt-12 text-zinc-900 font-[font3] font-semibold text-5xl pt-24 px-8'
            >
              <li className=''>Home</li>
              <li className=''>About Us</li>
              <li className='group'>
                <button
                  onClick={() => document.getElementById('services-submenu').classList.toggle('hidden')}
                  className=' transition-transform duration-300'
                >
                  Domain
                </button>
                <ul id='services-submenu' className='hidden space-y-4 text-4xl pl-4 pt-4'>
                  <li className=''>Technical</li>
                  <li className=''>SPORTS</li>
                  <li className=''>T & P</li>
                  <li className=''>Cultural</li>
                  <li className=''>Media</li>
                  <li className=''>Social</li>
                  <li className=''>Study Circle</li>
                  <li className=''>Editoral</li>
                </ul>
              </li>
              <li className=''>Interview Exp</li>
              <li className=''>Startup</li>
            </motion.ul>
          )}
        </motion.div>

        {/* Hamburger icon (the three lines) */}
        <div
          className="relative flex flex-col justify-center items-center w-16 h-16 cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
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