
import './App.css'
import HomePage from './components/home/home2/Homepage'
import Navbar from './components/home/navbar/navbar'
import { EventPage } from './components/events page/EventPage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/events" element={<EventPage />} />
      </Routes>
    </Router>
  );
}

export default App;