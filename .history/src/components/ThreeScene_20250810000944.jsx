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
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.top = "0";
    canvasRef.current.appendChild(renderer.domElement);

    // Geometry + Material
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
      sphereRef.current.position.y = 40 - scrollY * 0.0007;

      let newColor = 0;
      if (scrollY >= 500 && scrollY < 800) newColor = 1;
      else if (scrollY >= 800) newColor = 2;

      if (colorChangeRef.current !== newColor) {
        colorChangeRef.current = newColor;
        sphereRef.current.material.uniforms.uColorChange.value = newColor;
      }
    };

    window.addEventListener("scroll", handleScroll);

    const renderLoop = () => {
      material.uniforms.uTime.value = clockRef.current.getElapsedTime();
      renderer.render(sceneRef.current, cameraRef.current);
      requestAnimationFrame(renderLoop);
    };
    renderLoop();

    // Blink animation
    gsap.to(blinkRef.current, {
      opacity: 0.1,
      repeat: Infinity,
      repeatDelay: 0.7,
      duration: 0.5,
      ease: "power0",
      yoyo: true,
    });

    // h1 fade in/out on scroll
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
    };
  }, []);

  return (
    <div className="w-full pointer-events-none z-[50] absolute top-0">
      <div className="landing w-screen relative flex flex-col">
        <div className="flex items-center justify-center">
          <h1
            ref={h1Ref}
            className="text-[7vh] font-[font4] text-center absolute font-semibold tracking-tight pt-[65vh] z-[3]"
          >
            <span className="font-medium pr-4 mt-2" ref={blinkRef}>
              [
            </span>{" "}
            WE ARE
          </h1>
        </div>
        <div ref={canvasRef} className="absolute inset-0 z-[50]"></div>
      </div>
    </div>
  );
};

export default ThreeScene;
