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
  const h1Ref = useRef(null);
  const blinkRef = useRef(null);
  const colorChangeRef = useRef(0);

  useEffect(() => {
    const renderer = rendererRef.current;
    renderer.setSize(window.innerWidth, window.innerHeight * 1.2);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.top = "0";
    renderer.domElement.style.left = "0";
    renderer.domElement.style.zIndex = "20"; // Setting z-index directly on the canvas element
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
      sphereRef.current.position.y = 1.5 - scrollY * 0.0007;

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
          gsap.to(sphereRef.current.material.uniforms.uColorChange, {
            value: newColor,
            duration: 0.5,
          });
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

    // GSAP animations with a single timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".landing",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    // You can add more ScrollTrigger-based tweens to the timeline if needed.
    // This is just an example of how you can structure it.

    gsap.to(blinkRef.current, {
      opacity: 0.1,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
      ease: "power0",
      repeatDelay: 0.7,
    });

    gsap.fromTo(
      h1Ref.current,
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: h1Ref.current,
          start: "70% 40%",
          end: "top 10%",
          scrub: 3,
          onEnter: () => gsap.to(h1Ref.current, { opacity: 1 }),
          onLeaveBack: () => gsap.to(h1Ref.current, { opacity: 0 }),
        },
      }
    );

    const handleResize = () => {
      cameraRef.current.aspect = window.innerWidth / (window.innerHeight * 1.2);
      cameraRef.current.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight * 1.2);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      geometry.dispose();
      material.dispose();
      sceneRef.current.remove(sphereRef.current);
      renderer.dispose();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
      <div className="landing w-screen relative flex flex-col">
        <div className="flex items-center justify-center">
          <h1
            ref={h1Ref}
            className="text-[7vh] font-[font4] text-center absolute font-semibold tracking-tight pt-[65vh] z-30"
          >
            <span className="font-medium pr-4 mt-2" ref={blinkRef}>
              [
            </span>{" "}
            WE ARE
          </h1>
        </div>
        <div ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-20"></div>
      </div>
    </div>
  );
};

export default ThreeScene;