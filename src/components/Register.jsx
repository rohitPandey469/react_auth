import { useRef } from "react";
import { useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../api/axios";
import { Link } from "react-router-dom";
import left from "../assets/imageL.png";
import right from "../assets/imageRight.png";

const USER_REGEX = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
const PWD_REGEX =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

const REGISTER_URL = "/register";

export const Register = () => {
  const userRef = useRef(); //sets the focus on username when components rerender
  const errRef = useRef(); //setting the focus so can be announced by the screen reader

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd && PWD_REGEX.test(matchPwd));
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      setSuccess(true);
      // clear out the input fields
      setUser("");
      setPwd("");
      setMatchPwd("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 204) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>Success!</h1>
          <p>
            <Link to="/login">Sign In</Link>
          </p>
        </section>
      ) : (
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
                <div className="container">
                  <p
                    ref={errRef}
                    className={errMsg ? "errmsg" : "offscreen"}
                    aria-live="assertive"
                  >
                    {errMsg}
                  </p>
                  <h3 className="">Register</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        placeholder="Username"
                        ref={userRef}
                        autoComplete="off"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                        required
                        aria-invalid={validName ? "false" : "true"}
                        aria-describedby="uidnote"
                        onFocus={() => setUserFocus(true)}
                        onBlur={() => setUserFocus(false)}
                      />
                      {/* <span className={validName ? "valid" : "hide"}>
                        <FontAwesomeIcon icon={faCheck} />
                      </span>
                      <span className={validName || !user ? "hide" : "invalid"}>
                        <FontAwesomeIcon icon={faTimes} />
                      </span> */}
                    </div>
                    <div
                      id="uidnote"
                      className={
                        userFocus && user && !validName
                          ? "instructions mb-4"
                          : "offscreen mb-4"
                      }
                    >
                      <FontAwesomeIcon icon={faInfoCircle} />
                      8 to 20 characters.
                      <br />
                      Must begin with a alphabet.
                      <br />
                      No Spaces Buddy.
                    </div>
                    <div className="mb-2">
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        value={pwd}
                        onChange={(e) => setPwd(e.target.value)}
                        required
                        aria-invalid={validPwd ? "false" : "true"}
                        aria-describedby="pwdnote"
                        onFocus={() => setPwdFocus(true)}
                        onBlur={() => setPwdFocus(false)}
                      />
                      {/* <span className={validPwd ? "valid" : "hide"}>
                        <FontAwesomeIcon icon={faCheck} />
                      </span>
                      <span className={validPwd || !pwd ? "hide" : "invalid"}>
                        <FontAwesomeIcon icon={faTimes} />
                      </span> */}
                    </div>
                    <div
                      id="pwdnote"
                      className={
                        pwdFocus && !validPwd
                          ? "instructions mb-4"
                          : "offscreen"
                      }
                    >
                      <FontAwesomeIcon icon={faInfoCircle} />
                      Atleast 8 characters.
                      <br />
                      Must have one alphabet and one number.
                      <br />
                      Atleast one special characters:{" "}
                      <span aria-label="exclamation mark">!</span>{" "}
                      <span aria-label="at symbol">@</span>{" "}
                      <span aria-label="hashtag">#</span>{" "}
                      <span aria-label="dollar sign">$</span>{" "}
                      <span aria-label="percent">%</span>
                    </div>
                    <div className="mb-2">
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        value={matchPwd}
                        onChange={(e) => setMatchPwd(e.target.value)}
                        required
                        aria-invalid={validMatch ? "false" : "true"}
                        aria-describedby="confirmnote"
                        onFocus={() => setMatchFocus(true)}
                        onBlur={() => setMatchFocus(false)}
                        placeholder="Confirm Password"
                      />
                    </div>
                    <div
                      id="confirmnote"
                      className={
                        matchFocus && !validMatch
                          ? "instructions mb-4"
                          : "offscreen"
                      }
                    >
                      <FontAwesomeIcon icon={faInfoCircle} />
                      Same as the password enter above.
                    </div>
                    <button
                      disabled={
                        !validName || !validPwd || !validMatch ? true : false
                      }
                      type="submit"
                      className="btn "
                      style={{
                        backgroundColor:"95D5B2"
                      }}
                    >
                      Register
                    </button>
                  </form>
                  <p className="mt-2">
                    Already <i>registered</i> ?
                    <br />
                  </p>
                  <span className="line mt-0">
                    <Link to="/login">
                      <button className="btn btn-primary">Sign In</button>
                    </Link>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </section>
      )}
    </>
  );
};
