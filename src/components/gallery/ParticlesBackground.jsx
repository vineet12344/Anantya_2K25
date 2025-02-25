import { useEffect } from "react";
import * as particlesJS from 'particles.js';

const ParticlesBackground = () => {
  useEffect(() => {
    particlesJS.load('particles-container', {
      particles: {
        number: { value: 100 },
        size: { value: 2 },
        move: { speed: 3 },
      },
      interactivity: {
        events: { onhover: { enable: true, mode: "repulse" } },
      },
      retina_detect: true,
    });

    const handleResize = () => {
      particlesJS.resize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      id="particles-container"
      className="fixed top-0 left-0 w-full h-screen pointer-events-none"
    ></div>
  );
};

export default ParticlesBackground;