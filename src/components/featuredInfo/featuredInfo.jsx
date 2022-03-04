import React from 'react'
import "./featuredInfo.css"
import { ArrowDownward } from '@mui/icons-material'

export default function FeaturedInfo() {
  return (
    <div className="featured">
        <div className="featuredItem">
            <div className= "logoContaniner">
            <span><img src="images/mtn logo.jpg" alt="logo" className= "mtnlogo"/></span>
            <span className="featuredTitle">Mtn</span>
            </div>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">2400</span>
                <span className="featuredMoneyRate"><ArrowDownward className="featuredIcon"/>
                </span>
            </div>
            <span className="featuredSub">Transaction for the day</span>
            </div>

        <div className="featuredItem">
        <div className= "logoContaniner">
        <span><img src="images/airtel logo.png" alt="logo" className= "airtellogo"/></span>
            <span className="featuredTitle">Airtel</span>
        </div>  
        <div className="featuredMoneyContainer">
                <span className="featuredMoney">2000</span>
                <span className="featuredMoneyRate"> <ArrowDownward className="featuredIcon"/>
                </span>
            </div>
            <span className="featuredSub">Transaction for the day</span>
        </div>

        <div className="featuredItem">
        <div className= "logoContaniner">
        <span><img src="images/glo logo.png" alt="logo" className= "glologo"/></span>
            <span className="featuredTitle">Glo</span>
            </div>
       <div className="featuredMoneyContainer">
                <span className="featuredMoney">1856</span>
                <span className="featuredMoneyRate"><ArrowDownward className="featuredIcon"/>
                </span>
            </div>
            <span className="featuredSub">Transaction for the day</span>
            </div>

        <div className="featuredItem">
        <div className= "logoContaniner">
            <span><img src="images/9mobile logo.png" alt="logo" className= "mobilelogo"/>
            </span>
            <span className="featuredTitle"> 9mobile</span>
            </div>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">1600</span>
                <span className="featuredMoneyRate"> <ArrowDownward className="featuredIcon"/>
                </span>
            </div>
            <span className="featuredSub">Transaction for the day</span>

        </div>

      
    </div>
  )
}
