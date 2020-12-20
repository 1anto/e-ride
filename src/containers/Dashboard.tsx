import React from 'react';
import Login from "./Login";
const Link = require("react-router-dom").Link;

const Dashboard = (props: any) => {
    const {handleLogout} = props;
    
    return (
        <div>
            <div>Dashboard</div>
            <button onClick={handleLogout()}>Logout</button>
            <button><Link to="/details/2">View Details</Link></button>
        </div>
    );
}
export default Dashboard;