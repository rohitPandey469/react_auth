import { useNavigate, Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import Logo from "../assets/Group 1.svg";
import Ayu1 from "../assets/ayu1.png";
import Ayu2 from "../assets/ayu2.jpg";
import Ayu3 from "../assets/ayu3.jpg";
import Suggest from "./Suggestion";

const Home = () => {
  const navigate = useNavigate();
  const logout = useLogout();

  //   const signOut = async () => {
  //     await logout();
  //     navigate("/linkpage");
  //   };

  return (
    <section>
      <div className="overall">
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
                    <Link to="/register">
                      <button
                        className="btn  btnsm"
                        style={{ width: 10 + "rem", marginRight: 1 + "rem" }}
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
        {/* --------------------------------Banner------------------------------------- */}

        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={Ayu1} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={Ayu2} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={Ayu3} class="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        {/* ---------------------------------------Headache---------------------------- */}
        <br />
        <br />
        <Suggest />
      </div>
    </section>
  );
};

export default Home;
