
import './App.css'
import HomePage from './components/home/home2/Homepage'
import Navbar from './components/home/navbar/navbar'
<<<<<<< HEAD
import Footer from './components/home/footer/footer'
import { EventPage } from './components/events page/EventPage'
=======
import { EventPage } from './components/events page/EventPage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

>>>>>>> 467e47d5b2ea917110c0823f492468f55422f0d5
function App() {
  return (
<<<<<<< HEAD
    <>
      <Navbar/>
      <HomePage/>
      <Footer/>
    </>
  )
=======
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/events" element={<EventPage />} />
      </Routes>
    </Router>
  );
>>>>>>> 467e47d5b2ea917110c0823f492468f55422f0d5
}

export default App;