import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Featured.scss";

const Featured = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate(`/gigs?search=${input}`);
  };
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the perfect <i>freelance</i> services for your business
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./imgs/search.png" alt="" />
              <input
                type="text"
                placeholder='Try "editing videos"'
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <button onClick={handleSearch}>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Web Design</button>
            <button>Video Editing</button>
            <button>Narrating</button>
            <button>Programming</button>
          </div>
        </div>
        <div className="right">
          <img
            src="./imgs/young-man-shirt-working-laptop-lilac-backgroundin.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Featured;
