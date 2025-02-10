import { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
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
      <header>


        <div className="navbar">
          <div className="logo">
            <a href="#">
              <span className="multiverse-text">Anantya</span>
              {/* <span className="branches"> */}
              {/* <span className="branch"></span>
                <span className="branch"></span>
                <span className="branch"></span> */}
              {/* </span> */}
            </a>
          </div>
          <ul className="links">
            <li><a href="#" data-text="Home" className="glitch">Home</a></li>
            <li><a href="#" data-text="Events" className="glitch">Events</a></li>
            <li><a href="#" data-text="Gallery" className="glitch">Gallery</a></li>
            <li><a href="#" data-text="Calender" className="glitch">Calender</a></li>
            <li><a href="#" data-text="Team" className="glitch">Team</a></li>
          </ul>
          <div className="action_btn"><div className="galaxy-button">
            <button className="space-button">
              <span className="backdrop" />
              <span className="galaxy" />
              <label className="text">Register</label>
            </button>
            <div className="bodydrop" />
          </div>
          </div>
          {/* <a href="#" className="action_btn">Register</a> */}
          <div className="toggle_btn" onClick={toggleMenu}>
            <i className={isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
          </div>
        </div>

        <div className={`dropdown_menu ${isOpen ? 'open' : ''}`}>
          <li><a href="#" data-text="Home" className="glitch">Home</a></li>
          <li><a href="#" data-text="Events" className="glitch">Events</a></li>
          <li><a href="#" data-text="Gallery" className="glitch">Gallery</a></li>
          <li><a href="#" data-text="Calender" className="glitch">Calender</a></li>
          <li><a href="#" data-text="Team" className="glitch">Team</a></li>
          <div className="action_btn"><div className="galaxy-button">
            <button className="space-button">
              <span className="backdrop" />
              <span className="galaxy" />
              <label className="text" data-text="Register">Register</label>
            </button>
            <div className="bodydrop" />
          </div>

          </div>

        </div>
      </header>
    </>
  );
}

export default Navbar;