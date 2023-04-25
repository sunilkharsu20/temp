import React from "react";
import { Table } from "react-bootstrap";
import './StudentListTable.css';

export function StudentListTableHeader() {
  return (
    <div className="ms-3 mt-2 me-3" >
      <Table striped bordered hover >
        <tbody>
         <tr className="main_heading">
            
            <td className="pe-4">StudentName</td>
            <td className="px-3">RollNumber</td>
            <td style={{paddingLeft:"6vw",paddingRight:"9vw"}} className="hideOnShort" >Email</td>
           
            <td className="px-4 hideOnShort">Field</td>
            <td className="px-3 hideOnShort">Department
            </td>
            <td className="px-3 hideOnShort">Class</td>
            <td style={{paddingLeft:"9vw",paddingRight:"14vw"}}  className="hideOnShort">Marks</td>
            <td className="px-5 hideOnShort">DateofCreation</td>
          </tr>
         
        </tbody>
      </Table>
    </div>
    
  );
}
export function StudentListTableBodyUnSorted({students}) {

  return (

    <div className="ms-3 mt-2 me-3" >
      <Table striped bordered hover >
        <tbody>
          {
            students.map((currStudent) =>{
              const {_id,StudentName,RollNumber,Email,Field,Department,Class,Marks,DateofCreation} = currStudent;
              return (
<tr  key={_id}>
            
            <td className="pe-3">{StudentName}</td>
            <td className="px-3">{RollNumber}</td>
            <td className="px-3 hideOnShort">{Email}</td>
           
            <td className="px-3 hideOnShort">{Field}</td>
            <td className="px-3 hideOnShort">{Department}
            </td>
            <td className="px-3 hideOnShort">{Class}</td>
            <td className="px-3 hideOnShort">{JSON.stringify(Marks)}</td>
            <td className="px-3 hideOnShort">{DateofCreation}</td>
          </tr>
         
              )
            })
          }
          
        </tbody>
      </Table>
    </div>
    
  );
}
export function StudentListTableBodySorted(props) {
  var jsonobject = props.Marks;
  return (
    <div >
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
