import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/request";
const Navbar = () => {
  const [activeScroll, setActiveScroll] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const scrololo = () => {
    window.scrollY > 0 ? setActiveScroll(true) : setActiveScroll(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", scrololo);
    return () => {
      window.removeEventListener("scroll", scrololo);
    };
  }, []);
  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className={activeScroll || pathname !== "/" ? "navbar active" : "navbar"}
    >
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
          {!currentUser && (
            <Link className="link" to="/login">
              Sign in
            </Link>
          )}
          {!currentUser?.isSeller && (
            <Link to={"/register"}>
              <button>Join</button>
            </Link>
          )}
          {currentUser && (
            <div className="user" onClick={() => setShowOptions(!showOptions)}>
              <img src={currentUser.img || "/imgs/noavatar.jpg"} alt="" />
              <span>{currentUser?.username}</span>
              {showOptions && (
                <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <Link to="/mygigs" className="link">
                        Gigs
                      </Link>
                      <Link to="/add" className="link">
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link to="/orders" className="link">
                    Orders
                  </Link>
                  <Link to="/messages" className="link">
                    Messages
                  </Link>
                  <Link onClick={handleLogout} className="link">
                    Logout
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {(activeScroll || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link to="/" className="link">
              Video Editing
            </Link>
            <Link to="/" className="link">
              3d Modeling
            </Link>
            <Link to="/" className="link">
              Web Developement
            </Link>
            <Link to="/" className="link">
              Digital Marketing
            </Link>
            <Link to="/" className="link">
              AI Services
            </Link>
            <Link to="/" className="link">
              Writing & Transition
            </Link>
            <Link to="/" className="link">
              Graphics & Design
            </Link>
            <Link to="/" className="link">
              Music & Audio
            </Link>
            <Link to="/" className="link">
              Programming & Tech
            </Link>
          </div>
          <hr />
        </>
      )}
    </div>
  );
};

export default Navbar;
