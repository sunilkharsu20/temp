import React from "react";
import "./homePage.css";
import { Link } from "react-router-dom";


// import Blur_Background from "./../../src/images/back.png";

export default function homePage() {
  return (
    <div className="background_div d-flex flex-column">
      <p className="left_text">
        <span className="span_text d-flex justify-content-center mb-auto ">
          W<span className="span_text Red_Span ">el</span>Come
        </span>
        <br />
        <span className="span_text d-flex justify-content-center mb-auto">To</span>
        <span className="span_text d-flex justify-content-center mb-auto">
          R<span className="span_text Red_Span">esult</span> <span className="span_text Green_Span">C</span>hecker
        </span>
      </p>
      <div className="text-center d-flex flex-row justify-content-center flex-wrap">
        <Link to="/admin_login_page" className="m-auto">
        <button type="button" className="btn btn-light  btn-block p-2  mt-3">
          Click Here For Admin Portal
        </button>
        
        </Link>
        <Link to="/student_login_page" className="m-auto">
        <button type="button" className="btn btn-light  btn-block p-2 mt-2">
          Click Here For Student Portal
        </button>
        </Link>
      </div>
    </div>
  );
}
