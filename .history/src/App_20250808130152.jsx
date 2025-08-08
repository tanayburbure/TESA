import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import Domain from "./components/Domain";
import Footer from "./components/Footer";
import Team from "./components/Team";
import Components3d from "./components/Components3d";
import Aboutus from "./components/Aboutus";
import Thoughts from "./components/Thoughts";
import Startup from "./components/Startup";
import Interview from "./components/Interview";
import ThreeCanvas from "./components/ThreeCanvas";
import Nav from "./components/Nav";
import Features from "./components/features";

import { PageTransition } from "./components/PageTransition";

function App() {
  const audioRef = useRef(null);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const location = useLocation();

  // Rest of your existing useEffect for audio
  useEffect(() => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.play().catch(console.error);
      } else {
        audioRef.current.pause();
      }
    }
  }, [isMusicPlaying]);

  // Preserve all existing functions
  const toggleMusic = () => {
    if (audioRef.current) {
      const newState = !isMusicPlaying;
      setIsMusicPlaying(newState);
      localStorage.setItem("isMusicPlaying", JSON.stringify(newState));
    }
  };

  const scrollToTop = () => {
    lenisRef.current?.scrollTo(0, { immediate: false });
  };

  // Keep all existing JSX structure
  return (
    <div className="overflow-hidden ">
      <audio ref={audioRef} src="/music/chill.mp3" loop></audio>

      <div className="fixed bottom-6 right-6 text-[2.5vh] z-50">
        <button
          onClick={toggleMusic}
          className={`bg-transparent font-[font7] writing-vertical-rl text-center hover:text-default border-none shadow-none hover:shadow-none focus:outline-none ${
            isMusicPlaying ? "text-[#219B9D]" : "text-yellow-500"
          }`}
          style={{ writingMode: "vertical-rl", transform: "rotate(360deg)" }}
        > SOUND <span></span>
          {isMusicPlaying ? "ON" : "OFF"}
        </button>
      </div>

      {location.pathname === "/" && (
        <div className="fixed mix-blend-difference bottom-6 right-20 text-[2.5vh] z-50">
          <button
            onClick={scrollToTop}
            className="bg-transparent text-white hover:text-white hover:shadow-none border-none shadow-none focus:outline-none"
            title="Go to top"
          >
            <FaArrowUp size={30} />
          </button>
        </div>
      )}

      {/* <Interview/> */}
      {/* <Startup/> */}
      <Nav />
      <ThreeCanvas />
      {/* <Transition /> */}
      <Aboutus />
      <Components3d />
      <Domain />
      <PageTransition />
      {/* <Team /> */}
      <Features/>
      <Thoughts />
      <Footer />
    </div>
  );
}

export default App;