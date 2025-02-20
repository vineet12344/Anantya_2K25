// import React, { useEffect } from 'react';
// import Navbar from "../home/navbar/navbar";

// import './EventPage.css';

// function EventPage() {
//   useEffect(() => {
//     for (let i = 1; i <= 13; i++) {
//       const video1 = document.getElementById(`video${i}-1`);
//       const video2 = document.getElementById(`video${i}-2`);
//       const eventImage = document.getElementById(`eventImage${i}`);

//       video1.playbackRate = 0.8;
//       video2.playbackRate = 2.5;

//       video1.onended = function() {
//         video1.style.opacity = "0";
//         setTimeout(() => {
//           video1.classList.add("hidden");
//           eventImage.classList.remove("hidden");
//           eventImage.classList.add("fade-in");
//         }, 1300);
//       };

//       eventImage.addEventListener("mouseenter", function() {
//         video2.style.opacity = "1";
//         video2.play();
//       });

//       eventImage.addEventListener("mouseleave", function() {
//         video2.style.opacity = "0";
//         video2.pause();
//         video2.currentTime = 0;
//       });
//     }
//   }, []);

//   const openModal = (eventId) => {
//     const modal = document.getElementById("eventModal");
//     const modalTitle = document.getElementById("modalTitle");
//     const modalImage = document.getElementById("modalImage");
//     const modalDetails = document.getElementById("modalDetails");

//     modalTitle.innerText = "Event " + eventId;
//     modalImage.src = "manaswi.png";
//     modalDetails.innerText = "Details about Event " + eventId + " go here.";

//     modal.classList.add("active");
//   };

//   const closeModal = () => {
//     document.getElementById("eventModal").classList.remove("active");
//   };

//   const registerEvent = () => {
//     alert("Registration for the event is now open!");
//   };

//   const downloadRulebook = () => {
//     window.location.href = "rulebook.pdf"; // Update with actual rulebook URL
//   };

//   return (
//     <div className="event-page">
//       <Navbar />
//       <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
//         {[...Array(13)].map((_, i) => (
//           <div key={i} className="relative w-[330px] h-[450px] overflow-hidden cursor-pointer" onClick={() => openModal(i + 1)}>
//             <video id={`video${i + 1}-1`} className="absolute w-full h-full object-cover fade-in" autoPlay muted playsInline>
//               <source src="video1.mp4" type="video/mp4" />
//             </video>
//             <img id={`eventImage${i + 1}`} className="absolute w-full h-full event-card hidden" src="manaswi.png" alt="Event Image" />
//             <video id={`video${i + 1}-2`} className="video-overlay" muted playsInline>
//               <source src="video2.mp4" type="video/mp4" />
//             </video>
//           </div>
//         ))}
//       </div>

//       {/* Modal Structure */}
//       <div id="eventModal" className="modal">
//             <p id="modalDetails">Event details go here...</p>

import { BackgroundBeams } from "./StarBackground/StarBG.jsx";
import { HoverEffect } from "./Cards/Cards.jsx";
import { FocusCards } from "./BlurCards/BlurCards.jsx"; // Adjust the path as per your project structure
import { CardDemo } from "./Card3/AnimatedCard.jsx";

function EventPage() {
  const items = [
    {
      title: "Tech Conference 2025",
      description: "Join us for a conference on the latest in tech.",
      link: "/events/tech-conference",
      image: "/image.png", // Ensure correct path
    },
    {
      title: "AI Workshop",
      description: "Hands-on workshop on AI and ML technologies.",
      link: "/events/ai-workshop",
      image: "/image.png",
    },
    {
      title: "Hackathon 2025",
      description: "Compete in a 24-hour coding challenge.",
      link: "/events/hackathon",
      image: "/image.png",
    },
  ];

  // Convert event items to FocusCards format
  const cards = items.map((event) => ({
    title: event.title,
    src: event.image,
  }));

  return (
    <div className="event-page">
      {/* <BackgroundBeams /> */}
      {/* <HoverEffect items={items} /> */}
      {/* <FocusCards cards={cards} /> Add FocusCards here */}
      <div className="border-red-600 border-4 p-20">
          ${
            
          }
      </div>
    </div>
  );
}

export { EventPage };