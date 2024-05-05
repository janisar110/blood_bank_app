import React from 'react'
import CMAdminSidebar from '../../../components/Sidebar/CMAdminSidebar'
import { useSelector } from 'react-redux';

const AdminDashboard = () => {
  const { user }  = useSelector((state) => state.adminLoginReducer);
  return (
    <>
     <div className='grid grid-cols-12'>
    <div className='grid col-span-3'><CMAdminSidebar name={user.fullname}/></div>
    <div className=' text-black font-mono font-bold text-5xl col-span-9'> Wellcome to Admin Dashboard</div>
    </div>   
    </>
  )
}

export default AdminDashboard