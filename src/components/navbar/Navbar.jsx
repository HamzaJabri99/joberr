import React from "react";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <span className="text">joberr</span>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Joberr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Become a Seller</span>
          <span>Sign in</span>
          <button>Join</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
