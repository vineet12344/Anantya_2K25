import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function PortalEffect() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 300;
    canvas.height = 300;

    let hue = 0;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.03)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const maxRings = 5;
      for (let i = 0; i < maxRings; i++) {
        const size = ((Date.now() / 50) % 100) + i * 20;
        const ringHue = i % 2 === 0 ? 0 : 350;

        ctx.beginPath();
        ctx.arc(centerX, centerY, size, 0, Math.PI * 2);
        ctx.strokeStyle = `hsla(${ringHue}, 100%, ${50 - i * 5}%, 0.8)`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      const particleCount = 50;
      for (let i = 0; i < particleCount; i++) {
        const angle = (Date.now() / 1000 + i * 0.2) % (Math.PI * 2);
        const distance = 20 + Math.sin(Date.now() / 500 + i) * 40;

        const x = centerX + Math.cos(angle) * distance;
        const y = centerY + Math.sin(angle) * distance;

        const particleHue = i % 3 === 0 ? 0 : i % 3 === 1 ? 15 : 345;

        ctx.beginPath();
        ctx.arc(x, y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${particleHue}, 100%, 50%, 0.8)`;
        ctx.fill();
      }

      hue = (hue + 0.5) % 360;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <motion.div
      className="relative setWidth"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
    >
      <canvas ref={canvasRef} className="rounded-full portal-glow" />
    </motion.div>
  );
}