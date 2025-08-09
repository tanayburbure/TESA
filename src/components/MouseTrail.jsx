// MouseTrail.jsx
import React, { useRef, useEffect } from "react";

export default function MouseTrail({
  color = "#111111",
  maxWidth = 12,
  minWidth = 2,
  ttl = 900,
  spacing = 2,
}) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const pointsRef = useRef([]); // {x,y,timestamp,pressure (0..1)}
  const pointerActiveRef = useRef(false);
  const lastPosRef = useRef(null);
  const resizeObserverRef = useRef(null);

  // helper: resize canvas to cover parent & account for DPR
  const resizeCanvas = (canvas) => {
    const parent = canvas.parentElement || document.body;
    const rect = parent.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const width = Math.max(1, Math.floor(rect.width));
    const height = Math.max(1, Math.floor(rect.height));
    if (canvas.width !== Math.floor(width * dpr) || canvas.height !== Math.floor(height * dpr)) {
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      const ctx = canvas.getContext("2d");
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });

    // initial resize
    resizeCanvas(canvas);

    // observe parent size changes (keeps canvas synced)
    if ("ResizeObserver" in window) {
      resizeObserverRef.current = new ResizeObserver(() => resizeCanvas(canvas));
      resizeObserverRef.current.observe(canvas.parentElement || document.body);
    } else {
      // fallback
      window.addEventListener("resize", () => resizeCanvas(canvas));
    }

    // drawing config (to get pencil-like look)
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.shadowBlur = 0;

    // helpers
    const now = () => performance.now();

    // record pointer (mouse/touch) positions into pointsRef
    const pushPoint = (x, y, pressure = 0.5) => {
      const pts = pointsRef.current;
      const last = pts.length ? pts[pts.length - 1] : null;
      if (last) {
        const dx = x - last.x;
        const dy = y - last.y;
        if (dx * dx + dy * dy < spacing * spacing) return; // too close
      }
      pts.push({ x, y, t: now(), p: pressure });
    };

    // pointer event handlers
    const handlePointerDown = (ev) => {
      pointerActiveRef.current = true;
      ev.target.setPointerCapture?.(ev.pointerId);
      const rect = canvas.getBoundingClientRect();
      pushPoint(ev.clientX - rect.left, ev.clientY - rect.top, ev.pressure ?? 0.5);
      lastPosRef.current = { x: ev.clientX - rect.left, y: ev.clientY - rect.top };
    };

    const handlePointerMove = (ev) => {
      if (!pointerActiveRef.current) {
        // still show short "hover traces" as in recording: we will record but with low pressure
        // Optional: comment out to only draw when pressed.
      }
      const rect = canvas.getBoundingClientRect();
      const x = ev.clientX - rect.left;
      const y = ev.clientY - rect.top;
      const pressure = ev.pressure ?? 0.5;
      pushPoint(x, y, pressure);
      lastPosRef.current = { x, y };
    };

    const handlePointerUp = (ev) => {
      pointerActiveRef.current = false;
      ev.target.releasePointerCapture?.(ev.pointerId);
    };

    // Support touch fallback (touch events map to pointer events in modern browsers,
    // but include touch handlers for older devices)
    const handleTouchStart = (ev) => {
      const rect = canvas.getBoundingClientRect();
      for (let i = 0; i < ev.touches.length; i++) {
        const t = ev.touches[i];
        pushPoint(t.clientX - rect.left, t.clientY - rect.top, 0.6);
      }
    };
    const handleTouchMove = (ev) => {
      ev.preventDefault();
      const rect = canvas.getBoundingClientRect();
      for (let i = 0; i < ev.touches.length; i++) {
        const t = ev.touches[i];
        pushPoint(t.clientX - rect.left, t.clientY - rect.top, 0.6);
      }
    };

    // attach pointer listeners to canvas (pointer events preferred)
    canvas.addEventListener("pointerdown", handlePointerDown, { passive: true });
    canvas.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerup", handlePointerUp, { passive: true });

    // touch fallback
    canvas.addEventListener("touchstart", handleTouchStart, { passive: false });
    canvas.addEventListener("touchmove", handleTouchMove, { passive: false });

    // main render loop
    const render = () => {
      const nowT = now();
      const pts = pointsRef.current;

      // clear canvas with slight transparent overlay to get smooth blending (we redraw everything each frame)
      // We'll clear fully each frame (white background in recording) and then draw all active strokes
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // prune old points
      while (pts.length && nowT - pts[0].t > ttl) {
        pts.shift();
      }

      // if less than 2 points, nothing to draw
      if (pts.length >= 2) {
        // We'll draw a single continuous smooth path through points
        // Approach: iterate points, compute alpha per point (based on age), and draw segments
        ctx.save();
        // optional: subtle paper texture impression via globalCompositeOperation 'source-over'
        ctx.globalCompositeOperation = "source-over";

        // We'll draw multiple thin strokes to simulate pencil softness.
        // Primary path (center)
        ctx.beginPath();
        for (let i = 0; i < pts.length; i++) {
          const p = pts[i];
          const age = nowT - p.t;
          const life = Math.max(0, 1 - age / ttl); // 1 -> fresh, 0 -> dead
          const width = Math.max(minWidth, Math.min(maxWidth, minWidth + life * (maxWidth - minWidth)));

          // smoothing - use quadratic curve between midpoints
          if (i === 0) {
            ctx.moveTo(p.x, p.y);
          } else {
            const prev = pts[i - 1];
            const cx = (prev.x + p.x) / 2;
            const cy = (prev.y + p.y) / 2;
            ctx.quadraticCurveTo(prev.x, prev.y, cx, cy);
          }

          // We'll stroke per-point below (after building path)
        }
        // stroke settings for main line
        ctx.lineWidth = (maxWidth + minWidth) / 2;
        ctx.strokeStyle = color;
        ctx.globalAlpha = 1.0;
        ctx.stroke();
        ctx.closePath();

        // Now draw a variable-alpha layered stroke to produce fade
        // We'll draw segments in reverse order to ensure fresher points appear on top
        for (let i = 1; i < pts.length; i++) {
          const a = pts[i - 1];
          const b = pts[i];
          const midX = (a.x + b.x) / 2;
          const midY = (a.y + b.y) / 2;
          const age = nowT - b.t;
          const life = Math.max(0, 1 - age / ttl);
          const alpha = life; // linear fade
          const width = Math.max(minWidth, Math.min(maxWidth, minWidth + life * (maxWidth - minWidth)));

          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.quadraticCurveTo(a.x, a.y, midX, midY);

          // pencil-like softness: small shadow + slight alpha
          ctx.lineWidth = width;
          ctx.strokeStyle = color;
          ctx.globalAlpha = Math.pow(alpha, 1.0); // tweak exponent if needed
          ctx.stroke();
          ctx.closePath();
        }

        // subtle final overlay for thin highlight (gives a dry-brush feel)
        ctx.globalAlpha = 0.08;
        ctx.lineWidth = Math.max(1, minWidth / 2);
        ctx.beginPath();
        for (let i = 0; i < pts.length; i++) {
          const p = pts[i];
          if (i === 0) ctx.moveTo(p.x, p.y);
          else {
            const prev = pts[i - 1];
            const cx = (prev.x + p.x) / 2;
            const cy = (prev.y + p.y) / 2;
            ctx.quadraticCurveTo(prev.x, prev.y, cx, cy);
          }
        }
        ctx.stroke();
        ctx.restore();
      }

      // keep loop
      rafRef.current = requestAnimationFrame(render);
    };

    rafRef.current = requestAnimationFrame(render);

    // cleanup
    return () => {
      cancelAnimationFrame(rafRef.current);
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("touchstart", handleTouchStart);
      canvas.removeEventListener("touchmove", handleTouchMove);

      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
      } else {
        window.removeEventListener("resize", () => resizeCanvas(canvas));
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [color, maxWidth, minWidth, ttl, spacing]);

  // container style: full-screen white area like recording
  return (
    <div className="relative w-full h-full bg-white overflow-hidden">
      <canvas
        ref={canvasRef}
        style={{ display: "block", width: "100%", height: "100%" }}
        aria-hidden
      />
    </div>
  );
}
