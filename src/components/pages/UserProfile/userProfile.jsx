import React from 'react';
import './userProfile.css';

export default function UserProfile() {
  return (
      <div className="profile">
          <div className="containerProfile">
      <h3 className="awakeTitle">Awake Profile</h3>
      <div className="userId">Id: 734210</div>
      <div className="userName">Username: Awake27654
      {/* <span className="changeUsername"><button className="btnUsername">
       change username</button></span> */}
       </div>
       <div className="password">Password: ***********
       <span className="changePassword"><button className="btnPassword">
       change Password</button></span>
       </div>
       </div>  
    </div>
  )
}
