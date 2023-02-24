import React, { useEffect, useState } from "react";
import "./Navbar.scss";
const Navbar = () => {
  const [active, setActive] = useState(false);
  const scrololo = () => {
    window.scrollY > 20 ? setActive(true) : setActive(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", scrololo);
    return () => {
      window.removeEventListener("scroll", scrololo);
    };
  }, []);
  return (
    <div className={active ? "navbar active" : "navbar"}>
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
          <span>Become a Seller</span>
          <span>Sign in</span>
          <button>Join</button>
        </div>
      </div>
      {active && (
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
