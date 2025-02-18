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

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "./Homepage.css";
// import "./GlitchText.css"; // Added for glitch effect styling

// const Homepage = () => {
//   const sectionsRef = useRef([]);

//   const images = [
//     "../../../../public/bg_3.jpg",
//     "../../../../public/bg_10.jpg",
//     "../../../../public/bg_13.jpg",
//     "../../../../public/bg_6.jpg",
//     "../../../../public/bg_9.jpg",
//     "../../../../public/bg_2.jpg"
//   ];

//   const texts = [
//     "", // First section has no text, only the video
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

//           {/* <div className="content">
//             {i === 0 ? ( // Show video in the first section
//               <video className="intro-video" autoPlay muted loop>
//                 <source src="../../../../public/homebg.mp4" type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             ) : (
//               <h2 className="text glitch" data-text={texts[i]}>
//                 {texts[i]}
//               </h2>
//             )}
//           </div> */}
//                   <div className="content">
//           {i === 0 ? ( 
//             <div className="video-container">
//               <video className="intro-video" autoPlay muted loop>
//                 <source src="../../../../public/homebg.mp4" type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             </div>
//           ) : (
//             <h2 className="text glitch" data-text={texts[i]}>
//               {texts[i]}
//             </h2>
//           )}
//         </div>
//         </section>
//       ))}
//     </div>
//   );
// };

// export default Homepage;

// LATEST CODE


