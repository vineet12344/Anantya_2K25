import Navbar from "../home/navbar/navbar";
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