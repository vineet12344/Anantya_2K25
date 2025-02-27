import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";
import img from "./../../../../public/logo.png";
import {motion } from "framer-motion";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };1

  const handleClick=(e)=>{
    console.log(e);
    navigate(e);
    toggleMenu();
  }
  return (
    <div className="sticky top-0 z-[999]">
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="style.css" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />

      <title>Anantya</title>
      <header className="heads bg-cover bg-center sticky top-0 z-[999]">
        <div className="navbar sticky top-0 z-[999]">
          <div className="logo">
            <a href="">
              <div className="nav-logo ">
                <img src={img} alt="" className="max-w-[140px] mt-3 " />
              </div>
            </a>
          </div>
          <ul className="links ">
            <motion.li
             initial={{opacity:0, scale: 0.8, y: -20 }}
             animate={{opacity:1, scale: 1, y: 0 }}
              transition={{ duration: 0.5 ,delay:0.3 }}
            >
              <a
                href="#"
                data-text="Home"
                className="glitch"
                onClick={() => navigate("/")}
              >
                Home
              </a>
            </motion.li>
            <motion.li
              initial={{opacity:0, scale: 0.8, y: -20 }}
              animate={{opacity:1, scale: 1, y: 0 }}
              transition={{ duration: 0.5,delay:0.4 }}
            >
              <a
                href="#"
                data-text="Events"
                className="glitch"
                onClick={() => navigate("/events")}
              >
                Events
              </a>
            </motion.li>
            <motion.li
              initial={{opacity:0, scale: 0.8, y: -20 }}
              animate={{opacity:1, scale: 1, y: 0 }}
              transition={{ duration: 0.5 ,delay:0.5}}
            >
              <a
                href="#"
                data-text="Gallery"
                className="glitch"
                onClick={() => navigate("/gallery")}
              >
                Gallery
              </a>
            </motion.li>
            <motion.li
              initial={{opacity:0, scale: 0.8, y: -20 }}
              animate={{opacity:1, scale: 1, y: 0 }}
              transition={{ duration: 0.5 ,delay:0.6}}
            >
              <a
                href="#"
                data-text="Calender"
                className="glitch"
                onClick={() => navigate("/calender")}
              >
                Calender
              </a>
            </motion.li>
            <motion.li
              initial={{opacity:0, scale: 0.8, y: -20 }}
              animate={{opacity:1, scale: 1, y: 0 }}
              transition={{ duration: 0.5 ,delay:0.7}}
            >
              <a
                href="#"
                data-text="Team"
                className="glitch"
                onClick={() => navigate("/team")}
              >
                Team
              </a>
            </motion.li>
          </ul>
          <div className="toggle_btn" onClick={toggleMenu}>
            <i
              className={isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
            ></i>
          </div>
        </div>

        <div className={`dropdown_menu ${isOpen ? "open" : ""}`}>
          <motion.li
            initial={{ scale: 0.8, y: -20 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="#"
              data-text="Home"
              className="glitch"
              onClick={() => handleClick("/")}
            >
              Home
            </a>
          </motion.li>
          <motion.li
            initial={{ scale: 0.8, y: -20 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="#"
              data-text="Events"
              className="glitch"
              onClick={() => handleClick("/events")}
            >
              Events
            </a>
          </motion.li>
          <motion.li
            initial={{ scale: 0.8, y: -20 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="#"
              data-text="Gallery"
              className="glitch"
              onClick={() => handleClick("/gallery")}
            >
              Gallery
            </a>
          </motion.li>
          <motion.li
            initial={{ scale: 0.8, y: -20 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="#"
              data-text="Calender"
              className="glitch"
              onClick={() => handleClick("/calender")}
            >
              Calender
            </a>
          </motion.li>
          <motion.li
            initial={{ scale: 0.8, y: -20 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="#"
              data-text="Team"
              className="glitch"
              onClick={() => handleClick("/team")}
            >
              Team
            </a>
          </motion.li>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
