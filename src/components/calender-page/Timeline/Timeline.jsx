import React, { useEffect, useState } from "react";
import "./Timeline.css";
import ExploreButton from "./Explore-button/explore-button";

const IplAuction = "/poster/IPLAuction.png";
const SheSolves = "/poster/SheSolves.png";
const ByteMeCtf = "/poster/Byteme.png";
const CodeRelay = "/poster/CodeRelay.png";
const ActionReplay = "/poster/ActionReplay.png";
const MasterChefUi = "/poster/MasterChefUI.jpg";
const Codigo = "/poster/Codigo.png";
const SherLock = "/poster/Sherlock.png";
const Cat = "/poster/CAT.png";
const InnovateX = "/poster/InnovateX.png";
const BeastGames = "/poster/BeastGames.png";
const CodingOlympics = "/poster/CodingOlympics.png";
const BlindCoding = "/poster/BlindCoding.png";

const rulebookCodigo =
  "https://drive.google.com/file/d/1JtihVg2V4aqDOY_HpIHSsDlfI1ND83_v/view?usp=drive_link";
const rulebookSheSolves =
  "https://drive.google.com/file/d/1zF4C4HjOS35V7GD9aXgAhrO610xe9MM-/view?usp=sharing";
const rulebookBlindCoding =
  "https://drive.google.com/file/d/14e0cHjgroBCoyr_z9aVRXkh4QCIAg9rY/view?usp=sharing";
const rulebookByteMe =
  "https://drive.google.com/file/d/1FhqTUgKxWoPB8-UDgsGLo5j1sgdcHRnl/view?usp=sharing";
const rulebookCAT =
  "https://drive.google.com/file/d/1UMVEUOQfyXJ-I-6w_pBq01T0Wy8jOna2/view?usp=sharing";
const rulebookCodeRelay =
  "https://drive.google.com/file/d/147ZgcYuLmndBOZT6clVaIJSpVze54CE0/view?usp=sharing";
const rulebookCodingOlympics =
  "https://drive.google.com/file/d/1SAXF7qdFVzKaoEiRMjN_kInl8ZTpo_wS/view?usp=drive_link";
const rulebookInnovateX =
  "https://drive.google.com/file/d/1tDSKRNfQv-C_cKnqbx7k74CKzSyLe9pT/view?usp=sharing";
const rulebookMasterChefUI =
  "https://drive.google.com/file/d/1GX8_DESDkZtXG0KDfeBGEl7BaUZUfWSC/view?usp=sharing";

const rulebookSherlock =
  "https://drive.google.com/file/d/1D2kMoPAwBVjf4A8rabiWvqC1sbrMx3Pz/view?usp=sharing";
const rulebookIPLAuction =
  "https://drive.google.com/file/d/1c0OatJR5iS6LAufsOFiIq69ro-aIQwW0/view?usp=sharing";
const rulebookActionReplay =
  "https://drive.google.com/file/d/10jBYi2aUnENtKqeIbn9eJXY8QKZU-cK2/view?usp=sharing";
const rulebookBeastGames =
  "https://drive.google.com/file/d/10VObLL05GEny0EWDR3tBuJ2QE5A1TqcG/view?usp=sharing";

