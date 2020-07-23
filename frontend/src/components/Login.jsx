import React from "react";
import "../styles/login.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="divclass">
      <p className="sign">
        <i className="fas fa-sign-in-alt" style={{ color: "lightpink" }}></i>
        <span> </span>SIGN IN
      </p>
      <form className="form1">
        <input className="un" type="text" placeholder="Username" />

        <input className="pass" type="password" placeholder="Password" />
        <Link to="/login">
          <button className="submit">Login</button>
        </Link>
        <p className="reg">
          <Link to="/register">New user?Create an account!</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
