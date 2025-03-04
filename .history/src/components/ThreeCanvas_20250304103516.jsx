import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import LocomotiveScroll from "locomotive-scroll";
import vertexShader from "../shaders/vertexShader.glsl";
import fragmentShader from "../shaders/fragmentShader.glsl";

const ThreeCanvas = () => {
  const canvasRef = useRef(null);
  const sceneRef = useRef(new THREE.Scene());
  const planesRef = useRef([]);
  const mouseRef = useRef(new THREE.Vector2());
  const raycasterRef = useRef(new THREE.Raycaster());
  let animationFrameId;

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();

    const scene = sceneRef.current;
    const distance = 200;
    const fov = (2 * Math.atan(window.innerHeight / (2 * distance)) * 180) / Math.PI;
    const camera = new THREE.PerspectiveCamera(fov, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = distance;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const images = document.querySelectorAll("img");
    const textureCache = new Map();

    images.forEach((image) => {
      const imageBounds = image.getBoundingClientRect();
      let texture = textureCache.get(image.src);
      if (!texture) {
        texture = new THREE.TextureLoader().load(image.src);
        textureCache.set(image.src, texture);
      }

      const geometry = new THREE.PlaneGeometry(imageBounds.width, imageBounds.height);
      const material = new THREE.ShaderMaterial({
        uniforms: {
          uTexture: { value: texture },
          uMouse: { value: new THREE.Vector2(0.5, 0.5) },
          uHover: { value: 0 },
        },
        vertexShader,
        fragmentShader,
        transparent: true,
      });

      const plane = new THREE.Mesh(geometry, material);
      plane.position.set(
        imageBounds.left - window.innerWidth / 2 + imageBounds.width / 2,
        -imageBounds.top + window.innerHeight / 2 - imageBounds.height / 2,
        0
      );
      planesRef.current.push(plane);
      scene.add(plane);
    });

    const updatePlanesPosition = () => {
      planesRef.current.forEach((plane, index) => {
        const image = images[index];
        if (!image) return;
        const imgBounds = image.getBoundingClientRect();
        plane.position.set(
          imgBounds.left - window.innerWidth / 2 + imgBounds.width / 2,
          -imgBounds.top + window.innerHeight / 2 - imgBounds.height / 2,
          0
        );

        if (plane.geometry) plane.geometry.dispose();
        plane.geometry = new THREE.PlaneGeometry(imgBounds.width, imgBounds.height);
      });
    };

    const animate = () => {
      updatePlanesPosition();
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        updatePlanesPosition();
      }, 150);
    };
    window.addEventListener("resize", handleResize);

    let lastMouseMove = 0;
    const handleMouseMove = (event) => {
      const now = performance.now();
      if (now - lastMouseMove < 50) return;
      lastMouseMove = now;

      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = 1 - (event.clientY / window.innerHeight) * 2;
      raycasterRef.current.setFromCamera(mouseRef.current, camera);

      const intersects = raycasterRef.current.intersectObjects(planesRef.current);
      planesRef.current.forEach((plane) => gsap.to(plane.material.uniforms.uHover, { value: 0, duration: 0.5 }));

      if (intersects.length > 0) {
        const intersectedPlane = intersects[0].object;
        gsap.to(intersectedPlane.material.uniforms.uMouse.value, {
          x: intersects[0].uv.x,
          y: intersects[0].uv.y,
          duration: 0.3,
        });
        gsap.to(intersectedPlane.material.uniforms.uHover, { value: 1, duration: 0.3 });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      textureCache.forEach((texture) => texture.dispose());
      planesRef.current.forEach((plane) => {
        if (plane.geometry) plane.geometry.dispose();
        if (plane.material) plane.material.dispose();
      });
      scene.clear();
      locomotiveScroll.destroy();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="" />
      <div className="landing relative">
        <img className="opacity-0" src="./logo.png" alt="Logo" />
      </div>
    </>
  );
};

export default ThreeCanvas;
