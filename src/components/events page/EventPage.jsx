import Navbar from "../home/navbar/navbar";
import { BackgroundBeams } from "./StarBackground/StarBG.jsx";
import { HoverEffect } from "./Cards/Cards.jsx"; // Import your component

function EventPage() {
  const items = [
    {
      title: "Tech Conference 2025",
      description: "Join us for a conference on the latest in tech.",
      link: "/events/tech-conference",
      image: "/public/image.png", // Update with your image path
    },
    {
      title: "AI Workshop",
      description: "Hands-on workshop on AI and ML technologies.",
      link: "/events/ai-workshop",
      image: "public/image.png",
    },
    {
      title: "Hackathon 2025",
      description: "Compete in a 24-hour coding challenge.",
      link: "/events/hackathon",
      image: "/public/image.png",
    },
    {
      title: "Tech Conference 2025",
      description: "Join us for a conference on the latest in tech.",
      link: "/events/tech-conference",
      image: "/public/image.png", // Update with your image path
    },
    {
      title: "AI Workshop",
      description: "Hands-on workshop on AI and ML technologies.",
      link: "/events/ai-workshop",
      image: "public/image.png",
    },
    {
      title: "Hackathon 2025",
      description: "Compete in a 24-hour coding challenge.",
      link: "/events/hackathon",
      image: "/public/image.png",
    },
  ];

  return (
    <div className="event-page">
      {/* <BackgroundBeams /> */}
      <HoverEffect items={items} className="max-w-5xl mx-auto" />
    </div>
  );
}

export { EventPage };
