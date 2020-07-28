import React from "react";
import "../styles/register.css";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="box">
      <br />
      <h1>SignUp</h1>

      <form>
        <div>
          <label>Name:</label>
          <input type="text" placeholder="Enter your name" />
          <label>Email:</label>
          <input type="email" placeholder="Enter valid mail id" />
          <label>Mobile:</label>
          <input type="number" placeholder="Enter valid mobile " />
          <label>Password:</label>
          <input type="Password" placeholder="Enter your password" />

          <div className="text-center">
            <Link to="/login">
              <button type="submit" className="btn1">
                Register
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
