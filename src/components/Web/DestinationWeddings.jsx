import React from 'react';
import "./PacificNWWeddingPlanning.css";
import { Link } from "react-router-dom";

const DestinationWeddings = () => {
  return (
    <div className="planning-services" >
      <h1 className="title">Planning Services</h1>
      <div className="content">
        <div className="image-container">
          <img src="https://i.pinimg.com/736x/4f/d1/2c/4fd12ccf0172a46ef835f6a5c855d28a.jpg"></img>
        </div>
        <div className="service-details">
          <h2>Preplanning Production</h2>
          <ul>
            <li>Curating your vendor team to match your style & guest experience</li>
            <li>Refining and communicating your overall timeline & plan</li>
            <li>Menu development & catering detail management</li>
            <li>Communication liaison with venue and vendors for production schedule</li>
            <li>Establishing meeting schedule & appointments for entire planning process</li>
            <li>Managing all event orders, revisions & evolving details</li>
          </ul>
        </div>
        
      </div>
      <div>
      <h2>Preplanning Production</h2>
      

      </div>

      <div className="content">
        <div className="service-details">
          <h2>Design</h2>
          <ul>
            <li>Creating an individualized mood board & color palette</li>
            <li>Building custom layouts via our custom design program</li>
            <li>Curating custom installs and plans designed for guest experience</li>
            <li>Managing the printing suite design and presence</li>
          </ul>
        </div>
        <div className="image-container">
          <img src="https://i.pinimg.com/564x/9e/a4/ae/9ea4ae294d16d972ecf07faeb524f526.jpg" alt="Elegant table setting" className="service-image" />
        </div>
      </div>
      


      <div>
        hthbkhbd
      </div>

      <div className="content">
        <div className="image-container">
          <img src="https://i.pinimg.com/564x/7f/91/8c/7f918c0bc43500a61109f17466e080d9.jpg" alt="Wedding ceremony" className="wedding-image" />
        </div>
        <div className="service-details">
          <h2>Onsite Production</h2>
          <ul>
            <li>Staffing your event needs with our team of event managers</li>
            <li>Supporting setup of all vendor components</li>
            <li>Partnering with Venue to manage onsite expectations</li>
            <li>Guest & Timeline Management throughout the experience</li>
            <li>Overseeing cleanup & load out of all</li>
          </ul>
          <Link to="/contact" className="contact-button"> CONTACT US TO GET STARTED →</Link>
        </div>
      </div>

    
      <div className="content">
        <div className="service-details">
          <h2>Design</h2>
          <ul>
            <li>Creating an individualized mood board & color palette</li>
            <li>Building custom layouts via our custom design program</li>
            <li>Curating custom installs and plans designed for guest experience</li>
            <li>Managing the printing suite design and presence</li>
          </ul>
        </div>
        <div className="image-container">
          <img src="https://i.pinimg.com/564x/f7/dc/05/f7dc05f55fd7549f23f0d035f4755c15.jpg" alt="Elegant table setting" className="service-image" />
        </div>
      </div>
      
      
    
      <div className="content">
        <div className="image-container">
          <img src="https://i.pinimg.com/564x/25/e3/b0/25e3b062393497b4aeee105b09902b8d.jpg" alt="Wedding ceremony" className="wedding-image" />
        </div>
        <div className="service-details">
          <h2>Onsite Production</h2>
          <ul>
            <li>Staffing your event needs with our team of event managers</li>
            <li>Supporting setup of all vendor components</li>
            <li>Partnering with Venue to manage onsite expectations</li>
            <li>Guest & Timeline Management throughout the experience</li>
            <li>Overseeing cleanup & load out of all</li>
          </ul>
          <Link to="/contact" className="contact-button"> CONTACT US TO GET STARTED →</Link>
        </div>
      </div>

      
    </div>
  );
};
export default DestinationWeddings;
