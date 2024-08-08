import { NavLink } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";
import "./Navbar.css";
import { useState } from "react";
import React from "react";
import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";
import { IconContext } from "react-icons";
import { AiOutlineAlipayCircle } from "react-icons/ai";

import { Link } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import Leftbar from "../Admin/Leftbar";
import HoverMenuButton from "./HoverMenuButton";
import DropdownNav from './Dropdown';

function Navbar() {
    const [click, setClick] = useState(false);
  
    const handleClick = () => setClick(!click);
    const [sidebar, setSidebar] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const toggleServices = () => setIsServicesOpen(!isServicesOpen);

    const showSidebar = () => setSidebar(!sidebar);
    return (
      <>
        <nav className="navbar">
          <div className="nav-container">
          <div>
          <Link className=" nav-logo  h-5"  to="/" >SparkEvents</Link>
          </div>

          <div className="dropdown" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
          <li className="nav-item services-dropdown">
  <span className="nav-links">SERVICES</span>
  <ul className="dropdown-menu">
    <li className="nav-links"><a href="/pacific-nw-wedding" >PACIFIC NW WEDDING PLANNING</a></li>
    <li className="nav-links"><a href="/destination-weddings">DESTINATION WEDDINGS</a></li>
    <li className="nav-links"><a href="/corporate-events">CORPORATE EVENTS</a></li>
    <li className="nav-links"><a href="/corporate-events">BIRTHDAY PARTY</a></li>
    <li className="nav-links"><a href="/corporate-events">CORPORATE EVENTS</a></li>
  </ul>
</li>
</div>
          
          <div className="nav-item">
          
                  
          <Link className="nav-item nav-links" to="/">HOME</Link>
          <Link className="nav-item nav-links" to="/event">GALLERY</Link>
          <Link className="nav-item nav-links" to="/bubblybar">BUBBLY BAR</Link>
          <Link className="nav-item nav-links" to="/Login">LOGIN</Link>
          <Link className="nav-item nav-links" to="/register">REGISTER</Link>
          <Link className="nav-item nav-links" to="/contact">BOOKINGS</Link>

          </div>
          <IconContext.Provider value={{ color: '#fff' }}>
        <div>
          <Link to='/Leftbar' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          </div>
      </IconContext.Provider>
      </div>
        </nav>
      </>
      )}
    

export default Navbar;