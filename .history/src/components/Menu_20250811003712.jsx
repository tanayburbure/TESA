import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const CONTAINER_ANIMATION_CONFIG = {
  duration: 0.15,
  ease: 'easeInOut'
};

export default function HamburgerMenu() {
  const [isHovered, setIsHovered] = useState(false);

  const EXPANDED_WIDTH = '50vw';
  const EXPANDED_HEIGHT = '102vh';

  const LINE_WIDTH = '28px';
  const LINE_HEIGHT = '3px';

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
    type: 'spring',
    stiffness: 180,
    damping: 15
  };

  return (
    <>
      {/* Background blur overlay */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 backdrop-blur-sm bg-black/10 z-[99]"
          />
        )}
      </AnimatePresence>

      <div className="fixed top-6 right-6 z-[99999]">
        {/* Expanding green background */}
        <motion.div
          className="absolute top-0 right-0 rounded-lg bg-[#4A9782] flex flex-col justify-center items-center p-12 overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          animate={{
            width: isHovered ? EXPANDED_WIDTH : '64px',
            height: isHovered ? EXPANDED_HEIGHT : '64px',
            marginTop: isHovered ? '-30px' : '0px',
            marginRight: isHovered ? '-30px' : '0px'
          }}
          transition={CONTAINER_ANIMATION_CONFIG}
          style={{
            transformOrigin: 'top right',
            zIndex: -1
          }}
        >
          {/* Menu content appears only when hovered */}
          <AnimatePresence>
            {isHovered && (
              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 text-5xl text-white"
              >
                <li className="hover:scale-105 transition-transform duration-300">
                  Home
                </li>
                <li className="hover:scale-105 transition-transform duration-300">
                  About Us
                </li>
                <li className="hover:scale-105 transition-transform duration-300 group">
                  <button
                    onClick={() =>
                      document
                        .getElementById('services-submenu')
                        .classList.toggle('hidden')
                    }
                  >
                    Domain
                  </button>
                  <ul
                    id="services-submenu"
                    className="hidden space-y-4 text-4xl pl-4"
                  >
                    <li className="hover:scale-105 transition-transform duration-300">
                      Technical
                    </li>
                    <li className="hover:scale-105 transition-transform duration-300">
                      SPORTS
                    </li>
                    <li className="hover:scale-105 transition-transform duration-300">
                      T & P
                    </li>
                    <li className="hover:scale-105 transition-transform duration-300">
                      Cultural
                    </li>
                    <li className="hover:scale-105 transition-transform duration-300">
                      Media
                    </li>
                    <li className="hover:scale-105 transition-transform duration-300">
                      Social
                    </li>
                    <li className="hover:scale-105 transition-transform duration-300">
                      Study Circle
                    </li>
                    <li className="hover:scale-105 transition-transform duration-300">
                      Editoral
                    </li>
                  </ul>
                </li>
                <li className="hover:scale-105 transition-transform duration-300">
                  Interview Exp
                </li>
                <li className="hover:scale-105 transition-transform duration-300">
                  Startup
                </li>
              </motion.ul>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
}
