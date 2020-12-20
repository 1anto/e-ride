import react from 'react';
import ZOE from "../assets/ZOE-1.png";

const Link = require("react-router-dom").Link;

const VehicleCard = () => {
    return (
        <section>
            <p className="rate-hilight">from $450/mo</p>
            <p className="min-duration-hilight">for 6 months</p>
            <img src={ZOE} alt="zoe car"/>
            <p className="vehicle-description">Renault ZOE ZE50 R135 GT Line (rapid) 52kWh</p>
            <p className="vehicle-efficiency">17 kWh/miles Efficiency</p>
            <button><Link to="/details/2">Explore</Link></button>
        </section>
    )
}

export default VehicleCard;