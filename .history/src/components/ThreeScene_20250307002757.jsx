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
  const rendererRef = useRef(new THREE.WebGLRenderer({ antialias: true, alpha: true }));
  const sphereRef = useRef(null);
  const clockRef = useRef(new THREE.Clock());
  const blinkRef = useRef(null);
  const h2Ref = useRef(null);
  const h1Ref = useRef(null);
  const colorChangeRef = useRef(0);

  useEffect(() => {
    const renderer = rendererRef.current;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    canvasRef.current.appendChild(renderer.domElement);

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

    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Move the sphere within a valid range
      sphereRef.current.position.y = Math.max(-1, 0.5 - scrollY * 0.0015);

      // Move text but keep it within bounds
      if (h2Ref.current) {
        h2Ref.current.style.transform = `translateY(${Math.min(200, scrollY * 0.15)}px)`;
      }

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
      geometry.dispose();
      material.dispose();
      sceneRef.current.remove(sphereRef.current);
      renderer.dispose();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className=" relative">
      <div className="landing w-full min-h-screen flex flex-col">
        <div className="flex items-center justify-center">
          <h2
            ref={h2Ref}
            className="text-[2.5vw] z-[99] font-bold text-center absolute pt-4"
          >
            WE CREATE. YOU CELEBRATE.
          </h2>

          <h1
            ref={h1Ref}
            className="text-[5.5vh] text-center absolute font-bold z-[3]"
          >
            <span className="font-medium pr-4 mb-2" ref={blinkRef}>
              [
            </span>{" "}
            WE ARE
          </h1>
        </div>
        {/* Canvas inside a proper div */}
        <div
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full z-[5]"
        ></div>
      </div>
    </div>
  );
};

export default ThreeScene;
