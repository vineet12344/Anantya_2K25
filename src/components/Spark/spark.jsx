import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SparkEffect = () => {
  const [sparks, setSparks] = useState([]);

  const handleMouseMove = (e) => {
    
    const newSpark = {
      id: Math.random() * 10 + 5,
      x: e.clientX,
      y: e.clientY,
      size: Math.random() * 10 + 5, // Random size
      color: ["#ff0000", "#ff0000", "#ff0000", "#ff0000", "#ff0000"][
        Math.floor(Math.random() * 5)
      ], // Random color
    };

    setSparks((prev) => [...prev, newSpark]);

    setTimeout(() => {
      setSparks((prev) => prev.filter((spark) => spark.id !== newSpark.id));
    }, 500);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  



  return (
    <>
      {sparks.map((spark) => (
        <motion.div
          key={spark.id}
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed z-[999] rounded-full pointer-events-none"
          style={{
            width: `${spark.size}px`,
            height: `${spark.size}px`,
            backgroundColor: spark.color,
            left: spark.x,
            top: spark.y,
          }}
        />
      ))}
    </>
  );
};

export default SparkEffect;
