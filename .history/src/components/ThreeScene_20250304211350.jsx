import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import vertexShadertwo from "../shaders/vertexShadertwo.glsl";
import fragmentShadertwo from "../shaders/fragmentShadertwo.glsl";
import { gsap } from "gsap"; // Import gsap to resolve potential error
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

const ThreeScene = () => {
  const canvasRef = useRef(null);
  const sceneRef = useRef(new THREE.Scene());
  const cameraRef = useRef(new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100));
  const rendererRef = useRef(new THREE.WebGLRenderer({ antialias: true, alpha: true }));
  const sphereRef = useRef(null);
  const clockRef = useRef(new THREE.Clock());
  const blinkRef = useRef(null); // Added blinkRef for the blink animation
  const h2Ref = useRef(null); // Added ref for h2
  const h1Ref = useRef(null); // Added ref for h1
  const mouseRef = useRef(new THREE.Vector2()); // Added mouse position reference
  const isMouseOnPlane = useRef(false); // Track if mouse is on the plane

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
        uMouse: { value: new THREE.Vector2() }, // Add mouse uniform
        uHover: { value: 0.0 }, // Add hover uniform
      },
    });

    sphereRef.current = new THREE.Mesh(geometry, material);
    sphereRef.current.position.y = 0.5;
    sceneRef.current.add(sphereRef.current);
    cameraRef.current.position.z = 3;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      sphereRef.current.position.y = 0.5 - scrollY * 0.001; // Adjust the multiplier for speed
      h2Ref.current.style.transform = `translateY(${scrollY * 0.3}px)`; // Move h2 down with scroll
    };

    const handleMouseMove = (event) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;

      // Check if mouse is over the sphere
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouseRef.current, cameraRef.current);
      const intersects = raycaster.intersectObject(sphereRef.current);

      isMouseOnPlane.current = intersects.length > 0; // Update mouse on plane status
      material.uniforms.uHover.value = isMouseOnPlane.current ? 0.0 : 1.0; // Set hover effect
      material.uniforms.uMouse.value.copy(mouseRef.current); // Update mouse uniform
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove); // Add mouse move event listener

    const render = () => {
      material.uniforms.uTime.value = clockRef.current.getElapsedTime();
      renderer.render(sceneRef.current, cameraRef.current);
      requestAnimationFrame(render);
    };

    render();

    // Blink animation for the span inside h1
    gsap.to(blinkRef.current, {
      opacity: 0.1,
      repeat: Infinity,
      repeatDelay: 0.7,
      duration: 0.7,
      ease: 'power0',
      yoyo: true,
    });

    // GSAP ScrollTrigger to vanish h2 tag after some scrolling
    gsap.to(h2Ref.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: h2Ref.current,
        start: "top 50%",
        end: "top 90%",
        scrub: 1,
      },
    });

    // GSAP ScrollTrigger to hide h1 tag initially and then make it visible
    gsap.fromTo(h1Ref.current, 
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
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove); // Clean up mouse move event listener
    };
  }, []);

  return (
    <div className="w-full">
      <div className="landing w-screen relative flex flex-col">
        <div className="flex items-center justify-center">
          <h2 ref={h2Ref} className="text-[2.5vw] z-[3] font-bold text-zinc-800 text-center absolute cursor-pointer pt-4">WE CREATE. YOU CELEBRATE.</h2>
          <h1 ref={h1Ref} className='text-[5.5vh] text-center absolute font-bold pt-[62vh] z-[3] '><span className='font-medium pr-4 mb-2' ref={blinkRef}>[</span> WE ARE </h1>
        </div>
        <div ref={canvasRef} className="absolute "></div>
      </div>
    </div>
  );
};

export default ThreeScene;
