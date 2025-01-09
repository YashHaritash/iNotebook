import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import alertContext from "../context/alert/alertContext";

function LoginOption() {
  const isAuthenticated = localStorage.getItem("token");
  const navigate = useNavigate();
  const { showAlert } = useContext(alertContext);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    showAlert("Logout Successful");
  };

  return (
    <form className="d-flex" role="search">
      {!isAuthenticated ? (
        <>
          <Link className="btn btn-primary mx-1" to="/login" role="button">
            Login
          </Link>
          <Link className="btn btn-primary mx-1" to="/signup" role="button">
            Signup
          </Link>
        </>
      ) : (
        <button className="btn btn-danger mx-1" onClick={handleLogout}>
          Logout
        </button>
      )}
    </form>
  );
}

export default LoginOption;
