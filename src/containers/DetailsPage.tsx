import React from 'react'
import ZOE from "../assets/ZOE-1.png";

const Link = require("react-router-dom").Link;

function DetailsPage() {
  
    return (
      <div className="car-details-container">
        <section>
          <ul className="breadcrumb">
            <li><a href="/">Browse Cars</a></li>
            <li>Renault ZOE ZE50 R135 GT Line (rapid) 52kWh</li>
          </ul>

          <div className="img-subtop">
            <img src={ZOE} alt="zoe car"/>
            <div>
              <p>Available from</p>
              <p>18-12-2020</p>
            </div>
          </div>

          <div className="performance-boxes">
            <div>
              <label>Range</label>
              <label>120/miles</label>
              <label>Real World</label>
            </div>

            <div>
              <label>Charging</label>
              <label>50 kW</label>
              <label>max.speed</label>
            </div>
          </div>

          <div className="specs-list">
            <span>5 seat</span>
            <span>5 doors</span>
            <span>front</span>
            <span>Titanium gray</span>
            <span>140 mph</span>
          </div>

        </section>
        <aside className="booking-preferences">
          <h2>Renault ZOE ZE50 R135 GT Line (rapid) 52kWh</h2>
          
          <label>Min. Subscription Length</label>
          <div className="subscription-length-selection">
            <button className="pink-btn">1 month</button>
            <button className="pink-btn">6 months</button>
          </div>

          <label>Miles per month</label>
          <div className="miles-selection">
            <button className="pink-btn">800</button>
            <button className="pink-btn">1000</button>
            <button className="pink-btn">1200</button>
          </div>

          <label>Delivery date</label>
          <input type="text" placeholder="18/12/2020"/>

          <button className="pink-btn submit-btn">Book Now</button>
        </aside>
      </div>
    );
  }
  export default DetailsPage;