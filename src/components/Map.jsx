import React from "react";
import Logo from "../assets/Group 1.svg";
import location from "../assets/location.png";

export default function map() {
  return (
    <>
      {/* -----------------------------Navbar-------------------------------------- */}
      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={Logo} alt="" className="logo" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon text-white"></span>
          </button>
          <span className="text-white mx-4 " style={{ fontWeight: 500 }}>
            <h4>Ayurveda</h4>
          </span>
          <button
            className="btn "
            style={{
              width: 10 + "rem",
              marginRight: 1 + "rem",
              backgroundColor: "#52B788",
              color: "1B4332",
            }}
          >
            Interact with AI
          </button>

          <div
            class="collapse navbar-collapse d-flex justify-content-end"
            id="navbarSupportedContent"
          >
            <div class="d-flex justify-content-end">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link hover-underline-animation " href="#">
                    All Products
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link hover-underline-animation" href="#">
                    Knowledge
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link hover-underline-animation"
                    href="#"
                    role="button"
                  >
                    Consult{" "}
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link hover-underline-animation" href="#">
                    Offline Store
                  </a>
                </li>

                <li>
                  <button className="btn register btnsm">Registration</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

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
