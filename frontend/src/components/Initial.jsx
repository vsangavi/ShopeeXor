import React from "react";
import "../styles/initial.css";
import { Link } from "react-router-dom";
import Login from "./Login";
//import { ReactComponent as Logo } from "../styles/ecommerce.svg";
const Initial = () => {
  return (
    <div className="divclass1">
      <h1>Wear what you Love!!</h1>
      <h4>Let's get Started</h4>
      <div className="text-center">
        <Link to="/login">
          <button type="button" className="btn1">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Initial;
