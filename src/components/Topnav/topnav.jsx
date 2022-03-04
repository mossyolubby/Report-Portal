import React from 'react'
import './topnav.css';
import { NotificationsNone, Language, Settings } from '@mui/icons-material'

export default function Topnav() {
  return (
    <div className="topnav">
        <div className="topnavwrapper">
            <div className="topleft">
              <span className="logo">Awake Report Portal</span>
            </div>
            <div className="topright">
              <div className="topnavIconsContainer">
                {/* <NotificationsNone /> */}
                {/* <span className="topIconBadge">2</span> */}

              </div>
              <div className="topnavIconsContainer">
                {/* <Language /> */}
                {/* <span className="topIconBadge">2</span> */}

              </div>
              <div className="topnavIconsContainer">
                {/* <Settings /> */}
                

              </div>
            </div>
        </div>
    </div>
  )
}
