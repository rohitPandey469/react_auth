import React from "react";
import GetStart from "./GetStart";
import left from "../assets/imageL.png";
import right from "../assets/imageRight.png";
import Logo from "../assets/Group 1.svg";
import Img2 from "../assets/bro.png";
import { Link } from "react-router-dom";

function GetStarted() {
  return (
    <>
      <div className="back">
        <img src={right} class="right" alt="" />
        <img src={left} class="left" alt="" />
      </div>
      <br />
      <img src={Logo} className="logo" alt="" />
      <GetStart />
      <img src={Img2} className="bro" alt="bro" />
      <Link
        to="/home"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="btn GetStarted"
      >
        {" "}
        <span className="GetStarted-text">Get Started</span>{" "}
      </Link>
    </>
  );
}

export default GetStarted;
