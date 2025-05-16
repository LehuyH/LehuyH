"use client";

import { useEffect, useRef, useState } from "react";

export function PaintableBG({
  className,
  containerRef,
}: {
  className?: string;
  containerRef: React.RefObject<HTMLElement>;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dims, setDims] = useState(
    null as {
      width: number;
      height: number;
    } | null,
  );

  useEffect(() => {
    const aspect = window.innerWidth / window.innerHeight;
    const normalizedWidth = window.innerWidth / aspect;
    const normalizedHeight = window.innerHeight / aspect;
    setDims({
      width: normalizedWidth,
      height: normalizedHeight,
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const container = containerRef.current;
    if (!container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function handleDraw(e: MouseEvent) {
      if (!canvas) return;
      if (!container) return;
      if (!ctx) return;

      const bounds = container.getBoundingClientRect();
      const mousePosPercentX = (e.clientX - bounds.left) / bounds.width;
      const mousePosPercentY = (e.clientY - bounds.top) / bounds.height;
      const mousePos = {
        x: mousePosPercentX * canvas.width,
        y: mousePosPercentY * canvas.height,
      };

      ctx.beginPath();
      ctx.fillStyle = `rgba(${mousePos.x}, ${mousePos.y}, 0, 0.5)`;
      ctx.ellipse(mousePos.x, mousePos.y, 10, 10, 0, 0, Math.PI * 2);
      ctx.fill();
    }

    container.addEventListener("mousemove", handleDraw);
    return () => {
      container.removeEventListener("mousemove", handleDraw);
    };
  }, [containerRef, canvasRef, dims]);

  return (
    dims && (
      <canvas
        width={dims.width}
        height={dims.height}
        ref={canvasRef}
        className={`${className}`}
      ></canvas>
    )
  );
}
