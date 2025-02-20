import "./App.css";
import HomePage from "./components/home/home2/Homepage";
import Navbar from "./components/home/navbar/navbar";
import Footer from "./components/home/footer/footer";
import { EventPage } from "./components/events page/EventPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './components/home/home2/Homepage';
import CalenderPage from './components/calender-page/calenderpage.jsx';

// Hello


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/calender" element={<CalenderPage/>} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
