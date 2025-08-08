import React, { useRef, useEffect } from 'react';

const DrawingPage = () => {
  const canvasRef = useRef(null);
  const pointsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set up canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let animationFrameId;

    const draw = () => {
      // Create a fading effect by drawing a semi-transparent rectangle over the entire canvas
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#000';
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';

      // Draw the current points
      if (pointsRef.current.length > 1) {
        ctx.moveTo(pointsRef.current[0].x, pointsRef.current[0].y);
        for (let i = 1; i < pointsRef.current.length; i++) {
          ctx.lineTo(pointsRef.current[i].x, pointsRef.current[i].y);
        }
      }
      ctx.stroke();

      // Remove old points to create the "vanishing" effect
      if (pointsRef.current.length > 50) {
        pointsRef.current.shift();
      }
      
      animationFrameId = requestAnimationFrame(draw);
    };
    
    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleMouseMove = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    pointsRef.current.push({ x, y });
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#fff',
        overflow: 'hidden',
        cursor: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'sans-serif',
      }}
    >
      <h1
        style={{
          position: 'relative',
          zIndex: 10,
          color: '#000',
          fontSize: '4rem',
          pointerEvents: 'none',
        }}
      >
        Move Mouse
      </h1>
      <canvas
        ref={canvasRef}
        onMouseMove={handleMouseMove}
        style={{ position: 'absolute', top: 0, left: 0, zIndex: 5 }}
      />
    </div>
  );
};

export default DrawingPage;