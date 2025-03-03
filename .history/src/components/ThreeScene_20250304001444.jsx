import React, { useEffect, useRef } from "react"; // Added React import
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import vertexShadertwo from "../shaders/vertexShadertwo.glsl";
import fragmentShadertwo from "../shaders/fragmentShadertwo.glsl";

gsap.registerPlugin(ScrollTrigger);

const ThreeScene = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Create Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create Geometry & Material
    const geometry = new THREE.IcosahedronGeometry(1, 20);
    const material = new THREE.ShaderMaterial({
      vertexShader2,
      fragmentShader2,
      uniforms: {
        uTime: { value: 0.0 },
        uColorChange: { value: 0 },
      },
    });

    const sphere = new THREE.Mesh(geometry, material);
    sphere.position.y = -1.1;
    scene.add(sphere);
    camera.position.z = 2;

    // GSAP Animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".landing",
        start: "80 40",
        end: "200",
        scrub: 1,
        markers: true,
      },
    });

    tl.to(
      sphere.position,
      {
        y: 0.3,
        z: -0.2,
        ease: "power2.inOut",
      },
      "a"
    ).to(
      material.uniforms.uColorChange,
      {
        value: 1,
        ease: "power2.inOut",
      },
      "a"
    );

    // Animation Loop
    const clock = new THREE.Clock();
    const render = () => {
      material.uniforms.uTime.value = clock.getElapsedTime();
      renderer.render(scene, camera);
      requestAnimationFrame(render);
    };

    render();

    // Cleanup
    return () => {
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      scene.remove(sphere);
    };
  }, []);

  return (
    <div className="w-full">
      <div className="landing w-screen relative h-[200vh]">
        <canvas ref={canvasRef} className="absolute top-40"></canvas>
      </div>
    </div>
  );
};

export default ThreeScene;
