import React from "react";
import { Table } from "react-bootstrap";
import './StudentListTable.css';

export function StudentListTableHeader() {
  return (
    <div className="ms-3 mt-0 me-3">
      <Table striped bordered hover >
        <thead>
          <tr >
            <th>Sno.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
       
      </Table>
    </div>
  );
}
export function StudentListTableBody(props) {
  var jsonobject = props.Marks;
  return (
    <div className="ms-3 mt-0 me-3">
      <Table striped bordered hover >
        <tbody>
          <tr>

           
            <td className="pe-3"> <img style={{height:"52px"}} src= {props.img} alt="img"/></td>
            <td className="pe-3">{props.StudentName}</td>
            <td className="px-3">{props.RollNumber}</td>
            <td className="px-3">{props.Email}</td>
            <td className="px-3">{props.Field}</td>
            <td className="px-3">{props.Department}</td>
            <td className="px-3">{props.Class}</td>
            
            <td className="px-3">{props.RegDate}</td>
            <td className="px-3">{JSON.stringify(jsonobject)}</td>
            
          </tr>
         
        </tbody>
      </Table>
    </div>
  );
}
