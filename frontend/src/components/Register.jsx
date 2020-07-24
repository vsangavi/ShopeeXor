import React from "react";
import "../styles/register.css";
const Register = () => {
  return (
    <div className="box">
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
          <div className="butt">
            <center>
              <button type="submit">Register</button>
            </center>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
