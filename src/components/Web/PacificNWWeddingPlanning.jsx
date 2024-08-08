import React from 'react';
import "./PacificNWWeddingPlanning.css";
import { Link } from "react-router-dom";

const PacificNWWeddingPlanning = () => {
  return (
    <div className="planning-services" >
      <h1 className="title">Planning Services</h1>
      <div className="content">
        <div className="image-container">
          <img src="data:image/jpeg;base64,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" alt="Elegant table setting" className="service-image" />
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
          <img src="/path-to-table-setting-image.jpg" alt="Elegant table setting" className="service-image" />
        </div>
      </div>
      


      <div>
        hthbkhbd
      </div>

      <div className="content">
        <div className="image-container">
          <img src="/path-to-wedding-image.jpg" alt="Wedding ceremony" className="wedding-image" />
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

export default PacificNWWeddingPlanning;