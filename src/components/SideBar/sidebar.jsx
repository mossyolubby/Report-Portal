import React from 'react';
import "./sidebar.css";
import { LineStyle } from '@mui/icons-material';
import { Dashboard, Summarize, AccountBox, Logout } from '@mui/icons-material';
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <Link to="/" className="sidebarTitle active">
                <Dashboard className="sidebarIcon" id="dashboard"/>
                Dashboard</Link>
                {/* <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        <LineStyle className="sidebarIcon"/>
                        Mtn
                    </li>
                    <li className="sidebarListItem">
                        <LineStyle className="sidebarIcon"/>
                        Airtel
                    </li>
                    <li className="sidebarListItem">
                        <LineStyle className="sidebarIcon"/>
                        Glo
                    </li>
                    <li className="sidebarListItem">
                        <LineStyle className="sidebarIcon"/>
                        Etisalat
                    </li>
                </ul> */}
            </div>
            <div className="sidebarMenu">
                <Link to = "/report" className="sidebarTitle">
                <Summarize className="sidebarIcon" id="Summariza"/>
                Report</Link>
                {/* <ul className="sidebarList">
                    <li className="sidebarListItem ">
                        <LineStyle className="sidebarIcon"/>
                        Mtn
                    </li>
                    <li className="sidebarListItem">
                        <LineStyle className="sidebarIcon"/>
                        Airtel
                    </li> 
                    <li className="sidebarListItem">
                        <LineStyle className="sidebarIcon" />
                        Glo
                    </li>
                    <li className="sidebarListItem">
                        <LineStyle className="sidebarIcon"/>
                        Etisalat
                    </li>
                </ul> */}
            </div>
            <div className="sidebarMenu">
                <Link to ="/profile" className="sidebarTitle">
                <AccountBox className="sidebarIcon"/>Profile Settings</Link>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">
                {/* <Dashboard className="sidebarIcon" id="dashboard"/> */}
                Admin</h3>
                <ul className="sidebarList">
                <Link to="/adminDashboard" className="sidebarTitle active"><li className="sidebarListItem">
                        <LineStyle className="sidebarIcon"/>
                        Dashboard
                    </li></Link>

                    <Link to="/adminTransaction" className="sidebarTitle active">
                    <li className="sidebarListItem">
                        <LineStyle className="sidebarIcon"/>
                        Transaction
                    </li></Link>

                    <Link to ="/serviceProvider" className="sidebarTitle">
                    <li className="sidebarListItem">
                        <LineStyle className="sidebarIcon"/>
                        Service Providers
                    </li>
                    </Link>

                    <Link to ="/client" className="sidebarTitle">
                    <li className="sidebarListItem">
                        <LineStyle className="sidebarIcon"/>
                        Clients
                    </li>
                    </Link>

                    <Link to ="/admin" className="sidebarTitle">
                    <li className="sidebarListItem">
                        <LineStyle className="sidebarIcon"/>
                        Manage Admin
                    </li>
                    </Link>
                    
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">
                <Logout className="sidebarIcon" id="dashboard"/>Logout</h3>
            </div>
        </div>
    </div>
  )
}
