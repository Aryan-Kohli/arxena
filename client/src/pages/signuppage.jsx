import React from "react";
import logo from "../img/arxena-logo/arxena-logo.png";
import "../css/loginpage.css";
import { Link } from "react-router-dom";
import Rightquote from "../components/rightquote";
// import { PhoneInput } from "react-international-phone";

export default function signuppage() {
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
              <div className="col-md-3"></div>
              <div className="col-md-6  center-div2">
                <div className="row text-center w-text">
                  <h5>Get started with 10 free org-chart credits.</h5>
                  <h5>No credit card is needed.</h5>
                </div>
                <div className="row">
                  <div className="col-md-1"></div>
                  <div className="col-md-8 ">
                    <input
                      type="text"
                      className="inppt"
                      placeholder="Full Name"
                    />
                  </div>
                </div>
                <div className="row ">
                  <div className="col-md-1"></div>

                  <div className="col-md-8 ">
                    <input
                      type="email"
                      className="inppt"
                      placeholder="Business Email"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1"></div>

                  <div className="col-md-8 ">
                    <input
                      type="tel"
                      className="inppt"
                      placeholder="Mobile Number"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1"></div>

                  <div className="col-md-8 ">
                    <input
                      type="password"
                      className="inppt"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-10 offset-md-1">
                    <button className="btn  text-center btn3">
                      I work for a
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 downicon"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-2"></div>
                  <div className="col-md-8 mx-auto">
                    <button className="btn btn-primary btn22 text-center">
                      Create Account
                    </button>
                  </div>
                </div>

                <div className="row mt-4">
                  <h5 className="text-center light-text">
                    Already Registered?
                    <Link to="/login">Login in instead?</Link>
                  </h5>
                </div>
                <div className="row">
                  <h5 className="text-center light-text">
                    Account lock: We discourage licence sharing. Your account
                    will be accessible from this device only
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
