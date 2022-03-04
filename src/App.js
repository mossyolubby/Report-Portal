import React from 'react';
import Sidebar from "./components/SideBar/sidebar";
import Topnav from "./components/Topnav/topnav";
import Home from "./components/pages/home/home";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import UserProfile from "./components/pages/UserProfile/userProfile";
import Report from "./components/pages/Report/report";
import Login from "./components/pages/Login/login";
import ChangePassword from "./components/pages/ChangePassword/changePassword";
import AdminDashboard from './components/pages/Admin/Dashboard/dashBoard';
import AdminTransaction from './components/pages/Admin/Transaction/transaction';
import ManageServiceProvider from './components/pages/Admin/ServiceProviders/serviceProvider';
import ManageClient from './components/pages/Admin/Clients/client';


function App() {
  return (
    <Router>
      
     <Topnav/>
     <div className= "container">
       <Sidebar/>
       <Routes>
         <Route path="/" exact element={<Home/>}/>
         <Route path="/profile" element={<UserProfile/>}/>
         <Route path="/report" element={<Report/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/password" Component={ChangePassword}/>
         <Route path="/adminDashboard" element={<AdminDashboard/>}/>
         <Route path="/adminTransaction" element={<AdminTransaction/>}/>
         <Route path="/serviceProvider"  element={<ManageServiceProvider/>}/>
         <Route path="/client"  element={<ManageClient/>}/>
       </Routes>
       
     </div>
    </Router>
  );
}

export default App;
