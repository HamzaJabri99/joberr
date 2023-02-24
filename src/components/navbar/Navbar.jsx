import React, { useEffect, useState } from "react";
import "./Navbar.scss";
const Navbar = () => {
  const [activeScroll, setActiveScroll] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const currentUser = {
    id: 2,
    username: "jabri",
    isSeller: true,
  };
  const scrololo = () => {
    window.scrollY > 20 ? setActiveScroll(true) : setActiveScroll(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", scrololo);
    return () => {
      window.removeEventListener("scroll", scrololo);
    };
  }, []);
  return (
    <div className={activeScroll ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          {/*<Link to="/">*/}
          <span className="text">joberr</span>
          {/*</Link>*/}
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
                    <span>Gigs</span>
                    <span>Add New Gig</span>
                  </>
                )}
                <span>Orders</span>
                <span>Messages</span>
                <span>Logout</span>
              </div>}
            </div>
          )}
        </div>
      </div>
      {activeScroll && (
        <>
          <hr />
          <div className="menu">
            <span>Test</span>
            <span>Test2</span>
            <span>Test3</span>
            <span>Test4</span>
            <span>Test5</span>
            <span>Test6</span>
            <span>Test7</span>
            <span>Test8</span>
            <span>Test9</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
