import React from 'react';
import VehicleCard from "../components/VehicleCard";
import ZOE from "../assets/ZOE-1.png";
import nissan from "../assets/nissan-leaf.png";
import MG from "../assets/MG-ZS-EV.png";


const Dashboard = (props: any) => {
    // const {} = props;
    const n = 3; // Or something else

[...Array(n)].map((e, i) => <span className="busterCards" key={i}>♦</span>)

    return (
        <>
            <div className="list-control-box">
                <div>
                    <label>Sort By</label>
                    <select name="sort_by" id="sort_by">
                        <option value="low">Lowest Price</option>
                        <option value="high">Highest Price</option>
                    </select>
                </div>
        
                <div>
                    <input type="text" placeholder="Search By Name" name="" id=""/>
                </div>
            </div>

            <article className="cards-container">
            {[...Array(n)].map((e, i) => <VehicleCard/>)}
            </article>
        </>

    );
}
export default Dashboard;