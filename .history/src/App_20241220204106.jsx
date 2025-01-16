import React, { useEffect } from "react";
import Card from "./components/Card";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Events from "./components/Events";
import Components3d from "./components/Components3d";
import Domain from "./components/Domain";
// import Lenis from 'lenis';
import Team from "./components/Team";

function App() {
  const audioRef = useRef(null);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false); // Set to false so music is paused initially

  const location = useLocation(); // Get current route

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      autoRaf: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Set initial music state
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.play().catch((error) => {
          console.error('Error playing audio:', error);
        });
      } else {
        audioRef.current.pause();
      }
    }

    return () => {
      lenis.destroy();
    };
  }, [isMusicPlaying]);


const toggleMusic = () => {
  if (audioRef.current) {
    if (isMusicPlaying) {  // If music is playing, pause it
      audioRef.current.pause();
    } else {  // If music is paused, play it
      audioRef.current.play().catch((error) => {
        console.error('Error playing audio:', error);
      });
    }
    const newState = !isMusicPlaying;
    setIsMusicPlaying(newState);
    localStorage.setItem('isMusicPlaying', JSON.stringify(newState)); // Save state to local storage
  }
};


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="select-none overflow-hidden">
      {/* Background Audio */}
      <audio ref={audioRef} src="/video/relaxed.mp3" loop></audio>

      {/* Music Toggle Button */}
      <div className="fixed bottom-6 right-6 text-[2.5vh] z-50">
        <button
          onClick={toggleMusic}
          className={`bg-transparent font-[font7] writing-vertical-rl text-center hover:text-default border-none shadow-none hover:shadow-none focus:outline-none ${
            isMusicPlaying ? 'text-[#219B9D]' : 'text-yellow-500'
          }`}
          style={{
            writingMode: 'vertical-rl',
            transform: 'rotate(360deg)',
          }}
        >
          {isMusicPlaying ? 'Sound ON' : 'Sound OFF'}
        </button>
      </div>

      {/* Scroll to Top Button */}
      {location.pathname === '/' && ( // Show button only on the homepage
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

  return (
    <div className=" bg-[#0C0C0C] ">
      <Nav/>
      {/* <Components3d/> */}
      <Team/>
      <Domain/>
      <Card/>
      <Footer />
    </div>
  );
}

export default App;

// Ctrl L to chat and Ctrl K to generate