import {useState,useLayoutEffect, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Homepage.css";
import "./GlitchText.css";
import "./Slider.css";
const Homepage = () => {
  const sectionsRef = useRef([]);
  const [currentSlide, setCurrentSlide] = useState(1);
    const [timeLeft, setTimeLeft] = useState({ days: "00", hours: "00", minutes: "00", seconds: "00" });

  const images = [
    "../../../../public/bg_3.jpg",
    "../../../../public/bg_3.jpg",
    "../../../../public/bg_3.jpg",
    "../../../../public/bg_3.jpg",
    "../../../../public/bg_3.jpg"
    
  ];

  const texts = [
    "",
    "Happening This March In collaboration with",
    "Glimpses of Anantya 2024",
    "Sposnsored By",
    "Bug Bounties",
    "Threat Analysis"
  ];




  useEffect(() => {
    // const targetTime = new Date("Oct 10, 2025 14:30:00").getTime();
    const targetTime = new Date().getTime() + 18 * 24 * 60 * 60 * 1000; 
    const timerInterval = setInterval(() => {
      const now = new Date().getTime();
      const remainingTime = targetTime - now;

      if (remainingTime <= 0) {
        clearInterval(timerInterval);
        return;
      }

      const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

      setTimeLeft({
        days: days.toString().padStart(2, "0"),
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

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

  useLayoutEffect(() => { // Use useLayoutEffect
    let imageNo = 1;

    const displayimg = (n, setSlide) => {  // Add setSlide parameter
      const images = document.getElementsByClassName("image");
      const dots = document.getElementsByClassName("dot");

      if (n > images.length) {
        imageNo = 1;
      }
      if (n < 1) {
        imageNo = images.length;
      }

      for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
      }
      for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }

      images[imageNo - 1].style.display = "block";
      dots[imageNo - 1].className += " active";

      setSlide(imageNo); // Use the passed setSlide function
    };

    displayimg(imageNo, setCurrentSlide); // Pass setCurrentSlide

    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const dotElements = document.querySelectorAll('.dot');

    if (prevButton && nextButton && dotElements) {
      prevButton.addEventListener('click', () => displayimg(imageNo -= 1, setCurrentSlide)); // Pass setCurrentSlide
      nextButton.addEventListener('click', () => displayimg(imageNo += 1, setCurrentSlide)); // Pass setCurrentSlide

      dotElements.forEach((dot, index) => {
        dot.addEventListener('click', () => displayimg(imageNo = index + 1, setCurrentSlide)); // Pass setCurrentSlide
      });
    }

    return () => { // Cleanup
      if (prevButton && nextButton && dotElements) {
        prevButton.removeEventListener('click', () => displayimg(imageNo -= 1, setCurrentSlide));
        nextButton.removeEventListener('click', () => displayimg(imageNo += 1, setCurrentSlide));
        dotElements.forEach((dot, index) => {
          dot.removeEventListener('click', () => displayimg(imageNo = index + 1, setCurrentSlide));
        });
      }
    };
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
          <div className="content">
            {i === 0 ? (
              <div className="video-container">
                 <div className="timer">
                  <div className="sub_timer"><h1 className="digit">{timeLeft.days}</h1><p className="digit_name">Days</p></div>
                  <div className="sub_timer"><h1 className="digit">{timeLeft.hours}</h1><p className="digit_name">Hours</p></div>
                  <div className="sub_timer"><h1 className="digit">{timeLeft.minutes}</h1><p className="digit_name">Minutes</p></div>
                  <div className="sub_timer"><h1 className="digit">{timeLeft.seconds}</h1><p className="digit_name">Seconds</p></div>
                </div>
                <div className="glow"></div>
                <video className="intro-video" autoPlay muted loop>
                  <source src="../../../../homebg.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : i === 1 ? (
              // Adding slider inside section 2
              <div>
                <h2 className="text glitch" data-text={texts[i]}>
                  {texts[i]}
                </h2>
                <main>
                  <div className="slider" style={{"--width": "100px", "--height": "50px", "--quantity": "10"}}>
                    <div className="list">
                      {[...Array(10)].map((_, index) => (
                        <div className="item" style={{"--position": index + 1}} key={index}>
                          {/* <img src={`./slide/slider1_${index + 1}.png`} alt="" /> */}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="slider" data-reverse="true" style={{"--width": "200px", "--height": "200px", "--quantity": "9"}}>
                    <div className="list">
                      {[...Array(10)].map((_, index) => (
                        <div className="item" style={{"--position": index + 1}} key={index}>
                          <img src={`../../../../public/slide/slider2_${index + 1}.png`} alt="" />
                        </div>
                      ))}
                    </div>
                  </div>
                </main>
                <div className="head2">
                <h2 className="text glitch" data-text={texts[i]}>
                  {texts[i+1]}
                </h2>
                </div>
              </div>
            ): i === 2 ? (
                    <div className="container">
                <div className="image" style={{ display: "block" }}>
                  <img src="../../../../public/bg_10.jpg" alt="" />
                </div>
                <div className="image" style={{ display: "none" }}>
                  <img src="../../../../public/bg_7.jpg" alt="" />
                </div>
                <div className="image" style={{ display: "none" }}>
                  <img src="../../../../public/bg_6.jpg" alt="" />
                </div>
                <div className="image" style={{ display: "none" }}>
                  <img src="../../../../public/bg_9.jpg" alt="" />
                </div>
                <div className="image" style={{ display: "none" }}>
                  <img src="../../../../public/bg_5.jpg" alt="" />
                </div>
            
                <div className="button">
                  <a className="prev">❮</a>
                  <a className="next">❯</a>
                </div>
                <div className="dots">
                  <span className="dot active"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              </div>
              
            ): i === 3 ? (
              // Adding slider inside section 2
              <div>
                <h2 className="text glitch" data-text={texts[i]}>
                  {texts[i]}
                </h2>
                <main>
                  <div className="slider" style={{"--width": "100px", "--height": "50px", "--quantity": "10"}}>
                    <div className="list">
                      {[...Array(10)].map((_, index) => (
                        <div className="item" style={{"--position": index + 1}} key={index}>
                          {/* <img src={`./slide/slider1_${index + 1}.png`} alt="" /> */}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="slider" data-reverse="true" style={{"--width": "200px", "--height": "200px", "--quantity": "9"}}>
                    <div className="list">
                      {[...Array(10)].map((_, index) => (
                        <div className="item" style={{"--position": index + 1}} key={index}>
                          <img src={`../../../../public/slide/slider2_${index + 1}.png`} alt="" />
                        </div>
                      ))}
                    </div>
                  </div>
                </main>
                <div className="head2">
                <h2 className="text glitch" data-text={texts[i]}>
                  {texts[i+1]}
                </h2>
                </div>
              </div>
            ): (
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










