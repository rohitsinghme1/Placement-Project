import React from "react";
import Navbar from "../../Component/Navbar.jsx";
import Notifications from "../../Component/Notifications.jsx";

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <Navbar />
            <Notifications />
        </div>
    );
};

export default Dashboard;