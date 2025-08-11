import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import Domain from "./components/Domain.jsx";
import Footer from "./components/Footer.jsx";
import Team from "./components/Team.jsx";
import Components3d from "./components/Components3d.jsx";
import Aboutus from "./components/Aboutus.jsx";
import Startup from "./components/Startup";
import Interview from "./components/Interview";
import ThreeCanvas from "./components/ThreeCanvas";
import Nav from "./components/Nav.jsx";
import Thoughts  from "./components/Thoughts.jsx";
import DrawingPage from "./components/DrawingPage.jsx";
import WebFeature from "./components/WebFeature.jsx";
import Home from "./components/Home.jsx"
import ThreeScene from "./components/ThreeScene";
import Menu from "./components/Menu.jsx";
import Animate from "./components/Animate.jsx"

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
      <Menu/>
      {/* <Animate/> */}
      <Interview/>
      <Nav />
      <DrawingPage/>
      <Home/>
      <ThreeScene />
      {/* <ThreeCanvas /> */}
      {/* <Transition /> */}
      <Aboutus />
      <Components3d />
      <Team />
      <Domain />
      <WebFeature/>
      <Thoughts />
      <Footer />
    </div>
  );
}

export default App;