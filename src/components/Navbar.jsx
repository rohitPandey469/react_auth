import React from "react";
import Logo from "../assets/Group 1.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg ">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/home">
          <img src={Logo} alt="" className="logo" />
        </Link>
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
        <Link to="/chatbot">
          <button
            className="btn "
            style={{
              width: 10 + "rem",
              marginRight: 1 + "rem",
              backgroundColor: "#52B788",
            }}
          >
            Interact with AI
          </button>
        </Link>

        <div
          class="collapse navbar-collapse d-flex justify-content-end"
          id="navbarSupportedContent"
        >
          <div class="d-flex justify-content-end">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link
                  to="/allproducts"
                  class="nav-link hover-underline-animation "
                  href="#"
                >
                  All Products
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="/knowledge"
                  class="nav-link hover-underline-animation"
                  href="#"
                >
                  Knowledge
                </Link>
              </li>
              <li class="nav-item dropdown">
                <Link
                  to="/store"
                  class="nav-link hover-underline-animation"
                  role="button"
                >
                  Offline Store
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="/consult"
                  class="nav-link hover-underline-animation"
                  href="#"
                >
                  Consult{" "}
                </Link>
              </li>

              <li>
                <Link to="/register">
                  <button
                    className="btn  btnsm"
                    style={{
                      width: 10 + "rem",
                      marginRight: 1 + "rem",
                      marginTop: "0.55rem",
                    }}
                  >
                    Registration
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
