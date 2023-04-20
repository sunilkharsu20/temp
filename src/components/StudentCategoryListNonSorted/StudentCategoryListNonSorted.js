import React, { useEffect, useState } from "react";

import AdminDashboardHeader from "../AdminDashboardHeader/AdminDashboardHeader";
import {
  StudentListTableBody,
  StudentListTableHeader,
} from "../StudentListTable/StudentListTable";

export default function StudentListNonSorted() {
  const [students, setStudents] = useState([]);
  const [studentCategory, setStudentCategory] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:9000/api/studentData", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    response = await response.json();
    // console.log(response[0],response[1]);
    setStudents(response[0]);
    setStudentCategory(response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <AdminDashboardHeader  />
      <span style={{textAlign:"center",color:"red",fontSize:"22px"}}>Updation of List will be seen after some time</span>
      <StudentListTableHeader />
      <div className="container">
        {studentCategory !== [] ? (
          studentCategory.map((data) => {
            return (
              <div>
                <div key={data._id}>{data.Field}</div>
                <hr />
                {students !== []
                ?
               students.filter((item)=> item.Field === data.Field).map(filterStudents=>{
                return(
                  <div key={filterStudents._id}>
                     <StudentListTableBody />
                    </div>
                )
              }):<div> No Such Data Found</div>}
              </div>
            );
          })
        ) : (
          <div>*****************</div>
        )}
       
      </div>
    </>
  );
}
