import { useEffect } from 'react';
import './style.css'; // Ensure you have this CSS file in the same directory

const CosmicAnimation = () => {
  useEffect(() => {
    // Function to create random stars in the background
    function createStars() {
      const background = document.getElementById("spaceBackground");
      const numberOfStars = 100;

      for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement("div");
        star.className = "star";
        // Random placement
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        // Random size
        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        // Random animation duration
        star.style.setProperty("--duration", `${Math.random() * 3 + 2}s`);

        background.appendChild(star);
      }
    }


    // Function to create a comet effect
    function createComet() {
      const background = document.getElementById("spaceBackground");
      const comet = document.createElement("div");
      comet.className = "comet";

      // Random start position (horizontal)
      const startPos = Math.random() * 100;
      comet.style.left = `${startPos}%`;
      comet.style.top = "0";

      background.appendChild(comet);

      // Cleanup
      setTimeout(() => comet.remove(), 3000);
    }

    // Function to launch comets at regular intervals
    function initComets() {
      setInterval(createComet, 4000);
    }

    // Function to handle manual rotation of the container
    function initContainerInteractions() {
      const container = document.querySelector(".spinner-container");
      let isRotating = false;
      let startX = 0;
      let startY = 0;

      container.addEventListener("mousedown", (e) => {
        isRotating = true;
        startX = e.clientX;
        startY = e.clientY;
        container.style.transition = "none";
      });

      document.addEventListener("mousemove", (e) => {
        if (!isRotating) return;

        const deltaX = e.clientX - startX;
        const deltaY = e.clientY - startY;

        const rotationY = deltaX * 0.5;
        const rotationX = -deltaY * 0.5;

        container.style.transform = `
          rotateX(${rotationX}deg)
          rotateY(${rotationY}deg)
        `;
      });

      document.addEventListener("mouseup", () => {
        if (!isRotating) return;
        isRotating = false;

        // Final transition
        container.style.transition = "transform 1s cubic-bezier(0.4, 0, 0.2, 1)";
        container.style.transform = "rotateX(0deg) rotateY(0deg)";

        // Bounce effect
        setTimeout(() => {
          container.style.transform = "rotateX(2deg) rotateY(2deg)";
          setTimeout(() => {
            container.style.transform = "rotateX(0deg) rotateY(0deg)";
          }, 150);
        }, 1000);
      });
    }

    // Initialize all effects
    createStars();
    initComets();
    initContainerInteractions();
  }, []);

  return (
    <div className="space-background" id="spaceBackground">
      <div className="nebula"></div>
      <div className="spinner-container">
        <div className="portal-effect"></div>
        <div className="energy-field"></div>
        <div className="ring ring-1"></div>
        <div className="ring ring-2"></div>
        <div className="ring ring-3"></div>
        <div className="ring ring-4"></div>
        <div className="ring ring-5"></div>
        <div className="center-circle"></div>
      </div>
    </div>
  );
};

export default CosmicAnimation;