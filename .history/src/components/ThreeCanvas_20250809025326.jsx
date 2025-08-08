import React, { useEffect, useRef } from "react";
// import * as THREE from "three";
// import gsap from "gsap";
// import LocomotiveScroll from "locomotive-scroll";
// import vertexShader from "../shaders/vertexShader.glsl";
// import fragmentShader from "../shaders/fragmentShader.glsl";

const ThreeCanvas = () => {
  const canvasRef = useRef(null);
  // const sceneRef = useRef(new THREE.Scene());
  // const planesRef = useRef([]);
  // const mouseRef = useRef(new THREE.Vector2());
  // const raycasterRef = useRef(new THREE.Raycaster());
  // const textureLoader = useRef(new THREE.TextureLoader());
  // let animationFrameId;

  useEffect(() => {
    // const locomotiveScroll = new LocomotiveScroll();

    // const scene = sceneRef.current;
    // const distance = 200;
    // const fov = (2 * Math.atan(window.innerHeight / (2 * distance)) * 180) / Math.PI;
    // const camera = new THREE.PerspectiveCamera(fov, window.innerWidth / window.innerHeight, 0.1, 1000);
    // camera.position.z = distance;

    // const renderer = new THREE.WebGLRenderer({
    //   canvas: canvasRef.current,
    //   antialias: true,
    //   alpha: true,
    // });
    // renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    // renderer.setSize(window.innerWidth, window.innerHeight);

    // const images = document.querySelectorAll("img");
    // planesRef.current = []; // Reset before adding new planes

    // images.forEach((image) => {
    //   const imgBounds = image.getBoundingClientRect();
    //   const texture = textureLoader.current.load(image.src);
      
    //   const geometry = new THREE.PlaneGeometry(imgBounds.width, imgBounds.height);
    //   const material = new THREE.ShaderMaterial({
    //     uniforms: {
    //       uTexture: { value: texture },
    //       uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    //       uHover: { value: 0 },
    //     },
    //     vertexShader,
    //     fragmentShader,
    //     transparent: true,
    //   });

    //   const plane = new THREE.Mesh(geometry, material);
    //   plane.position.set(
    //     imgBounds.left - window.innerWidth / 2 + imgBounds.width / 2,
    //     -imgBounds.top + window.innerHeight / 2 - imgBounds.height / 2,
    //     0
    //   );
    //   planesRef.current.push(plane);
    //   scene.add(plane);
    // });

    // const updatePlanesPosition = () => {
    //   planesRef.current.forEach((plane, index) => {
    //     const image = images[index];
    //     if (!image) return;
    //     const imgBounds = image.getBoundingClientRect();
    //     plane.position.set(
    //       imgBounds.left - window.innerWidth / 2 + imgBounds.width / 2,
    //       -imgBounds.top + window.innerHeight / 2 - imgBounds.height / 2,
    //       0
    //     );
    //   });
    // };

    // const animate = () => {
    //   updatePlanesPosition();
    //   renderer.render(scene, camera);
    //   animationFrameId = requestAnimationFrame(animate);
    // };
    // animate();

    // let resizeTimeout;
    // const handleResize = () => {
    //   clearTimeout(resizeTimeout);
    //   resizeTimeout = setTimeout(() => {
    //     camera.aspect = window.innerWidth / window.innerHeight;
    //     camera.updateProjectionMatrix();
    //     renderer.setSize(window.innerWidth, window.innerHeight);
    //     updatePlanesPosition();
    //   }, 150);
    // };
    // window.addEventListener("resize", handleResize);

    // const handleMouseMove = (event) => {
    //   mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
    //   mouseRef.current.y = 1 - (event.clientY / window.innerHeight) * 2;
    //   raycasterRef.current.setFromCamera(mouseRef.current, camera);

    //   const intersects = raycasterRef.current.intersectObjects(planesRef.current);

    //   planesRef.current.forEach((plane) => {
    //     gsap.to(plane.material.uniforms.uHover, { value: 0, duration: 0.3 });
    //   });

    //   if (intersects.length > 0) {
    //     const intersectedPlane = intersects[0].object;
    //     gsap.to(intersectedPlane.material.uniforms.uMouse.value, {
    //       x: intersects[0].uv.x,
    //       y: intersects[0].uv.y,
    //       duration: 0.3,
    //     });
    //     gsap.to(intersectedPlane.material.uniforms.uHover, { value: 1, duration: 0.3 });
    //   }
    // };

    // window.addEventListener("mousemove", handleMouseMove);

    // return () => {
    //   cancelAnimationFrame(animationFrameId);
    //   renderer.dispose();
    //   planesRef.current.forEach((plane) => {
    //     plane.geometry.dispose();
    //     plane.material.dispose();
    //   });
    //   scene.clear();
    //   locomotiveScroll.destroy();
    //   window.removeEventListener("resize", handleResize);
    //   window.removeEventListener("mousemove", handleMouseMove);
    // };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="fixed" />
      <div className="landing relative flex justify-center">
        <img className="" src="./TESA4.png" alt="Logo" />
        <div className="flex items-center">
          <h3 className="text-zinc-700 font-semibold text-[1.8vw] absolute top-[67vh]">TELECOM ENGINEER STUDENTS ASSOCIATION</h3>
          <h2
            className="text-[2.5vw] z-[99] font-bold text-center absolute cursor-pointer pt-4"
          >
            WE CREATE. YOU CELEBRATE.
          </h2>
        </div>
        
      </div>
    </>
  );
};

export default ThreeCanvas;
