import React, { useState } from "react";
import { ReactComponent as Logo } from "../styles/ecommerce.svg";
import "../styles/nav.css";
const Navigation = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light ">
        <a className="navbar-brand" href="/">
          <Logo /> ShopeeXor
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/home">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/cart">
                Cart
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/wish">
                Wishlist
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
