import React, { useEffect, useRef, useCallback, useMemo } from "react";
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
  const rendererRef = useRef(null);
  const sphereRef = useRef(null);
  const clockRef = useRef(new THREE.Clock());
  const blinkRef = useRef(null);
  const h2Ref = useRef(null);
  const h1Ref = useRef(null);
  const colorChangeRef = useRef(0);
  const animationIdRef = useRef(null);
  const timelineRef = useRef(null);

  // Memoize geometry and material to prevent recreation on re-renders
  const geometry = useMemo(() => new THREE.IcosahedronGeometry(1.1, 50), []);
  
  const material = useMemo(() => new THREE.ShaderMaterial({
    vertexShader: vertexShadertwo,
    fragmentShader: fragmentShadertwo,
    uniforms: {
      uTime: { value: 0.0 },
      uColorChange: { value: 0 },
    },
  }), []);

  // Throttled scroll handler for better performance
  const handleScroll = useCallback(() => {
    if (!sphereRef.current) return;
    
    const scrollY = window.scrollY;
    sphereRef.current.position.y = 0.8 - scrollY * 0.0010;

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
      material.uniforms.uColorChange.value = newColor;
    }
  }, [material]);

  // Throttle scroll events for better performance
  const throttledHandleScroll = useCallback(() => {
    let ticking = false;
    
    return () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
  }, [handleScroll])();

  // Render function with proper cleanup
  const render = useCallback(() => {
    if (!material || !rendererRef.current || !sceneRef.current || !cameraRef.current) return;
    
    material.uniforms.uTime.value = clockRef.current.getElapsedTime();
    rendererRef.current.render(sceneRef.current, cameraRef.current);
    animationIdRef.current = requestAnimationFrame(render);
  }, [material]);

  // Handle window resize efficiently
  const handleResize = useCallback(() => {
    if (!rendererRef.current || !cameraRef.current) return;
    
    const width = window.innerWidth;
    const height = window.innerHeight * 1.2;
    
    cameraRef.current.aspect = width / height;
    cameraRef.current.updateProjectionMatrix();
    rendererRef.current.setSize(width, height);
  }, []);

  useEffect(() => {
    // Initialize renderer only once
    if (!rendererRef.current) {
      rendererRef.current = new THREE.WebGLRenderer({ 
        antialias: true, 
        alpha: true,
        powerPreference: "high-performance"
      });
      rendererRef.current.setSize(window.innerWidth, window.innerHeight * 1.2);
      rendererRef.current.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      rendererRef.current.domElement.style.position = "absolute";
      rendererRef.current.domElement.style.top = "0";
      canvasRef.current.appendChild(rendererRef.current.domElement);
    }

    // Create sphere with memoized geometry and material
    sphereRef.current = new THREE.Mesh(geometry, material);
    sphereRef.current.position.set(0, 0.4, 0);
    sceneRef.current.add(sphereRef.current);
    
    cameraRef.current.position.z = 3.25;

    // Start render loop
    render();

    // Add optimized event listeners
    window.addEventListener("scroll", throttledHandleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    // GSAP animations with proper cleanup
    const blinkAnimation = gsap.to(blinkRef.current, {
      opacity: 0.1,
      repeat: Infinity,
      repeatDelay: 0.7,
      duration: 0.5,
      ease: "power0",
      yoyo: true,
    });

    const scrollAnimation = gsap.fromTo(
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

    // Store timeline for cleanup
    timelineRef.current = gsap.timeline();
    timelineRef.current.add(blinkAnimation);
    timelineRef.current.add(scrollAnimation);

    // Cleanup function
    return () => {
      // Cancel animation frame
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }

      // Clean up Three.js objects
      if (sphereRef.current) {
        sceneRef.current.remove(sphereRef.current);
        sphereRef.current = null;
      }

      // Clean up GSAP animations
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());

      // Remove event listeners
      window.removeEventListener("scroll", throttledHandleScroll);
      window.removeEventListener("resize", handleResize);

      // Dispose of renderer
      if (rendererRef.current) {
        rendererRef.current.dispose();
        if (canvasRef.current && rendererRef.current.domElement.parentNode) {
          canvasRef.current.removeChild(rendererRef.current.domElement);
        }
        rendererRef.current = null;
      }
    };
  }, []); // Empty dependency array since we're using refs and memoized values

  // Cleanup geometry and material on unmount
  useEffect(() => {
    return () => {
      geometry.dispose();
      material.dispose();
    };
  }, [geometry, material]);

  return (
    <div className="w-full">
      <div className="landing w-screen relative flex flex-col">
        <div className="flex items-center justify-center">
          <h1
            ref={h1Ref}
            className="text-[7vh] font-[font4] text-center absolute font-semibold tracking-tight pt-[65vh] z-[99]"
          >
            <span className="font-medium pr-4 mt-2" ref={blinkRef}>
              [
            </span>{" "}
            WE ARE
          </h1>
        </div>
        <div ref={canvasRef} className="absolute z-[1]"></div>
      </div>
    </div>
  );
};

export default ThreeScene;
