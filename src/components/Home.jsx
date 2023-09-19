import { useNavigate, Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import Ayu1 from "../assets/ayu1.png";
import Ayu2 from "../assets/ayu2.jpg";
import Ayu3 from "../assets/ayu3.jpg";
import Suggest from "./Suggestion";
import Navbar from "./Navbar";

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
        <Navbar />
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
