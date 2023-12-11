import React from "react";
import logo from "../img/arxena-logo/arxena-logo.png";
import "../css/loginpage.css";
import Rightquote from "../components/rightquote";
export default function loginpage() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 conatiner">
            <div className="row mt-4">
              <img src={logo} className="leftlogo"></img>
            </div>
            <div className="row"></div>
          </div>
          <div className="col-md-4">
            <Rightquote />
          </div>
        </div>
      </div>
    </div>
  );
}
