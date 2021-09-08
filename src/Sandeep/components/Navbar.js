import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css"
import { IconContext } from "react-icons/lib";

function Navbar() {
  const [click, setClick] = useState(false);
  const hamMenu = () => {
    setClick(!click);
  };
  return (
    <>
      <IconContext.Provider value={{ color: 'black' }}>
        <div className="Navbar">

          <div className="navbar-container ">
            <Link to="/" className="navbar-logo" >
              SCHOOL DAILY
            </Link>
            <div className="menu-icon" onClick={hamMenu}>
              {click ? <FaTimes /> : <FaBars />}
            </div>

            <ul className={click ? "nav-menu active" : "nav-menu"}>

              <li className="nav-item">
                <Link TO="/" className="nav-links" onClick={hamMenu}>
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link TO="/" className="nav-links" onClick={hamMenu}>
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link TO="/" className="nav-links" onClick={hamMenu}>
                  About
                </Link>
              </li>

            </ul>
          </div>

          <hr></hr>
        </div>

      </IconContext.Provider>
    </>
  );
}

export default Navbar;
