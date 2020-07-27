import React from "react";
import "../styles/register.css";
const Register = () => {
  return (
    <div>
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
            
            <button type="submit" className="btn1">
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
