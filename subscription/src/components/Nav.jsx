import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context";
import SpectraLogo from "../assets/Spectra_logo-CpPh7jlj (1).svg";
import "../App.css";
const Nav = () => {
  const [state, setState] = useContext(UserContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
    setState({});
    sessionStorage.clear();
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light1"
      id="nav-background"
    >
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav" style={{ gap: "50px" }}>
          <img
            src={SpectraLogo}
            style={{
              width: "120px",
              marginRight: "800px",
              marginLeft: "20px",
            }}
          />
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          {sessionStorage.token || state?.token ? (
            <li className="nav-item">
              <Link onClick={logout} className="nav-link">
                Logout
              </Link>
            </li>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Sign up
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
