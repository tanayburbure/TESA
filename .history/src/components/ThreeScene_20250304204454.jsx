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
  const cameraRef = useRef(new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100));
  const rendererRef = useRef(new THREE.WebGLRenderer({ antialias: true, alpha: true }));
  const sphereRef = useRef(null);
  const clockRef = useRef(new THREE.Clock());
  const blinkRef = useRef(null);
  const h2Ref = useRef(null);
  const h1Ref = useRef(null);

  useEffect(() => {
    const renderer = rendererRef.current;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    canvasRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.IcosahedronGeometry(1.3, 50);
    const material = new THREE.ShaderMaterial({
      vertexShader: vertexShadertwo,
      fragmentShader: fragmentShadertwo,
      uniforms: {
        uTime: { value: 0.0 },
        uColorChange: { value: 0 },
      },
    });

    sphereRef.current = new THREE.Mesh(geometry, material);
    sphereRef.current.position.y = 0.5;
    sceneRef.current.add(sphereRef.current);
    cameraRef.current.position.z = 3;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      sphereRef.current.position.y = 0.5 - scrollY * 0.001;
      h2Ref.current.style.transform = `translateY(${scrollY * 0.3}px)`;
    };

    window.addEventListener('scroll', handleScroll);

    const render = () => {
      material.uniforms.uTime.value = clockRef.current.getElapsedTime();
      renderer.render(sceneRef.current, cameraRef.current);
      requestAnimationFrame(render);
    };

    render();

    // Blink animation for span inside h1
    gsap.to(blinkRef.current, {
      opacity: 0.1,
      repeat: Infinity,
      repeatDelay: 0.7,
      duration: 0.7,
      ease: "power0",
      yoyo: true,
    });

    // GSAP ScrollTrigger to fade out h2 and then fade in h1
    gsap.to(h2Ref.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: h2Ref.current,
        start: "top 60%",
        end: "top 0%",
        scrub: true,
        onComplete: () => {
          gsap.set(h1Ref.current, { display: "block", opacity: 0 }); // Ensure h1 is hidden initially
          gsap.to(h1Ref.current, { opacity: 1, duration: 0.5 });
        },
      },
    });

    return () => {
      geometry.dispose();
      material.dispose();
      sceneRef.current.remove(sphereRef.current);
      renderer.dispose();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="w-full">
      <div className="landing w-screen relative flex flex-col">
        <div className="flex items-center justify-center">
          {/* h2 (Initially Visible) */}
          <h2 ref={h2Ref} className="text-[2.5vw] z-[3] font-bold text-zinc-800 text-center absolute cursor-pointer pt-12">
            WE CREATE. YOU CELEBRATE.
          </h2>

          {/* h1 (Initially Hidden, Now Uses `hidden` Instead of `opacity-0 invisible`) */}
          <h1 ref={h1Ref} className="text-[5.5vh] text-center absolute font-bold pt-[50vh] z-[3] hidden">
            <span className="font-medium pr-4 mb-2" ref={blinkRef}>[</span> WE ARE 
          </h1>
        </div>

        {/* Three.js Canvas */}
        <div ref={canvasRef} className="absolute"></div>
      </div>
    </div>
  );
};

export default ThreeScene;
