import React from 'react'
import CMSidebar from '../../../components/Sidebar/CMSidebar'
import { useSelector } from 'react-redux';

const PatientDashboard = () => {
  const { user }  = useSelector((state) => state.patientLoginReducer);
  return (
    <>
    <div className='grid grid-cols-12'>
    <div className='grid col-span-3'> <CMSidebar btn1={"Need Blood"} btn2={"Requests"} name={user.fullname}/></div>
    <div className=' text-black font-mono font-bold text-5xl col-span-9'> Wellcome to patient Dashboard</div>
    </div>
     
    </>
  )
}

export default PatientDashboard