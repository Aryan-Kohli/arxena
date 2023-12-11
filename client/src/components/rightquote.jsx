import React from "react";
import person from "../img/man.webp";
import background1 from "../img/background1.png";
import quote from "../img/quote.png";
import quote1 from "../img/quote1.png";
import linkedin from "../img/linkedin.png";
import "../css/rightquote.css";
export default function rightquote() {
  return (
    <div className="rightquote container">
      <div className="row ">
        <div className="person">
          <img src={person} className="pp"></img>
        </div>
      </div>
      <div className="row">
        <img src={quote} className="q1"></img>
      </div>
      <div className="row mt-3">
        <h4 className="quote_line">
          Arxena helps me map with large F100 accounts saving me hours of manual
          work for resourcing projects.
        </h4>
      </div>
      <div className="row mt-3">
        <h4 className="quote_line">
          <b>Mannan Pacha</b> | Manager - Ernst & Young
        </h4>
        <a href="https://www.linkedin.com/in/mannanpacha1988/">
          <img src={linkedin} className="imgqu"></img>
        </a>
      </div>
      <div className="row">
        <div className="col-md-3 offset-9">
          <img src={quote1} className="q1"></img>
        </div>
      </div>
    </div>
  );
}
