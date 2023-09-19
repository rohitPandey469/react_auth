import React from "react";
import Shank from "../assets/shank.jpg";
import Trip from "../assets/trip.jpg";
import Mintoil from "../assets/mintoil.jpg";
import Brahmi from "../assets/brahmi.jpg";
import Ashw from "../assets/ashw.jpg";
export default function suggestion() {
  return (
    <>
      <div className="Header d-flex justify-content-between">
        <h4 className="mx-5 text-white">Headache</h4>
        <button
          className="btn"
          style={{
            width: "auto",
            backgroundColor: "#40916C",
            color: "#FFF",
            border: "none",
          }}
        >
          See more
        </button>
      </div>

      {/* ---------------------------------------------------------- */}
      <div className="cont" style={{ textDecoration: "none" }}>
        <ul class=" ulist d-flex text-center" style={{ listStyle: "none" }}>
          <li>
            <a
              style={{ textDecoration: "none" }}
              href="https://amzn.to/48gIEGy"
            >
              {" "}
              <div class="col">
                <img src={Ashw} alt="" />
                <div className="d-flex justify-content-between space">
                  <span className="text-white">Ashwagandha</span>{" "}
                  <span>₹140</span>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a
              style={{ textDecoration: "none" }}
              href="https://amzn.to/3ZtHQtR"
            >
              <div class="col">
                <img src={Brahmi} alt="" />
                <div className="d-flex justify-content-between space">
                  <span className="text-white">Brahmi</span> <span>₹180</span>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a
              style={{ textDecoration: "none" }}
              href="https://amzn.to/3ZoGdxm"
            >
              <div class="col">
                <img src={Mintoil} alt="" />
                <div className="d-flex justify-content-between space">
                  <span className="text-white">Peppermint oil</span>{" "}
                  <span>₹400</span>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a
              style={{ textDecoration: "none" }}
              href="https://amzn.to/3EHakGT"
            >
              <div class="col">
                <img src={Shank} alt="" />
                <div className="d-flex justify-content-between space">
                  <span className="text-white">Shankpushpi</span>{" "}
                  <span>₹294</span>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a
              style={{ textDecoration: "none" }}
              href="https://amzn.to/3PIPtcL"
            >
              <div class="col">
                <img src={Trip} alt="" />
                <div className="d-flex justify-content-between space">
                  <span className="text-white">Triphula </span>{" "}
                  <span>₹200</span>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      {/* ------------------------------------------------Fever-------------------------------------- */}

      <div className="Header d-flex justify-content-between">
        <h4 className="mx-5 text-white">Fever</h4>
        <button
          className="btn"
          style={{
            width: "auto",
            backgroundColor: "#40916C",
            color: "#FFF",
            border: "none",
          }}
        >
          See more
        </button>
      </div>
      {/* ---------------------------------------------------------- */}
      <div className="cont" style={{ textDecoration: "none" }}>
        <ul class=" ulist d-flex text-center" style={{ listStyle: "none" }}>
          <li>
            <a
              style={{ textDecoration: "none" }}
              href="https://amzn.to/3rjtIXr"
            >
              {" "}
              <div class="col">
                <img
                  src="https://m.media-amazon.com/images/I/41gsItKZneL._SX300_SY300_QL70_FMwebp_.jpg"
                  alt=""
                />
                <div className="space d-flex justify-content-between">
                  <span className="text-white">Tulsi</span> <span>₹140</span>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a
              style={{ textDecoration: "none" }}
              href="https://amzn.to/3EGlhbE"
            >
              <div class="col">
                <img
                  src="https://m.media-amazon.com/images/I/51Theoa2rPS._SX300_SY300_QL70_FMwebp_.jpg"
                  alt=""
                />
                <div className="space d-flex justify-content-between">
                  <span className="text-white">Giloy Tulsi</span>{" "}
                  <span>₹300</span>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a
              style={{ textDecoration: "none" }}
              href="https://amzn.to/3r9pu4R"
            >
              <div class="col">
                <img
                  src="https://m.media-amazon.com/images/I/21fhTf6NuZL._PIbundle-5,TopRight,0,0_SX194SY259SH20_.jpg"
                  alt=""
                />
                <div className="space d-flex justify-content-between">
                  <span className="text-white">Tribhuvankirti Ras</span>{" "}
                  <span>₹375</span>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a
              style={{ textDecoration: "none" }}
              href="https://amzn.to/3EHakGT"
            >
              <div class="col">
                <img
                  src="https://m.media-amazon.com/images/I/61eIOO8q5kL._SL1000_.jpg"
                  alt=""
                />
                <div className="space d-flex justify-content-between">
                  <span className="text-white">Godanti Mishran</span>{" "}
                  <span>₹375</span>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a
              style={{ textDecoration: "none" }}
              href="https://amzn.to/3ZkCnFw"
            >
              <div class="col">
                <img
                  src="https://m.media-amazon.com/images/I/51MDPAVH5wL._SL1000_.jpg"
                  alt=""
                />
                <div className="space d-flex justify-content-between">
                  <span className="text-white">Mahasudarshan Kadha </span>{" "}
                  <span>₹375</span>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
