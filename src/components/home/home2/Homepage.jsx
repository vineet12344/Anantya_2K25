// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "./Homepage.css";

// const Homepage = () => {
//   const sectionsRef = useRef([]);

//   const images = ["../../../../public/bg_3.jpg", "../../../../public/bg_7.jpg", "../../../../public/bg_4.jpg","../../../../public/bg_6.jpg","../../../../public/bg_9.jpg","../../../../public/bg_2.jpg"];

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     sectionsRef.current.forEach((section) => {
//       if (!section) return; // Ensure section exists
//       const bg = section.querySelector(".bg");

//       gsap.fromTo(
//         bg,
//         { y: "-20%" },
//         {
//           y: "20%",
//           ease: "none",
//           scrollTrigger: {
//             trigger: section,
//             start: "top bottom",
//             end: "bottom top",
//             scrub: true
//           }
//         }
//       );
//     });
//   }, []);

//   return (
//     <div>
//       {images.map((image, i) => (
//         <section
//           key={i}
//           ref={(el) => (sectionsRef.current[i] = el)}
//           className="section"
//         >
//           <div
//             className="bg"
//             style={{ 
//               backgroundImage: `url(${image})`, // ✅ Dynamic image assignment
//             }}
//           ></div>
//           Section {i + 1}
//         </section>
//       ))}
//     </div>
//   );
// };

// export default Homepage;

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "./Homepage.css";
// import "./GlitchText.css"; // Added for glitch effect styling

// const Homepage = () => {
//   const sectionsRef = useRef([]);

//   const images = [
//     "../../../../public/bg_3.jpg",
//     "../../../../public/bg_7.jpg",
//     "../../../../public/bg_4.jpg",
//     "../../../../public/bg_6.jpg",
//     "../../../../public/bg_9.jpg",
//     "../../../../public/bg_2.jpg"
//   ];

//   const texts = [
//     "Unlock the mysteries of the Multiverse ",
//     "Happening This March",
//     "Get ready to experience multiple events across the Multiverse",
//     "Anantya 2025 \u00A0 collaboration with ACM,acm-w,owasp,,csi iste",
//     "Bug Bounties",
//     "Threat Analysis"
//   ];

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     sectionsRef.current.forEach((section) => {
//       if (!section) return;
//       const bg = section.querySelector(".bg");

//       gsap.fromTo(
//         bg,
//         { y: "-20%" },
//         {
//           y: "20%",
//           ease: "none",
//           scrollTrigger: {
//             trigger: section,
//             start: "top bottom",
//             end: "bottom top",
//             scrub: true
//           }
//         }
//       );
//     });
//   }, []);

//   return (
//     <div>
//       {images.map((image, i) => (
//         <section
//           key={i}
//           ref={(el) => (sectionsRef.current[i] = el)}
//           className="section"
//         >
//           <div
//             className="bg"
//             style={{
//               backgroundImage: `url(${image})`
//             }}
//           ></div>
//           <div className="content">
//             <h2 className="text glitch" data-text={texts[i]}>
//               {texts[i]}
//             </h2>
//           </div>
//         </section>
//       ))}
//     </div>
//   );
// };

// export default Homepage;

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "./Homepage.css";
// import "./GlitchText.css"; // Added for glitch effect styling

// const Homepage = () => {
//   const sectionsRef = useRef([]);

//   const images = [
//     "../../../../public/bg_3.jpg",
//     "../../../../public/bg_7.jpg",
//     "../../../../public/bg_4.jpg",
//     "../../../../public/bg_6.jpg",
//     "../../../../public/bg_9.jpg",
//     "../../../../public/bg_2.jpg"
//   ];

//   const texts = [
//     "Unlock the mysteries of the Multiverse ",
//     "Happening This March",
//     "Get ready to experience multiple events across the Multiverse",
//     "Anantya 2025 \u00A0 collaboration with ACM, ACM-W, OWASP, CSI, ISTE",
//     "Bug Bounties",
//     "Threat Analysis"
//   ];

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     sectionsRef.current.forEach((section) => {
//       if (!section) return;
//       const bg = section.querySelector(".bg");

//       gsap.fromTo(
//         bg,
//         { y: "-20%" },
//         {
//           y: "20%",
//           ease: "none",
//           scrollTrigger: {
//             trigger: section,
//             start: "top bottom",
//             end: "bottom top",
//             scrub: true
//           }
//         }
//       );
//     });
//   }, []);

//   return (
//     <div>
//       {/* 🎥 Video Section */}
//       <div className="video-container">
//         <video className="intro-video" autoPlay muted loop>
//           <source src="../../../../public/homebg.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>

//       {/* 📜 Sections Below the Video */}
//       <div className="content-container">
//         {images.map((image, i) => (
//           <section
//             key={i}
//             ref={(el) => (sectionsRef.current[i] = el)}
//             className="section"
//           >
//             <div
//               className="bg"
//               style={{
//                 backgroundImage: `url(${image})`
//               }}
//             ></div>
//             <div className="content">
//               <h2 className="text glitch" data-text={texts[i]}>
//                 {texts[i]}
//               </h2>
//             </div>
//           </section>
//         ))}
//       </div>
//     </div>
//   );
// };

//export default Homepage;

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Homepage.css";
import "./GlitchText.css"; // Added for glitch effect styling

const Homepage = () => {
  const sectionsRef = useRef([]);

  const images = [
    "../../../../public/bg_3.jpg",
    "../../../../public/bg_10.jpg",
    "../../../../public/bg_13.jpg",
    "../../../../public/bg_6.jpg",
    "../../../../public/bg_9.jpg",
    "../../../../public/bg_2.jpg"
  ];

  const texts = [
    "", // First section has no text, only the video
    "Happening This March",
    "Get ready to experience multiple events across the Multiverse",
    "Anantya 2025 \u00A0 collaboration with ACM, ACM-W, OWASP, CSI, ISTE",
    "Bug Bounties",
    "Threat Analysis"
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    sectionsRef.current.forEach((section) => {
      if (!section) return;
      const bg = section.querySelector(".bg");

      gsap.fromTo(
        bg,
        { y: "-20%" },
        {
          y: "20%",
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        }
      );
    });
  }, []);

  return (
    <div>
      {images.map((image, i) => (
        <section
          key={i}
          ref={(el) => (sectionsRef.current[i] = el)}
          className="section"
        >
          <div
            className="bg"
            style={{
              backgroundImage: `url(${image})`
            }}
          ></div>

          {/* <div className="content">
            {i === 0 ? ( // Show video in the first section
              <video className="intro-video" autoPlay muted loop>
                <source src="../../../../public/homebg.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <h2 className="text glitch" data-text={texts[i]}>
                {texts[i]}
              </h2>
            )}
          </div> */}
                  <div className="content">
          {i === 0 ? ( 
            <div className="video-container">
              <video className="intro-video" autoPlay muted loop>
                <source src="../../../../public/homebg.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ) : (
            <h2 className="text glitch" data-text={texts[i]}>
              {texts[i]}
            </h2>
          )}
        </div>
        </section>
      ))}
    </div>
  );
};

export default Homepage;



