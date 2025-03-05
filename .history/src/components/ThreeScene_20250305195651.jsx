import React, { useEffect, useRef, useState } from "react";
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
  const h2Ref = useRef(null);
  const h1Ref = useRef(null);

  useEffect(() => {
    const renderer = rendererRef.current;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.top = "0";
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
    sphereRef.current.position.set(0, 0.5, 0);
    sceneRef.current.add(sphereRef.current);
    cameraRef.current.position.z = 3;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      sphereRef.current.position.y = 0.5 - scrollY * 0.0010;
      h2Ref.current.style.transform = `translateY(${scrollY * 0.2}px)`;
    };

    window.addEventListener("scroll", handleScroll);

    const render = () => {
      material.uniforms.uTime.value = clockRef.current.getElapsedTime();
      renderer.render(sceneRef.current, cameraRef.current);
      requestAnimationFrame(render);
    };

    render();

    gsap.to(material.uniforms.uColorChange, {
      value: 3.5,
      scrollTrigger: {
        trigger: ".landing",
        start: "top top",
        end: "200%",
        scrub: 1,
      },
    });

    return () => {
      geometry.dispose();
      material.dispose();
      sceneRef.current.remove(sphereRef.current);
      renderer.dispose();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full">
      <div className="landing w-screen relative flex flex-col">
        <div className="flex items-center justify-center">
          <h2
            ref={h2Ref}
            className="text-[2.5vw] z-[99] font-bold text-zinc-800 text-center absolute cursor-pointer pt-4"
          >
            WE CREATE. YOU CELEBRATE.
          </h2>

          <h1
            ref={h1Ref}
            className="text-[5.5vh] text-center absolute font-bold pt-[62vh] z-[3]"
          >
            <span className="font-medium pr-4 mb-2">[</span> WE ARE
          </h1>
        </div>
        <div ref={canvasRef} className="absolute"></div>
      </div>
    </div>
  );
};

export default ThreeScene;
