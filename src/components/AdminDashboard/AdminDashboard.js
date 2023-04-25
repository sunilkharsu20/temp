import React from 'react';



import "./AdminDashboard.css";

import AdminDashboardHeader from '../AdminDashboardHeader/AdminDashboardHeader';


export default function AdminDashboard() {
  return (
    
    <>
  
    <AdminDashboardHeader />
    <div className='admindashboardbackground'>
      <span className='dashboardText'>Admin</span>
      <span className='dashboardText'>Dashboard</span>
      </div>
    </>
  )
}
