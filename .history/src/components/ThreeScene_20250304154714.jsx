import React, { useEffect, useRef } from "react"; 
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import vertexShadertwo from "../shaders/vertexShadertwo.glsl";
import fragmentShadertwo from "../shaders/fragmentShadertwo.glsl";

gsap.registerPlugin(ScrollTrigger);

const ThreeScene = () => {
  const canvasRef = useRef(null);
  const sceneRef = useRef(new THREE.Scene());
  const cameraRef = useRef(new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100));
  const rendererRef = useRef(new THREE.WebGLRenderer({ antialias: true, alpha: true }));
  const sphereRef = useRef(null);
  const clockRef = useRef(new THREE.Clock());

  useEffect(() => {
    const renderer = rendererRef.current;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    canvasRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.IcosahedronGeometry(1.2, 40);
    const material = new THREE.ShaderMaterial({
      vertexShader: vertexShadertwo,
      fragmentShader: fragmentShadertwo,
      uniforms: {
        uTime: { value: 0.0 },
        uColorChange: { value: 0 },
      },
    });

    sphereRef.current = new THREE.Mesh(geometry, material);
    sphereRef.current.position.y = 1;
    sceneRef.current.add(sphereRef.current);
    cameraRef.current.position.z = 3;

    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".landing",
    //     start: "80 40",
    //     end: "200",
    //     scrub: 1,
    //     markers: true,
    //   },
    // });

    // tl.to(sphereRef.current.position, {
    //   y: 0.3,
    //   z: -0.2,
    //   ease: "power2.inOut",
    // }, "a").to(material.uniforms.uColorChange, {
    //   value: 1,
    //   ease: "power2.inOut",
    // }, "a");

    const render = () => {
      material.uniforms.uTime.value = clockRef.current.getElapsedTime();
      renderer.render(sceneRef.current, cameraRef.current);
      requestAnimationFrame(render);
    };

    render();

    return () => {
      geometry.dispose();
      material.dispose();
      sceneRef.current.remove(sphereRef.current);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="w-full">
      <div className="landing w-screen relative">
        <div ref={canvasRef} className="absolute mt-12"></div>
      </div>
    </div>
  );
};

export default ThreeScene;
