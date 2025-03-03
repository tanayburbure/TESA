import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import vertexShader from "../shaders/vertexShader.glsl?raw";
import fragmentShader from "../shaders/fragmentShader.glsl?raw";
import LocomotiveScroll from "locomotive-scroll";

const ThreeCanvas = () => {
  const canvasRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const isDesktop = window.innerWidth >= 1024;

  useEffect(() => {
    if (!isDesktop) return;

    // Initialize Locomotive Scroll
    const locomotiveScroll = new LocomotiveScroll({
      el: scrollContainerRef.current,
      smooth: true,
    });

    // Three.js setup
    const scene = new THREE.Scene();
    const distance = 200;
    const fov = (2 * Math.atan(window.innerHeight / 2 / distance) * 180) / Math.PI;
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
    const planes = [];
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    images.forEach((image) => {
      const imageBounds = image.getBoundingClientRect();
      
      // Ensure texture is loaded before assigning
      const texture = new THREE.TextureLoader().load(image.src, () => {
        texture.needsUpdate = true;
      });

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
      planes.push(plane);
      scene.add(plane);
    });

    const updatePlanesPosition = () => {
      planes.forEach((plane, index) => {
        const image = images[index];
        const imgBounds = image.getBoundingClientRect();
        plane.position.set(
          imgBounds.left - window.innerWidth / 2 + imgBounds.width / 2,
          -imgBounds.top + window.innerHeight / 2 - imgBounds.height / 2,
          0
        );
        plane.geometry.dispose();
        plane.geometry = new THREE.PlaneGeometry(imgBounds.width, imgBounds.height);
      });
    };

    const animate = () => {
      updatePlanesPosition();
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      updatePlanesPosition();
    };

    window.addEventListener("resize", handleResize);

    window.addEventListener("mousemove", (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = 1 - (event.clientY / window.innerHeight) * 2;
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(planes);

      planes.forEach((plane) => {
        gsap.to(plane.material.uniforms.uHover, { value: 0, duration: 0.5 });
      });

      if (intersects.length > 0) {
        const intersectedPlane = intersects[0];
        gsap.to(intersectedPlane.object.material.uniforms.uMouse.value, {
          x: intersectedPlane.uv.x,
          y: intersectedPlane.uv.y,
          duration: 0.5,
        });
        gsap.to(intersectedPlane.object.material.uniforms.uHover, { value: 1, duration: 0.5 });
      }
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      locomotiveScroll.destroy();
    };
  }, [isDesktop]);

  return (
    <div ref={scrollContainerRef} data-scroll-container>
      <canvas ref={canvasRef} className="fixed top-0 left-0 z-[-1]" />
    </div>
  );
};

export default ThreeCanvas;