const events = [
  {
    image: "/poster/IPLAuction.jpg",
    name: "IPL AUCTION",
    round: "ROUND 2",
    date: "06 MARCH 2025",
    time: "5:00 PM - 7:00 PM",
    rulebook:
      "https://drive.google.com/file/d/1c0OatJR5iS6LAufsOFiIq69ro-aIQwW0/view?usp=sharing",
    top: "2%",
    progress: 0.02,
  },
  {
    image: "/poster/IPLAuction.jpg",
    name: "IPL AUCTION",
    round: "ROUND 3",
    date: "07 MARCH 2025",
    time: "8:00 AM - 7:00 PM",
    rulebook:
      "https://drive.google.com/file/d/1c0OatJR5iS6LAufsOFiIq69ro-aIQwW0/view?usp=sharing",
    top: "5.8%",
    progress: 0.058,
  },
  {
    image: "/poster/BlindCoding.png",
    name: "BLIND CODING",
    round: "ROUND 2",
    date: "06 MARCH 2025",
    time: "5:00 PM - 7:00 PM",
    rulebook:
      "https://drive.google.com/file/d/14e0cHjgroBCoyr_z9aVRXkh4QCIAg9rY/view?usp=sharing",
    top: "9.6%",
    progress: 0.096,
  },
  {
    image: "/poster/BlindCoding.png",
    name: "BLIND CODING",
    round: "ROUND 3",
    date: "07 MARCH 2025",
    time: "8:00 AM - 10:00 AM",
    rulebook:
      "https://drive.google.com/file/d/14e0cHjgroBCoyr_z9aVRXkh4QCIAg9rY/view?usp=sharing",
    top: "13.52%",
    progress: 0.1352,
  },
  {
    image: "/poster/CAT.png",
    name: "CAT",
    round: "ROUND 1",
    date: "07 MARCH 2025",
    time: "8:00 AM - 10:00 AM",
    rulebook:
      "https://drive.google.com/file/d/1UMVEUOQfyXJ-I-6w_pBq01T0Wy8jOna2/view?usp=sharing",
    top: "17.36%",
    progress: 0.1736,
  },
  {
    image: "/poster/CAT.png",
    name: "CAT",
    round: "ROUND 2",
    date: "07 MARCH 2025",
    time: "2:00 PM - 4:00 PM",
    rulebook:
      "https://drive.google.com/file/d/1UMVEUOQfyXJ-I-6w_pBq01T0Wy8jOna2/view?usp=sharing",
    top: "21.2%",
    progress: 0.22,
  },
  {
    image: "/poster/CAT.png",
    name: "CAT",
    round: "ROUND 3",
    date: "08 MARCH 2025",
    time: "10:00 AM - 12:00 PM",
    rulebook:
      "https://drive.google.com/file/d/1UMVEUOQfyXJ-I-6w_pBq01T0Wy8jOna2/view?usp=sharing",
    top: "25.04%",
    progress: 0.2504,
  },
  {
    image: "/poster/CodeRelay.png",
    name: "CODE RELAY",
    round: "ROUND 1",
    date: "07 MARCH 2025",
    time: "9:00 AM - 11:00 AM",
    rulebook:
      "https://drive.google.com/file/d/147ZgcYuLmndBOZT6clVaIJSpVze54CE0/view?usp=sharing",
    top: "28.88%",
    progress: 0.2888,
  },
  {
    image: "/poster/CodeRelay.png",
    name: "CODE RELAY",
    round: "ROUND 2",
    date: "07 MARCH 2025",
    time: "2:00 PM - 5:00 PM",
    rulebook:
      "https://drive.google.com/file/d/147ZgcYuLmndBOZT6clVaIJSpVze54CE0/view?usp=sharing",
    top: "32.72%",
    progress: 0.3272,
  },
  {
    image: "/poster/CodeRelay.png",
    name: "CODE RELAY",
    round: "ROUND 3",
    date: "08 MARCH 2025",
    time: "10:00 AM - 12:00 PM",
    rulebook:
      "https://drive.google.com/file/d/147ZgcYuLmndBOZT6clVaIJSpVze54CE0/view?usp=sharing",
    top: "36.56%",
    progress: 0.3656,
  },
  {
    image: "/poster/ActionReplay.png",
    name: "ACTION REPLAY",
    round: "ROUND 2",
    date: "07 MARCH 2025",
    time: "10:00 AM - 1:00 PM",
    rulebook:
      "https://drive.google.com/file/d/10jBYi2aUnENtKqeIbn9eJXY8QKZU-cK2/view?usp=sharing",
    top: "40.4%",
    progress: 0.404,
  },
  {
    image: "/poster/ActionReplay.png",
    name: "ACTION REPLAY",
    round: "ROUND 3, 4",
    date: "08 MARCH 2025",
    time: "10:00 AM - 2:00 PM",
    rulebook:
      "https://drive.google.com/file/d/10jBYi2aUnENtKqeIbn9eJXY8QKZU-cK2/view?usp=sharing",
    top: "44.24%",
    progress: 0.4424,
  },
  {
    image: "/poster/MasterChefUI.jpg",
    name: "MASTERCHEF UI",
    round: "ROUND 1",
    date: "07 MARCH 2025",
    time: "10:00 AM - 1:00 PM",
    rulebook:
      "https://drive.google.com/file/d/1GX8_DESDkZtXG0KDfeBGEl7BaUZUfWSC/view?usp=sharing",
    top: "48.08%",
    progress: 0.4808,
  },
  {
    image: "/poster/MasterChefUI.jpg",
    name: "MASTERCHEF UI",
    round: "ROUND 2",
    date: "07 MARCH 2025",
    time: "4:00 PM - 7:00 PM",
    rulebook:
      "https://drive.google.com/file/d/1GX8_DESDkZtXG0KDfeBGEl7BaUZUfWSC/view?usp=sharing",
    top: "51.92%",
    progress: 0.5192,
  },
  {
    image: "/poster/MasterChefUI.jpg",
    name: "MASTERCHEF UI",
    round: "ROUND 3",
    date: "08 MARCH 2025",
    time: "12:00 PM - 2:00 PM",
    rulebook:
      "https://drive.google.com/file/d/1GX8_DESDkZtXG0KDfeBGEl7BaUZUfWSC/view?usp=sharing",
    top: "55.76%",
    progress: 0.5576,
  },
  {
    image: "/poster/Byteme.png",
    name: "BYTE ME",
    round: "ROUND 1",
    date: "07 MARCH 2025",
    time: "11:00 AM - 1:00 PM",
    rulebook:
      "https://drive.google.com/file/d/1FhqTUgKxWoPB8-UDgsGLo5j1sgdcHRnl/view?usp=sharing",
    top: "59.6%",
    progress: 0.596,
  },
  {
    image: "/poster/Byteme.png",
    name: "BYTE ME",
    round: "ROUND 2",
    date: "07 MARCH 2025",
    time: "3:00 PM - 7:00 PM",
    rulebook:
      "https://drive.google.com/file/d/1FhqTUgKxWoPB8-UDgsGLo5j1sgdcHRnl/view?usp=sharing",
    top: "63.44%",
    progress: 0.6344,
  },
  {
    image: "/poster/CodingOlympics.png",
    name: "CODING OLYMPICS",
    round: "ROUND 1",
    date: "07 MARCH 2025",
    time: "2:00 PM - 4:00 PM",
    rulebook:
      "https://drive.google.com/file/d/1SAXF7qdFVzKaoEiRMjN_kInl8ZTpo_wS/view?usp=drive_link",
    top: "67.28%",
    progress: 0.6728,
  },
  {
    image: "/poster/CodingOlympics.png",
    name: "CODING OLYMPICS",
    round: "ROUND 2",
    date: "07 MARCH 2025",
    time: "4:00 PM - 6:00 PM",
    rulebook:
      "https://drive.google.com/file/d/1SAXF7qdFVzKaoEiRMjN_kInl8ZTpo_wS/view?usp=drive_link",
    top: "71.12%",
    progress: 0.7112,
  },
  {
    image: "/poster/CodingOlympics.png",
    name: "CODING OLYMPICS",
    round: "ROUND 3",
    date: "08 MARCH 2025",
    time: "8:00 AM - 10:00 AM",
    rulebook:
      "https://drive.google.com/file/d/1SAXF7qdFVzKaoEiRMjN_kInl8ZTpo_wS/view?usp=drive_link",
    top: "74.96%",
    progress: 0.7496,
  },
  {
    image: "/poster/InnovateX.png",
    name: "INNOVATE X",
    round: "ROUND 1",
    date: "08 MARCH 2025",
    time: "9:00 AM - 1:00 PM",
    rulebook:
      "https://drive.google.com/file/d/1tDSKRNfQv-C_cKnqbx7k74CKzSyLe9pT/view?usp=sharing",
    top: "78.88%",
    progress: 0.7888,
  },
  {
    image: "/poster/SheSolves.png",
    name: "SHE SOLVES",
    round: "ROUND 1",
    date: "08 MARCH 2025",
    time: "8:00 AM - 2:00 PM",
    rulebook:
      "https://drive.google.com/file/d/1zF4C4HjOS35V7GD9aXgAhrO610xe9MM-/view?usp=sharing",
    top: "82.64%",
    progress: 0.8264,
  },
  {
    image: "/poster/Sherlock.png",
    name: "SHERLOCK",
    round: "ROUND 2, 3",
    date: "08 MARCH 2025",
    time: "8:00 AM - 1:00 PM",
    rulebook:
      "https://drive.google.com/file/d/1D2kMoPAwBVjf4A8rabiWvqC1sbrMx3Pz/view?usp=sharing",
    top: "86.48%",
    progress: 0.8648,
  },
  {
    image: "/poster/Codigo.png",
    name: "CODIGO",
    round: "ROUND 2",
    date: "08 MARCH 2025",
    time: "10:00 AM - 12:00 PM",
    rulebook:
      "https://drive.google.com/file/d/1JtihVg2V4aqDOY_HpIHSsDlfI1ND83_v/view?usp=drive_link",
    top: "90.32%",
    progress: 0.9032,
  },
  {
    image: "/poster/Codigo.png",
    name: "CODIGO",
    round: "ROUND 3",
    date: "08 MARCH 2025",
    time: "12:00 PM - 2:00 PM",
    rulebook:
      "https://drive.google.com/file/d/1JtihVg2V4aqDOY_HpIHSsDlfI1ND83_v/view?usp=drive_link",
    top: "94.16%",
    progress: 0.9416,
  },
  {
    image: "/poster/BeastGames.png",
    name: "BEAST GAMES",
    round: "ROUND 1",
    date: "08 MARCH 2025",
    time: "8:00 AM - 4:00 PM",
    rulebook:
      "https://drive.google.com/file/d/10VObLL05GEny0EWDR3tBuJ2QE5A1TqcG/view?usp=sharing",
    top: "98%",
    progress: 0.98,
  },
];

