import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import vertexShadertwo from "../shaders/vertexShadertwo.glsl";
import fragmentShadertwo from "../shaders/fragmentShadertwo.glsl";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ThreeScene = () => {
  const canvasRef = useRef(null);
  const scene = useRef(new THREE.Scene());
  const camera = useRef(
    new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100)
  );
  const renderer = useRef(null);
  const sphere = useRef(null);
  const clock = useRef(new THREE.Clock());
  const blinkRef = useRef(null);
  const h2Ref = useRef(null);
  const h1Ref = useRef(null);
  const colorChange = useRef(0);

  useEffect(() => {
    // Renderer setup
    renderer.current = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.current.setSize(window.innerWidth, window.innerHeight);
    renderer.current.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.current.domElement.style.position = "absolute";
    renderer.current.domElement.style.top = "0";
    canvasRef.current.appendChild(renderer.current.domElement);

    // Geometry & ShaderMaterial
    const geometry = new THREE.IcosahedronGeometry(1.3, 50);
    const material = new THREE.ShaderMaterial({
      vertexShader: vertexShadertwo,
      fragmentShader: fragmentShadertwo,
      uniforms: {
        uTime: { value: 0.0 },
        uColorChange: { value: colorChange.current },
      },
    });

    // Create Sphere
    sphere.current = new THREE.Mesh(geometry, material);
    sphere.current.position.set(0, 0.5, 0);
    scene.current.add(sphere.current);

    // Camera setup
    camera.current.position.z = 3;

    // Scroll event
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (sphere.current) {
        sphere.current.position.y = 0.5 - scrollY * 0.0015;
      }
      if (h2Ref.current) {
        h2Ref.current.style.transform = `translateY(${scrollY * 0.15}px)`;
      }

      let newColor = scrollY < 500 ? 0 : scrollY < 800 ? 1 : 2;
      if (colorChange.current !== newColor) {
        colorChange.current = newColor;
        if (sphere.current.material) {
          sphere.current.material.uniforms.uColorChange.value = newColor;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Animation loop
    const render = () => {
      material.uniforms.uTime.value = clock.current.getElapsedTime();
      renderer.current.render(scene.current, camera.current);
      requestAnimationFrame(render);
    };

    render();

    // GSAP Animations
    gsap.to(blinkRef.current, {
      opacity: 0.1,
      repeat: -1,
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
      geometry.dispose();
      material.dispose();
      if (sphere.current) scene.current.remove(sphere.current);
      if (renderer.current) renderer.current.dispose();
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
