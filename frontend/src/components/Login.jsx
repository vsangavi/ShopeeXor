import React from "react";
import "../styles/login.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="box">
      <br/>
      <h1>Login</h1>
      <form>
        <div>
          <label className="space">Email:</label>
          <input type="text" placeholder="Enter valid mail id" />
          <div>
            <label>Password:</label>
            <input type="Password" placeholder="Enter your password" />
          </div>
          <center>
           <div className="text-center">
        <button type="submit" className="btn1">
          Login
        </button>
        </div>
            <div className="link1">
              <Link style= {{color:'black'}} to="/register">
                <h5>New user?SignUp</h5>
              </Link>
            </div>
          </center>
        </div>
      </form>
    </div>
  );
};

export default Login;
