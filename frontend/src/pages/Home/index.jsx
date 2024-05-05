import axios from "axios";
import React, { useEffect } from "react";
import CMHeader from "../../components/Headers/CMHeader";
import CMFooter from "../../components/Footers/CMFooter";
import blooddonor from '../../assets/Images/blooddonor.png'
import bloodbank from "../../assets/Images/blood-bank.png"
import bloodpressure from "../../assets/Images/blood-pressure.png"

const Home = () => {
  return (
    <>
    <CMHeader/>
    <div className="flex justify-center h-[600px]">
    <div className="flex gap-14 items-center ">
      <div className="animate-pulse">
        <img src={blooddonor} alt="hero" />
      </div>
      <div className="animate-pulse ">
      <img src={bloodbank} className="justify-center" width={300} alt="hero" />
      </div>
      <div className="animate-pulse mx-20">
      <img src={bloodpressure} width={240}  alt="hero" />
      </div>
    </div>
    </div>  
    <CMFooter/>
    </>
  )
}

export default Home