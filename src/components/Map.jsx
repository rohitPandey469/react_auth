import React from "react";
import Logo from "../assets/Group 1.svg";
import location from "../assets/location.svg";
import Navbar from "./Navbar";

export default function map() {
  return (
    <>
      {/* -----------------------------Navbar-------------------------------------- */}
      <Navbar />

      {/* ----------------------------------------------------------------------------------------------- */}
      <div className="main d-flex justify-content-between">
        <div
          className="divmap1 d-flex justify-content-start"
          style={{ color: "#D8F3DC" }}
        >
          <div>
            <ul style={{ listStyle: "none" }}>
              <h5
                className=""
                style={{ color: "#D8F3DC", marginLeft: 1 + "rem" }}
              >
                Offline Stores near us
              </h5>
              <li className="d-flex ligreen">
                <div>
                  <img src={location} alt="" className="" />
                </div>
                <div>
                  Patanjali Ayurvedic Store <br /> 20 KM away <br />
                  Mayur Vihar Phase-II, Delhi
                </div>
              </li>
              <li className="d-flex ligreen dgreen">
                <div>
                  <img src={location} alt="" className="" />
                </div>
                <div>
                  Patanjali Ayurvedic Store <br /> 20 KM away <br />
                  Mayur Vihar Phase-II, Delhi
                </div>
              </li>
            </ul>

            <ul style={{ listStyle: "none" }}>
              <h5
                className=""
                style={{ color: "#D8F3DC", marginLeft: 1 + "rem" }}
              >
                Ayurvedic Clinic near us
              </h5>
              <li className="d-flex ligreen">
                <div>
                  <img src={location} alt="" className="" />
                </div>
                <div>
                  Patanjali Ayurvedic Store <br /> 20 KM away <br />
                  Mayur Vihar Phase-II, Delhi
                </div>
              </li>
              <li className="d-flex ligreen dgreen">
                <div>
                  <img src={location} alt="" className="" />
                </div>
                <div>
                  Patanjali Ayurvedic Store <br /> 20 KM away <br />
                  Mayur Vihar Phase-II, Delhi
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="divmap2">
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe
                class="gmap_iframe"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=noida sector 62&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
              <a href="https://connectionsgame.org/">Connections Puzzle</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
