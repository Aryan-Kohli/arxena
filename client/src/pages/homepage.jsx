import React from "react";
import "../css/homepage.css";
import { Link } from "react-router-dom";
import logo from "../img/arxena-logo/arxena-logo.png";
import upload from "../img/new_upload.png";
import chatgpt from "../img/powered_by_gpt4.png";
import twitter from "../img/twitter.png";
import youtube from "../img/youtube.png";
import linkedin from "../img/linkedin.png";
import facebook from "../img/facebook.png";
export default function homepage() {
  return (
    <>
      <div className="mt-4 topp">
        <img src={logo} className="toplogo"></img>
        <ul className="navbar">
          <li>
            <Link to={"/signup"} className="btn btn-primary signup">
              Sign up
            </Link>
          </li>
          <li>
            <Link to={"/login"} className="btn btn-secondary login">
              Log in
            </Link>
          </li>
        </ul>
      </div>
      <div className="">
        <div className="centerlogo">
          <img src={logo} className="logoo"></img>
        </div>
        {/* <div className="">
          <input className="inputt"></input>
        </div> */}
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search any Company's org chart..."
          className="search-input"
        ></input>
        {/* <img src={upload}></img> */}
        <span className="upload-icon"></span>
      </div>
      <div className="centerlogo2">
        <img src={chatgpt} className="logoo2"></img>
      </div>
      <div className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5">
              <div className="row">
                <div className="col">
                  OrgGPT - Talent Identification Software for Ambitious
                  Companies
                </div>
              </div>
              <div className="row">
                <ul className="links-bottom">
                  <li className="abc">
                    <a href="#">Price </a>
                  </li>
                  <li className="abc">
                    <a href="#">Terms of Service </a>
                  </li>
                  <li className="abc">
                    <a href="#">Privacy Policy </a>
                  </li>
                  <li className="abc">
                    {" "}
                    <a href="#">How to use</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">Download Extension </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 offset-md-3">
              <div className="row">
                <div className="col">
                  <ul className="iconss">
                    <li>
                      <a href="https://twitter.com/arxenainc">
                        <img src={twitter} className="oneicon"></img>
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="https://www.youtube.com/channel/UCpaPM7iFg9D309FUaIVeRpA">
                        <img src={youtube} className="oneicon"></img>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/company/arxena">
                        <img src={linkedin} className="oneicon"></img>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/arxenainc">
                        <img src={facebook} className="oneicon"></img>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
