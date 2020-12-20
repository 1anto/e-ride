import react from 'react';
import ZOE from "../assets/ZOE-1.png";

const Link = require("react-router-dom").Link;

const VehicleCard = () => {
    return (
        <section>
            <aside className="hilights-box">
                <p className="rate-hilight">from $450/mo</p>
                <p className="min-duration-hilight">for 6 months</p>
            </aside>
            <img src={ZOE} alt="zoe car"/>
            <p className="vehicle-description">Renault ZOE ZE50 R135 GT Line (rapid) 52kWh</p>
            <p className="vehicle-efficiency">17 kWh/miles Efficiency</p>
            <Link to="/details/2">
                <button className="explore-btn">Explore</button>
            </Link>
        </section>
    )
}

export default VehicleCard;