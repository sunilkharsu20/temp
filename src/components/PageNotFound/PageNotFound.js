import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.css";

export default function PageNotFound() {
  return (
    <>
      <div className="pagenotfounddiv">
        <img
          className="error_image "
          src="https://images.news18.com/ibnlive/uploads/2022/02/ashneer-grover-2-16455906144x3.png"
          alt="404"
        />
        <div className="column pt-1">
        <Link to="/" className="btn btn-primary btn-lg btn-block mt-1 ms-1 me-1 pe-1">
          {" "}
          Go to Home
        </Link>
          
        <Link to="/" className="btn btn-primary btn-lg btn-block mt-1 ms-1 me-1 pe-1">
          {" "}
          (Under Construction)
        </Link>
          
        </div>
        
      </div>
    </>
  );
}
