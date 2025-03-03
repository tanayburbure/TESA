import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import { cubicOut } from 'svelte/easing';
import Domain from "./components/Domain";
import Footer from "./components/Footer";
import Team from "./components/Team";
import Components3d from "./components/Components3d"
import Home from "./components/Home";
import Features from "./components/features";
import Aboutus from "./components/Aboutus";
import Thoughts from "./components/Thoughts";
import Startup from "./components/Startup";
import Interview from "./components/Interview";
import Zajno from "./components/Zajno";
import ThreeScene from "./components/ThreeScene";
import ThreeCanvas from "./components/ThreeCanvas";

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
    <div className="select-none overflow-hidden bg-zinc-900">
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
        <div className="fixed bottom-6 right-20 text-[2.5vh] z-50">
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
      {/* <Zajno/> */}
      {/* <ThreeScene /> */}
      <Home/>
      <ThreeCanvas/>
      {/* <Aboutus/>
      <Components3d/>
      <Domain />
      <Team />
      <Features/>
      <Thoughts/>
      <Footer /> */}
    </div>
  );
}

export default App;