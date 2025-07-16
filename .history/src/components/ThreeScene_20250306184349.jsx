import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import vertexShadertwo from "../shaders/vertexShadertwo.glsl";
import fragmentShadertwo from "../shaders/fragmentShadertwo.glsl";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ThreeScene = () => {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const sphereRef = useRef(null);
  const clockRef = useRef(new THREE.Clock());
  const blinkRef = useRef(null);
  const h2Ref = useRef(null);
  const h1Ref = useRef(null);
  const colorChangeRef = useRef(0);

  useEffect(() => {
    // Initialize scene, camera, and renderer
    sceneRef.current = new THREE.Scene();
    cameraRef.current = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    cameraRef.current.position.z = 3;

    rendererRef.current = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    rendererRef.current.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    canvasRef.current.appendChild(rendererRef.current.domElement);

    // Create geometry with reduced subdivision
    const geometry = new THREE.IcosahedronGeometry(1.3, 20); // Lower subdivision for better performance
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

    const handleScroll = () => {
      if (!sphereRef.current) return;

      const scrollY = window.scrollY;
      sphereRef.current.position.y = 0.5 - scrollY * 0.001;
      h2Ref.current.style.transform = `translateY(${scrollY * 0.15}px)`;

      let newColor = scrollY < 500 ? 0 : scrollY < 800 ? 1 : 2;
      if (colorChangeRef.current !== newColor) {
        colorChangeRef.current = newColor;
        material.uniforms.uColorChange.value = newColor;
      }
    };

    window.addEventListener("scroll", handleScroll);

    const animate = () => {
      if (!rendererRef.current || !sceneRef.current || !cameraRef.current) return;

      material.uniforms.uTime.value = clockRef.current.getElapsedTime();
      rendererRef.current.render(sceneRef.current, cameraRef.current);
      requestAnimationFrame(animate);
    };

    animate();

    // GSAP animations
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

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (sphereRef.current) {
        geometry.dispose();
        material.dispose();
        sceneRef.current.remove(sphereRef.current);
        sphereRef.current = null;
      }
      if (rendererRef.current) {
        rendererRef.current.dispose();
        rendererRef.current = null;
      }
    };
  }, []);

  return (
    <div className="w-full">
      <div className="landing w-screen relative flex flex-col">
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
        <div ref={canvasRef} className="absolute"></div>
      </div>
    </div>
  );
};

export default ThreeScene;
