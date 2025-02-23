import { useEffect, useState } from "react";
import "./EventPage.css";
const CollegeEvents = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [visibleEvents, setVisibleEvents] = useState(4);
  const [loadMoreClicks, setLoadMoreClicks] = useState(0);
  const [firstVideoEnded, setFirstVideoEnded] = useState(false);
  const [activeTab, setActiveTab] = useState("tech");

  const techEvents = [
    {
      id: 1,
      title: "CODIGO - Programming Event",
      description:
        "Join us for CODIGO, an exciting programming event at PCET's Pimpri Chinchwad College of Engineering.",
      date: "8th March",
      imgUrl: "/src/components/eventspage/eventImages/codigo.png",
      videoUrl1: "/src/components/events page/video1.mp4",
      videoUrl2: "/src/components/events page/video2.mp4",
      registrationLink: "https://example.com/register-codigo",
      rulebookLink: "https://example.com/rulebook-codigo.pdf",
    },
    {
      id: 2,
      title: "She Solves - Coding Event",
      description:
        "Join us for She Solves, an exciting coding event at PCET's Pimpri Chinchwad College of Engineering.",
      date: "10th March",
      imgUrl: "/src/components/eventspage/eventImages/she_solves.png",
      videoUrl1: "/src/components/events page/video1.mp4",
      videoUrl2: "/src/components/events page/video2.mp4",
      registrationLink: "https://example.com/register-she-solves",
      rulebookLink: "https://example.com/rulebook-she-solves.pdf",
    },
    {
      id: 3,
      title: "Hackathon - Coding Event",
      description:
        "Join us for Hackathon, an exciting coding event at PCET's Pimpri Chinchwad College of Engineering.",
      date: "12th March",
      imgUrl: "/src/components/eventspage/eventImages/hackathon.png",
      videoUrl1: "/src/components/events page/video1.mp4",
      videoUrl2: "/src/components/events page/video2.mp4",
      registrationLink: "https://example.com/register-hackathon",
      rulebookLink: "https://example.com/rulebook-hackathon.pdf",
    },
    {
      id: 4,
      title: "Tech Talk - Seminar",
      description:
        "Join us for Tech Talk, an exciting seminar at PCET's Pimpri Chinchwad College of Engineering.",
      date: "15th March",
      imgUrl: "/src/components/eventspage/eventImages/tech_talk.png",
      videoUrl1: "/src/components/events page/video1.mp4",
      videoUrl2: "/src/components/events page/video2.mp4",
      registrationLink: "https://example.com/register-tech-talk",
      rulebookLink: "https://example.com/rulebook-tech-talk.pdf",
    },
  ];

  const nonTechEvents = [
    {
      id: 5,
      title: "Cultural Fest",
      description:
        "Join us for Cultural Fest, an exciting cultural event at PCET's Pimpri Chinchwad College of Engineering.",
      date: "20th March",
      imgUrl: "/src/components/eventspage/eventImages/cultural_fest.png",
      videoUrl1: "/src/components/events page/video1.mp4",
      videoUrl2: "/src/components/events page/video2.mp4",
      registrationLink: "https://example.com/register-cultural-fest",
      rulebookLink: "https://example.com/rulebook-cultural-fest.pdf",
    },
    {
      id: 6,
      title: "Sports Meet",
      description:
        "Join us for Sports Meet, an exciting sports event at PCET's Pimpri Chinchwad College of Engineering.",
      date: "22nd March",
      imgUrl: "/src/components/eventspage/eventImages/sports_meet.png",
      videoUrl1: "/src/components/events page/video1.mp4",
      videoUrl2: "/src/components/events page/video2.mp4",
      registrationLink: "https://example.com/register-sports-meet",
      rulebookLink: "https://example.com/rulebook-sports-meet.pdf",
    },
    {
      id: 7,
      title: "Art Exhibition",
      description:
        "Join us for Art Exhibition, an exciting art event at PCET's Pimpri Chinchwad College of Engineering.",
      date: "25th March",
      imgUrl: "/src/components/eventspage/eventImages/art_exhibition.png",
      videoUrl1: "/src/components/events page/video1.mp4",
      videoUrl2: "/src/components/events page/video2.mp4",
      registrationLink: "https://example.com/register-art-exhibition",
      rulebookLink: "https://example.com/rulebook-art-exhibition.pdf",
    },
    {
      id: 8,
      title: "Music Concert",
      description:
        "Join us for Music Concert, an exciting music event at PCET's Pimpri Chinchwad College of Engineering.",
      date: "28th March",
      imgUrl: "/src/components/eventspage/eventImages/music_concert.png",
      videoUrl1: "/src/components/events page/video1.mp4",
      videoUrl2: "/src/components/events page/video2.mp4",
      registrationLink: "https://example.com/register-music-concert",
      rulebookLink: "https://example.com/rulebook-music-concert.pdf",
    },
  ];

  useEffect(() => {
    const videoEndHandlers = {};

    const events = activeTab === "tech" ? techEvents : nonTechEvents;

    events.slice(0, visibleEvents).forEach((event, index) => {
      const video1 = document.getElementById(`video${index + 1}-1`);
      const video2 = document.getElementById(`video${index + 1}-2`);
      const eventImage = document.getElementById(`eventImage${index + 1}`);

      if (video1) video1.playbackRate = 0.8;
      if (video2) video2.playbackRate = 2.5;

      videoEndHandlers[index] = () => {
        if (video1) video1.style.opacity = "0";
        setTimeout(() => {
          if (video1) video1.classList.add("hidden");
          if (eventImage) {
            eventImage.classList.remove("hidden");
            eventImage.classList.add("fade-in");
          }
        }, 1300);
      };

      if (video1) video1.addEventListener("ended", videoEndHandlers[index]);

      if (eventImage) {
        eventImage.addEventListener("mouseenter", () => {
          if (video2) {
            video2.style.opacity = "1";
            video2.play();
          }
        });

        eventImage.addEventListener("mouseleave", () => {
          if (video2) {
            video2.style.opacity = "0";
            video2.pause();
            video2.currentTime = 0;
          }
        });
      }
    });

    const firstVideo = document.getElementById("video1-1");
    if (firstVideo) {
      firstVideo.addEventListener("ended", () => {
        setFirstVideoEnded(true);
      });
    }

    return () => {
      events.forEach((_, index) => {
        const video1 = document.getElementById(`video${index + 1}-1`);
        if (video1) video1.removeEventListener("ended", videoEndHandlers[index]);
      });
      if (firstVideo) {
        firstVideo.removeEventListener("ended", () => {
          setFirstVideoEnded(true);
        });
      }
    };
  }, [visibleEvents, activeTab]);

  const openModal = (eventId) => {
    const video2 = document.getElementById(`video${eventId + 1}-2`);
    if (video2) {
      video2.style.opacity = "1";
      video2.play();
    }
    setActiveModal(eventId);
  };

  const closeModal = () => {
    const video2 = document.getElementById(`video${activeModal + 1}-2`);
    if (video2) {
      video2.style.opacity = "0";
      video2.pause();
      video2.currentTime = 0;
    }
    setActiveModal(null);
  };

  const loadMore = () => {
    setLoadMoreClicks((prev) => prev + 1);
    if (loadMoreClicks === 0) {
      setVisibleEvents((prev) => Math.min(prev + 8, techEvents.length)); // Load 2 rows (8 events)
    } else {
      setVisibleEvents(techEvents.length); // Load all remaining events
    }
  };

  const renderEventCards = () => {
    const events = activeTab === "tech" ? techEvents : nonTechEvents;
    return events.slice(0, visibleEvents).map((event, index) => (
      <div
        key={event.id}
        className="relative w-[90%] aspect-[3/4] overflow-hidden cursor-pointer transform transition duration-500 rounded-lg shadow-lg"
        onClick={() => openModal(index)}
      >
        <video
          id={`video${index + 1}-1`}
          className="absolute inset-0 w-full h-full object-cover fade-in"
          autoPlay
          muted
          playsInline
        >
          <source src={event.videoUrl1} type="video/mp4" />
        </video>
        <img
          id={`eventImage${index + 1}`}
          className="absolute inset-0 w-full h-full object-cover event-card hidden"
          src={event.imgUrl || "/placeholder.svg"}
          alt="Event Image"
        />
        <video
          id={`video${index + 1}-2`}
          className="absolute inset-0 w-full h-full object-cover video-overlay"
          muted
          playsInline
        >
          <source src={event.videoUrl2} type="video/mp4" />
        </video>
      </div>
    ));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-2 sm:p-4">
      <h1 className="text-4xl font-bold text-red-600 text-center mb-6">Events</h1>
      <div className="flex justify-center mb-4 btn">
        <>
          <button
            className={`px-2 py-1 mx-2 ${activeTab === "tech" ? "bg-red-600 text-white" : "bg-gray-300 text-black"} rounded-md`}
            onClick={() => setActiveTab("tech")}
          >
            Tech Events
          </button>
          <button
            className={`px-2 py-1 mx-2 ${activeTab === "non-tech" ? "bg-red-600 text-white" : "bg-gray-300 text-black"} rounded-md`}
            onClick={() => setActiveTab("non-tech")}
          >
            Non-Tech Events
          </button>
        </>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {renderEventCards()}
      </div>

      {firstVideoEnded && visibleEvents < (activeTab === "tech" ? techEvents.length : nonTechEvents.length) && (
        <button
          onClick={loadMore}
          className="arrow mt-8 text-yellow-500 cursor-pointer px-6 py-2 rounded-md font-semibold load-more-animation"
        >
          More Events
        </button>
      )}

      {activeModal !== null && (
        <div className="modal active" onClick={closeModal}>
          <div className="modal-content modal-animation" onClick={(e) => e.stopPropagation()}>
            <div className="modal-details">
              <h2 id="modalTitle" className="text-3xl font-bold">
                {(activeTab === "tech" ? techEvents : nonTechEvents)[activeModal].title}
              </h2>
              <p id="modalDetails" className="mt-2 text-lg">
                {(activeTab === "tech" ? techEvents : nonTechEvents)[activeModal].description}
                <br />
                <span className="text-sm text-gray-300">
                  Date: {(activeTab === "tech" ? techEvents : nonTechEvents)[activeModal].date}
                </span>
              </p>
              <div className="modal-buttons mt-4 flex justify-center gap-4">
                <button
                  onClick={() => (window.location.href = (activeTab === "tech" ? techEvents : nonTechEvents)[activeModal].registrationLink)}
                  className="bg-yellow-500 text-black px-6 py-2 rounded-md font-semibold"
                >
                  Register
                </button>
                <button
                  onClick={() => (window.location.href = (activeTab === "tech" ? techEvents : nonTechEvents)[activeModal].rulebookLink)}
                  className="bg-blue-500 text-white px-6 py-2 rounded-md font-semibold"
                >
                  Download Rulebook
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        body, html {
          overflow-x: hidden; /* Prevent horizontal scroll */
          margin: 0;
          padding: 0;
        }

        .hidden {
          opacity: 0;
          pointer-events: none;
          transition: opacity 1s ease-in-out;
        }
        .fade-in {
          opacity: 1;
          transition: opacity 1s ease-in-out;
        }
        .event-card {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border: 3px solid gold;
          box-shadow: 0 0 15px gold;
          border-radius: 10px;
          transition: transform 0.3s ease-in-out;
        }
        .video-overlay {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          mix-blend-mode: lighten;
          opacity: 0;
          transition: opacity 0.1s ease-in-out;
          pointer-events: none;
        }
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.5);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease-in-out;
          z-index: 1000;
        }
        .modal.active {
          opacity: 1;
          pointer-events: auto;
        }
        .modal-content {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          border-radius: 16px;
          padding: 25px;
          width: 90%;
          max-width: 600px;
        }
        .load-more-animation {
          animation: fadeInUp 1s ease-in-out;
        }
        .modal-animation {
          animation: fadeIn 0.5s ease-in-out;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default CollegeEvents;