const Timeline = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / docHeight, 1); // Normalize between 0 and 1
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="timeline-container">
      <div
        className="line"
        style={{
          background: `linear-gradient(to bottom, red ${
            scrollProgress * 100
          }%, white 0%)`,
        }}
      ></div>
      
      <div
        className="line line1"
        style={{
          background: `linear-gradient(to bottom, red ${
            scrollProgress * 100
          }%, white 0%)`,
        }}
      >
        {events.map((item) => {
          return (
            <div>
              <div
                className="point"
                style={{
                  top: `${item.top}`,
                  backgroundColor:
                    scrollProgress >= `${item.progress}` ? "red" : "white",
                }}
              ></div>
              <div
                key={item}
                className="container"
                style={{ top: `${item.top}` }}
              >
                <div className="poster-box">
                  <div className="poster-box-1">
                    <img src={`${item.image}`} alt="Event Poster" />
                  </div>
                </div>
                <div className="event-name-box">
                  <p
                    className="glitch"
                    data-text={`${item.name}`}
                    style={{ fontSize: "27px", fontWeight: "bold" }}
                  >
                    {`${item.name}`}
                  </p>
                  <p
                    className="glitch"
                    data-text={`${item.round}`}
                    style={{ fontSize: "14px" }}
                  >
                    {`${item.round}`}
                  </p>
                  <div className="explore">
                    <ExploreButton rulebookLink={`${item.rulebook}`} />
                  </div>
                </div>
              </div>
              <div className="date-box" style={{ top: `${item.top}`  }}>
                <p className="glitch" data-text={`${item.date}`}>
                  {item.date}
                </p>
                <p className="glitch" data-text={`${item.time}`}>
                  {item.time}
                </p>
              </div>
            </div>
          );
        })}
      </div>
        <div
        className="line"
        style={{
          background: `linear-gradient(to bottom, red ${
            scrollProgress * 100
          }%, white 0%)`,
        }}
      ></div>
    </div>
  );
};

