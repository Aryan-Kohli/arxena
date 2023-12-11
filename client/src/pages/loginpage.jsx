import React from "react";
import logo from "../img/arxena-logo/arxena-logo.png";
import "../css/loginpage.css";
import { Link } from "react-router-dom";
import Rightquote from "../components/rightquote";
export default function loginpage() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 container">
            <div className="row mt-4">
              <img src={logo} className="leftlogo"></img>
            </div>
            <div className="row">
              {/* <div className="col-md-3"></div> */}
              <div className="col-md-6 mx-auto center-div">
                <div className="row text-center w-text">
                  <h5>Welcome back!</h5>
                </div>
                <div className="row">
                  <div className="col-md-8 mx-auto">
                    <input type="email" className="inppt" placeholder="Email" />
                  </div>
                </div>
                <div className="row ">
                  <div className="col-md-8 mx-auto">
                    <input
                      type="password"
                      className="inppt"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-2"></div>
                  <div className="col-md-8 mx-auto">
                    <button className="btn btn-primary btnlog text-center">
                      Log in
                    </button>
                  </div>
                </div>
                <div className="row mt-4">
                  <h5 className="text-center light-text">
                    Forgot you Password?{" "}
                    <Link to="/password_reset">Reset it here</Link>
                  </h5>
                </div>
                <div className="row">
                  <h5 className="text-center light-text">
                    Need an account?{" "}
                    <Link to={"/signup"}>Sign up for free </Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <Rightquote />
          </div>
        </div>
      </div>
    </div>
  );
}
