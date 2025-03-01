import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ClickEffectUI = ({ clicks }) => {
  return (
    <div>
      {clicks.map((click) => (
        <motion.img
          key={click.id}
          src={click.image}
          initial={{ opacity: 2, scale: 1 }}
          animate={{ opacity: 0, scale: 10 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="fixed z-[999] pointer-events-none"
          style={{
            width: `${click.size}px`,
            height: `${click.size}px`,
            left: click.x,
            top: click.y,
            transform: "translate(-50%, -50%)", // Center the image at the click point
          }}
        />
      ))}
    </div>
  );
};

const ClickEffect = () => {
  const [clicks, setClicks] = useState([]);

  const handleClick = (e) => {
    const newClick = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY,
      size: Math.random() * 20 + 10, // Random size between 10px - 30px
      image: "/cursorPath.png", // Replace with your image path
    };

    setClicks((prev) => [...prev, newClick]);
    setTimeout(() => {
      setClicks((prev) => prev.filter((click) => click.id !== newClick.id));
    }, 500);
  };

  useEffect(() => {
    window.addEventListener("click", handleClick);
    
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return <ClickEffectUI clicks={clicks} />;
};

export default ClickEffect;
