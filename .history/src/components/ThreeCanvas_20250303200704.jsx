import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import LocomotiveScroll from "locomotive-scroll";

const ThreeCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();

    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed" />;
};

export default ThreeCanvas;
