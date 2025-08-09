import React, { useEffect, useRef } from "react";
import cn from "classnames";
import * as THREE from "three";
import vertexShadertwo from "../shaders/vertexShadertwo.glsl";
import fragmentShadertwo from "../shaders/fragmentShadertwo.glsl";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Floating from "./Floating";

gsap.registerPlugin(ScrollTrigger);

// Spotlight Component (same as before)
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
          
          /* SOLUTION 3 SPECIFIC STYLES */
          .three-scene-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            z-index: 1;
            pointer-events: none;
            overflow: hidden;
          }
          
          .content-overlay {
            position: relative;
            z-index: 10;
            pointer-events: auto;
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

// Three.js Scene Component - SOLUTION 3
const ThreeScene = () => {
  const canvasRef = useRef(null);
  const sceneRef = useRef(new THREE.Scene());
  const cameraRef = useRef(
    new THREE.PerspectiveCamera(75, window.innerWidth / (window.innerHeight * 1.2), 0.1, 100)
  );
  const rendererRef = useRef(new THREE.WebGLRenderer({ antialias: true, alpha: true }));
  const sphereRef = useRef(null);
  const clockRef = useRef(new THREE.Clock());
  const blinkRef = useRef(null);
  const h1Ref = useRef(null);
  const colorChangeRef = useRef(0);

  useEffect(() => {
    const renderer = rendererRef.current;
    renderer.setSize(window.innerWidth, window.innerHeight * 1.2);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // SOLUTION 3 SPECIFIC STYLING
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.top = "0";
    renderer.domElement.style.left = "0";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.overflow = "hidden";
    renderer.domElement.style.mixBlendMode = "normal";
    
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
    sphereRef.current.position.set(0, 0.4, 0);
    sceneRef.current.add(sphereRef.current);
    
    cameraRef.current.position.z = 3;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      sphereRef.current.position.y = 1 - scrollY * 0.0007;

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

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight * 1.2;
      
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    const render = () => {
      material.uniforms.uTime.value = clockRef.current.getElapsedTime();
      renderer.render(sceneRef.current, cameraRef.current);
      requestAnimationFrame(render);
    };

    render();

    // GSAP Animations
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
          start: "70 40",
          end: "top 10%",
          scrub: 3,
          onEnter: () => gsap.to(h1Ref.current, { opacity: 1 }),
          onLeaveBack: () => gsap.to(h1Ref.current, { opacity: 0 }),
        },
      }
    );

    return () => {
      geometry.dispose();
      material.dispose();
      sceneRef.current.remove(sphereRef.current);
      renderer.dispose();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div ref={canvasRef} className="three-scene-container"></div>
  );
};

// Main Component - SOLUTION 3
const Home = () => {
  const blinkRef = useRef(null);
  const h1Ref = useRef(null);

  return (
    <div className="w-full">
      {/* First Section - Original Home Content */}
      <div className="h-[80vh] content-overlay">
        <Spotlight 
          className="top-0 left-48" 
          fill="#3B6654" 
        />
        <div className="relative">
          <Floating/>
        </div>
        <div className="h-screen w-full flex items-center justify-center">
          <div className="w-[40%] pl-6 no-draw">
            <h3 className="font-[font3] font-regular text-[2.9vh]">Presented by</h3>
            <h2 className="font-[font4] text-[3.3vh] mt-3 font-regular">Electronics and Telecommunication Department</h2>
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

      {/* Second Section - Three.js Scene with CSS-Only Fix */}
      <div className="landing w-screen relative flex flex-col content-overlay">
        <div className="flex items-center justify-center">
          <h1
            ref={h1Ref}
            className="text-[7vh] font-[font4] text-center absolute font-semibold tracking-tight pt-[65vh] z-[15] text-white relative"
          >
            <span className="font-medium pr-4 mt-2" ref={blinkRef}>
              [
            </span>{" "}
            WE ARE
          </h1>
        </div>
        <ThreeScene />
      </div>
    </div>
  );
};

export default Home;