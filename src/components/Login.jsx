import { useRef, useState, useEffect } from "react";
import axios from "../api/axios";
import useAuth from "../hooks/useAuth";
import { useNavigate, useLocation, Link } from "react-router-dom";
import useInput from "../hooks/useInput";
import useToggle from "../hooks/useToggle";
import Nws from "../assets/Notwithus.png";
import left from "../assets/imageL.png";
import right from "../assets/imageRight.png";

const LOGIN_URL = "/auth";

const Login = () => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const userRef = useRef();
  const errRef = useRef();

  const [user, resetUser, userAttribs] = useInput("user", ""); // useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState(false);
  const [check, toggleCheck] = useToggle("persist", false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      const accessToken = response?.data?.accessToken;
      setAuth({ user, accessToken });

      // setUser("");
      resetUser();
      setPwd("");
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No server Response");
      } else if (err.response?.status === 404) {
        setErrMsg("No Username Found");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      if (errRef) errRef.current.focus();
    }
  };

  // const togglePersist = () => {
  //   setPersist((prev) => !prev);
  // };
  // useEffect(() => {
  //   localStorage.setItem("persist", persist);
  // }, [persist]);

  return (
    <section>
      <img src={right} className="right" alt="" />
      <img src={left} className="left" alt="" />

      <div className="body">
        <ul
          className="d-flex text-center flex-column justify-content-center"
          style={{ listStyle: "none" }}
        >
          <p className="radial d-flex justify-content-center "></p>

          <li>
            <h1>Welcome!!</h1>
          </li>
          <li>
            <h3>Login to get the best experience </h3>
          </li>
          <li>
            {/* -------------------------------------------- */}
            <form onSubmit={handleSubmit} className="container">
              <p
                ref={errRef}
                className={errMsg ? "errmsg" : "offscreen"}
                aria-live="assertive"
              >
                {errMsg}
              </p>
              <h3 className="">Login</h3>
              <div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Username"
                    aria-describedby="emailHelp"
                    ref={userRef}
                    autoComplete="off"
                    {...userAttribs}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    autoComplete="off"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary ">
                  Login
                </button>
                {/* <div className="persistCheck">
                  <label
                    htmlFor="persist"
                    className="trust"
                  >
                    <input
                      type="checkbox"
                      id="persist"
                      onChange={toggleCheck}
                      checked={check}
                    />
                    Trust This Device
                  </label>
                </div> */}
                <img src={Nws} alt="" style={{ width: 346 + "px" }} />

                <Link to="/register">
                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                </Link>
              </div>
            </form>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Login;
