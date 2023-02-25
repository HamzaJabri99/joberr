import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const [activeScroll, setActiveScroll] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const {pathname}=useLocation();
  const currentUser = {
    id: 2,
    username: "jabri",
    isSeller: true,
  };
  const scrololo = () => {
    window.scrollY > 0 ? setActiveScroll(true) : setActiveScroll(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", scrololo);
    return () => {
      window.removeEventListener("scroll", scrololo);
    };
  }, []);
  return (
    <div className={activeScroll || pathname!=="/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className="link">
          <span className="text">joberr</span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Joberr Business</span>
          <span>Explore</span>
          <span>English</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {!currentUser && <span>Sign in</span>}
          {!currentUser && <button>Join</button>}
          {currentUser && (
            <div onClick={()=>setShowOptions(!showOptions)} className="user">
              <img
                src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg"
                alt=""
              />
              <span>{currentUser?.username}</span>
              {showOptions&&<div className="options">
                {currentUser?.isSeller && (
                  <>
                    <Link to="/mygigs" className="link">Gigs</Link>
                    <Link to="/add" className="link">Add New Gig</Link>
                  </>
                )}
                <Link to="/orders" className="link">Orders</Link>
                <Link to="/messages" className="link">Messages</Link>
                <Link to="/" className="link">Logout</Link>
              </div>}
            </div>
          )}
        </div>
      </div>
      {(activeScroll||pathname!=="/") && (
        <>
          <hr />
          <div className="menu">
            <Link to="/" className="link">Video Editing</Link>
            <Link to="/" className="link">3d Modeling</Link>
            <Link to="/" className="link">Web Developement</Link>
            <Link to="/" className="link">Digital Marketing</Link>
            <Link to="/" className="link">AI Services</Link>
            <Link to="/" className="link">Writing & Transition</Link>
            <Link to="/" className="link">Graphics & Design</Link>
            <Link to="/" className="link">Music & Audio</Link>
            <Link to="/" className="link">Programming & Tech</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
