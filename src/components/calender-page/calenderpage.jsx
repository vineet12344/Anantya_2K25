// import './App.css'; // Ensure this CSS contains the global styles
import Timeline from './Timeline/Timeline.jsx';
import DescBox from "./desc-box/desc-box.jsx";
import bg from "./../../../public/bg_3.jpg";
import {motion} from "framer-motion";

function CalenderPage() {
  return (
    <div className='' style={{
      backgroundImage: `url(${bg})`,
    }}>
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-red-900/20 to-black opacity-60"></div>
          <img
            src="https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1920&h=800"
            alt="Calendar background with red stars"
            fill
            className="object-cover"
            priority
          />
        </div>

        <motion.div
          className="relative z-10 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Events{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-800">Calendar</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-[800px] mx-auto">
            Plan your journey through the multiverse with our cosmic events calendar.
          </p>
        </motion.div>
      </section>
      <DescBox />
      <div style={{ marginTop: '70px' }}>
        <Timeline />
      </div>
    </div>
  );
}

export default CalenderPage;