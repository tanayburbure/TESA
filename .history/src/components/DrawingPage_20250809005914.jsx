// components/DrawingPage.jsx
import React, { useRef, useEffect } from "react";

const DrawingPage = () => {
  const canvasRef = useRef(null);
  const points = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Exclude drawing over these selectors
    const EXCLUDED_SELECTORS = ["button", ".no-draw"];

    const isExcluded = (element) => {
      return EXCLUDED_SELECTORS.some((selector) =>
        element?.closest(selector)
      );
    };

    const handleMouseMove = (e) => {
      const targetEl = document.elementFromPoint(e.clientX, e.clientY);
      if (isExcluded(targetEl)) return;

      points.current.push({
        x: e.clientX,
        y: e.clientY,
        time: Date.now(),
      });
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    const maxAge = 700; // milliseconds

    const draw = () => {
      const now = Date.now();
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Filter out old points
      points.current = points.current.filter(p => now - p.time < maxAge);

      for (let i = 0; i < points.current.length - 1; i++) {
        const p1 = points.current[i];
        const p2 = points.current[i + 1];

        const age = now - p1.time;
        const alpha = 1 - age / maxAge;

        ctx.strokeStyle = `rgba(0, 0, 0, ${alpha})`;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }

      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 z-[999999] pointer-events-none"
    />
  );
};

export default DrawingPage;