export default Timeline;

{
  /* const Timeline = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / docHeight, 1); // Normalize between 0 and 1
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="timeline-container">
      <div
        className="line"
        style={{
          background: `linear-gradient(to bottom, red ${
            scrollProgress * 100
          }%, white 0%)`,
        }}
      ></div>

      {events.map((event, index) => (
        <React.Fragment key={index}>
          <div
            className="point"
            style={{
              top: event.top,
              backgroundColor: scrollProgress >= event.progress ? "red" : "white",
            }}
          ></div>
          <div className="container" style={{ top: `calc(${event.top} - 0.5%)` }}>
            <div className="poster-box">
              <div className={`poster-box-${index + 1}`}>
                <img src={event.image} alt="Event Poster" />
              </div>
            </div>
            <div className="event-name-box">
              <p
                className="glitch"
                data-text={event.name}
                style={{ fontSize: "27px", fontWeight: "bold" }}
              >
                {event.name}
              </p>
              <p className="glitch" data-text={event.round} style={{ fontSize: "14px" }}>
                {event.round}
              </p>
              <div className="explore">
                <ExploreButton rulebookLink={event.rulebook} />
              </div>
            </div>
          </div>
          <div className="date-box" style={{ top: `calc(${event.top} + 0.5%)` }}>
            <p className="glitch" data-text={event.date}>
              {event.date}
            </p>
            <p className="glitch" data-text={event.time}>
              {event.time}
            </p>
          </div>
        </React.Fragment>
      ))}

      <div
        className="line"
        style={{
          background: `linear-gradient(to bottom, red ${
            scrollProgress * 100
          }%, white 0%)`,
        }}
      ></div>
    </div>
  );
};

export default Timeline; */
}
