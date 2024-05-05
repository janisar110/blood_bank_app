import React from 'react'
import CMSidebar from '../../../components/Sidebar/CMSidebar'
import { useSelector } from 'react-redux';

const DonorDashboard = () => {
  const { user }  = useSelector((state) => state.donorLoginReducer);
  console.log(user)
  return (
  
    <div className='grid grid-cols-12'>
      <div className='col-span-3'><CMSidebar btn1={"Donate Now"} btn2={"Requests"} name={user.fullname}/></div>
      
    <div className=' text-black font-mono font-bold text-5xl col-span-9'> Wellcome to donor Dashboard</div>
    </div>
  )
}

export default DonorDashboard