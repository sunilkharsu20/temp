import React, { useEffect, useState } from "react";

import AdminDashboardHeader from "../AdminDashboardHeader/AdminDashboardHeader";
import {

  StudentListTableBodyUnSorted,
  StudentListTableHeader,
} from "../StudentListTable/StudentListTable";

export default function StudentListNonSorted() {
  const API = "http://localhost:9000/api/studentDataAll";
  const [students, setStudents] = useState([]);
 

  const loadData = async (API) => {
    let response = await fetch(API, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    if(data.length >0){
      setStudents(data);
    }



  };

  useEffect(() => {
    loadData(API);
  }, []);

  return (
    <>
      <AdminDashboardHeader  />
      
      <StudentListTableHeader />
      <div>
      <StudentListTableBodyUnSorted students = {students}/>
      <span style={{textAlign:"center",color:"red",fontSize:"1rem",marginBottom:"20px"}}>Updation of List will be seen after some time (*)</span>
      </div>
    </>
  );
}
