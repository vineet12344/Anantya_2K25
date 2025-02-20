
import './App.css'
import Navbar from './components/home/navbar/navbar'
import { EventPage } from './components/events page/EventPage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './components/home/home2/Homepage';
import CalenderPage from './components/calender-page/calenderpage.jsx';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/calender" element={<CalenderPage/>} />

      </Routes>
    </Router>
  );
}

export default App;