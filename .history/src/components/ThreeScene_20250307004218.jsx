import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import vertexShadertwo from "../shaders/vertexShadertwo.glsl";
import fragmentShadertwo from "../shaders/fragmentShadertwo.glsl";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ThreeScene = () => {
  const canvasRef = useRef(null);
  const sceneRef = useRef(new THREE.Scene());
  const cameraRef = useRef(
    new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100)
  );
  const rendererRef = useRef(null);
  const sphereRef = useRef(null);
  const clockRef = useRef(new THREE.Clock());
  const blinkRef = useRef(null);
  const h2Ref = useRef(null);
  const h1Ref = useRef(null);
  const colorChangeRef = useRef(0);

  useEffect(() => {
    // Initialize Renderer
    rendererRef.current = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    rendererRef.current.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current.domElement.style.position = "absolute";
    rendererRef.current.domElement.style.top = "0";
    rendererRef.current.domElement.style.left = "0";
    rendererRef.current.domElement.style.zIndex = "2"; // Ensure it stays behind text but visible

    if (canvasRef.current) {
      canvasRef.current.appendChild(rendererRef.current.domElement);
    }

    // Create Sphere
    const geometry = new THREE.IcosahedronGeometry(1.3, 50);
    const material = new THREE.ShaderMaterial({
      vertexShader: vertexShadertwo,
      fragmentShader: fragmentShadertwo,
      uniforms: {
        uTime: { value: 0.0 },
        uColorChange: { value: colorChangeRef.current },
      },
    });

    sphereRef.current = new THREE.Mesh(geometry, material);
    sphereRef.current.position.set(0, 0.5, 0);
    sceneRef.current.add(sphereRef.current);
    cameraRef.current.position.z = 3;

    // Scroll Effect
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (sphereRef.current) {
        sphereRef.current.position.y = 0.5 - scrollY * 0.0015;
      }
      if (h2Ref.current) {
        h2Ref.current.style.transform = `translateY(${scrollY * 0.15}px)`;
      }

      let newColor = scrollY < 500 ? 0 : scrollY < 800 ? 1 : 2;
      if (colorChangeRef.current !== newColor) {
        colorChangeRef.current = newColor;
        if (sphereRef.current?.material) {
          sphereRef.current.material.uniforms.uColorChange.value = newColor;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Animation Loop
    const animate = () => {
      material.uniforms.uTime.value = clockRef.current.getElapsedTime();
      rendererRef.current.render(sceneRef.current, cameraRef.current);
      requestAnimationFrame(animate);
    };
    animate();

    // GSAP Animations
    gsap.to(blinkRef.current, {
      opacity: 0.1,
      repeat: Infinity,
      repeatDelay: 0.7,
      duration: 0.7,
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
          start: "90 40",
          end: "top 50%",
          scrub: 3,
          onEnter: () => gsap.to(h1Ref.current, { opacity: 1 }),
          onLeaveBack: () => gsap.to(h1Ref.current, { opacity: 0 }),
        },
      }
    );

    // Cleanup on Unmount
    return () => {
      geometry.dispose();
      material.dispose();
      if (sphereRef.current) sceneRef.current.remove(sphereRef.current);
      rendererRef.current.dispose();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full h-screen relative">
      <div className="landing w-screen relative flex flex-col overflow-visible">
        {/* Text Elements */}
        <div className="flex items-center justify-center">
          <h2
            ref={h2Ref}
            className="text-[2.5vw] z-[99] font-bold text-center absolute cursor-pointer pt-4"
          >
            WE CREATE. YOU CELEBRATE.
          </h2>

          <h1
            ref={h1Ref}
            className="text-[5.5vh] text-center absolute font-bold pt-[62vh] z-[3]"
          >
            <span className="font-medium pr-4 mb-2" ref={blinkRef}>
              [
            </span>{" "}
            WE ARE
          </h1>
        </div>

        {/* Canvas */}
        <div
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full z-[2] pointer-events-none"
        ></div>
      </div>
    </div>
  );
};

export default ThreeScene;
