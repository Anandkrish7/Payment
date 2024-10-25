import React, { useContext } from "react";
import { Link } from "react-router-dom"; // Ensure the correct import
import { isAuth } from "../utils/functions";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context";

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
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          {sessionStorage.token || state && state.token ? (
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
