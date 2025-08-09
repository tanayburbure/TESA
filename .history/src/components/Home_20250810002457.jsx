import React, { useEffect, useRef } from "react";
import cn from "classnames";
import * as THREE from "three";
import vertexShadertwo from "../shaders/vertexShadertwo.glsl";
import fragmentShadertwo from "../shaders/fragmentShadertwo.glsl";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Floating from "./Floating";

gsap.registerPlugin(ScrollTrigger);

// Spotlight Component (No changes needed here)
const Spotlight = ({ className, fill = "black" }) => {
  return (
    <>
      <style>
        {`
          @keyframes spotlight {
            0% {
              opacity: 0;
              transform: translate(-72%, -62%) scale(0.5);
            }
            100% {
              opacity: 1;
              transform: translate(-50%, -40%) scale(1);
            }
          }
         
          .animate-spotlight {
            animation: spotlight 3s ease 0.75s 1 forwards;
          }
        `}
      </style>
     
      <svg
        className={cn(
          "animate-spotlight pointer-events-none absolute h-[110%] w-[200%] lg:w-[84%] opacity-0",
          className
        )}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 3787 2842"
        fill="none"
      >
        <g filter="url(#filter)">
          <ellipse
            cx="1924.71"
            cy="273.501"
            rx="1924.71"
            ry="273.501"
            transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
            fill={fill}
            fillOpacity="0.45"
          />
        </g>
        <defs>
          <filter
            id="filter"
            x="0.860352"
            y="0.838989"
            width="3785.16"
            height="2840.26"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="151" result="effect1_foregroundBlur_1065_8" />
          </filter>
        </defs>
      </svg>
    </>
  );
};

// Three.js Scene Component
const ThreeScene = () => {
  const canvasRef = useRef(null);
  const sceneRef = useRef(new THREE.Scene());
  const cameraRef = useRef(
    new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100)
  );
  // Adjusted camera aspect ratio to fill the whole screen
  const rendererRef = useRef(new THREE.WebGLRenderer({ antialias: true, alpha: true }));
  const sphereRef = useRef(null);
  const clockRef = useRef(new THREE.Clock());
  const colorChangeRef = useRef(0);

  useEffect(() => {
    const renderer = rendererRef.current;
    renderer.setSize(window.innerWidth, window.innerHeight); // Use full window dimensions
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Canvas is now appended to the fixed container, no need for absolute positioning on the canvas itself
    canvasRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.IcosahedronGeometry(1.1, 50);
    const material = new THREE.ShaderMaterial({
      vertexShader: vertexShadertwo,
      fragmentShader: fragmentShadertwo,
      uniforms: {
        uTime: { value: 0.0 },
        uColorChange: { value: colorChangeRef.current },
      },
    });

    sphereRef.current = new THREE.Mesh(geometry, material);
    sphereRef.current.position.set(0, 0.4, 0); // Keep initial position
    sceneRef.current.add(sphereRef.current);
    
    cameraRef.current.position.z = 3;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      // The sphere now moves up from its initial position as you scroll down
      sphereRef.current.position.y = 0.4 - scrollY * 0.0007;

      let newColor;
      if (scrollY < 500) {
        newColor = 0;
      } else if (scrollY < 800) {
        newColor = 1;
      } else {
        newColor = 2;
      }

      if (colorChangeRef.current !== newColor) {
        colorChangeRef.current = newColor;
        if (sphereRef.current.material) {
          sphereRef.current.material.uniforms.uColorChange.value = newColor;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    const render = () => {
      material.uniforms.uTime.value = clockRef.current.getElapsedTime();
      renderer.render(sceneRef.current, cameraRef.current);
      requestAnimationFrame(render);
    };

    render();

    // Handle window resize
    const handleResize = () => {
        cameraRef.current.aspect = window.innerWidth / window.innerHeight;
        cameraRef.current.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }
    window.addEventListener('resize', handleResize);

    return () => {
      geometry.dispose();
      material.dispose();
      // Safe removal of the mesh
      if (sphereRef.current) {
        sceneRef.current.remove(sphereRef.current);
      }
      renderer.dispose();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener('resize', handleResize);
      // Clean up the canvas from the DOM
      if(canvasRef.current){
        canvasRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  // ✅ KEY CHANGE: The container is now fixed to the viewport and sits behind everything else.
  return <div ref={canvasRef} className="fixed top-0 left-0 -z-10 w-full h-full"></div>;
};

// Main Merged Component
const Home = () => {
  const blinkRef = useRef(null);
  const h1Ref = useRef(null);

  // GSAP animations are better placed in the parent component
  // if they target elements within it.
  useEffect(() => {
    gsap.to(blinkRef.current, {
      opacity: 0.1,
      repeat: Infinity,
      repeatDelay: 0.7,
      duration: 0.5,
      ease: "power0",
      yoyo: true,
    });

    gsap.fromTo(
      h1Ref.current,
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: h1Ref.current,
          start: "top center", // Adjusted for better trigger timing
          end: "bottom center",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <div className="w-full relative"> {/* Parent needs to be relative for stacking context */}
      
      {/* ✅ KEY CHANGE: The Three.js scene is now the first element, acting as a background. */}
      <ThreeScene />

      {/* This new div wraps all scrollable content and places it on top of the canvas */}
      <div className="relative z-[1]">

        {/* First Section - Your original home content */}
        {/* Changed to h-screen for a full-page hero section, adjust if needed */}
        <div className="h-screen flex flex-col justify-center">
          <Spotlight className="top-0 left-48" fill="#3B6654" />
          <div className="relative">
            <Floating />
          </div>
          <div className="w-full flex items-center justify-center">
            <div className="w-[40%] pl-6 no-draw">
              <h3 className="font-[font3] font-regular text-[2.9vh]">Presented by</h3>
              <h2 className="font-[font4] text-[3.3vh] mt-3 font-regular">
                Electronics and Telecommunication Department
              </h2>
            </div>
            <div className="flex w-[50%] pl-8">
              <img className="h-[33vh] no-draw" src="./images/tesahalf.png" alt="" />
              <div className="flex flex-col no-draw text-center relative -top-14 text-zinc-800 font-[font1]">
                <h1 className="text-[26vh] text-[#222831] font-semibold -mb-12">TESA</h1>
                <h3 className="text-[2.5vh] font-regular">TELECOM ENGINEER'S STUDENT ASSOCIATION</h3>
                <h3 className="text-[2.4vh] font-regular -mt-1">WE CREATE.YOU CELEBRATE</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Second Section - Content to scroll over the sphere */}
        <div className="h-screen w-screen relative flex items-center justify-center">
          <h1
            ref={h1Ref}
            className="text-[7vh] font-[font4] text-center font-semibold tracking-tight"
          >
            <span className="font-medium pr-4 mt-2" ref={blinkRef}>
              [
            </span>{" "}
            WE ARE
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;