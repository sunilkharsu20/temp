
import React from 'react';
import { Link } from 'react-router-dom';
import { BiLogOut } from 'react-icons/bi';


export default function AdminDashboardHeader() {
  return (
    <>
    <div className="d-flex justify-content-evenly pt-3 pb-3 flex-wrap" style={{background: "#ED397F"}}>
    <Link to="/add_student_admin" className="m-auto">
        <button type="button" className="btn btn-light  btn-block m-2 ">
          Add Student
        </button>
        </Link>
        <Link to="/get_student_list_non_sorted_admin" className="m-auto">
        <button type="button" className="btn btn-light  btn-block p-2   m-2">
          Students list
        </button>
        </Link>
        <Link to="/get_student_list_admin" className="m-auto">
        <button type="button" className="btn btn-light  btn-block p-2   m-2">
          Students list (Field-Wise)
        </button>
        </Link>
        <Link to="/admin_login_page" className="m-auto">
        <button type="button" className="btn btn-light  btn-block p-2 m-2">
          Update Student Details
        </button>
        </Link>
        <Link to="/admin_login_page" className="m-auto">
        <button type="button" className="btn btn-light  btn-block p-2 m-2">
          Remove Students
        </button>
        </Link>
        <Link to="/admin_login_page" className="m-auto">
        <button type="button" className="btn btn-light  btn-block p-2 m-2">
          Logout 
        <BiLogOut />
        </button>
        </Link>
        
        
    </div>
    
    </>
  )
}
