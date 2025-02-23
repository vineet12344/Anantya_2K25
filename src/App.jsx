import "./App.css";
import HomePage from "./components/home/home2/Homepage";
import Navbar from "./components/home/navbar/navbar";
import Footer from "./components/home/footer/footer";
import CollegeEvents from "./components/events page/EventPage.jsx";
import  CosmicAnimation from "./components/gallery/back.jsx";
import  TeamGrid from "./components/Team/team.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Homepage from './components/home/home2/Homepage';
import CalenderPage from './components/calender-page/calenderpage.jsx';

// Hello


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<CollegeEvents />} />
        <Route path="/gallery" element={<CosmicAnimation/>} />
        <Route path="/calender" element={<CalenderPage/>} />
        <Route path="/team" element={< TeamGrid />} />
       
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
