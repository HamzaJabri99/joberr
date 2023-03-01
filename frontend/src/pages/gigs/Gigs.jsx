import React, { useState } from "react";
import "./Gigs.scss";
import { gigs } from "../../data";
import GigCard from "../../components/gigCard/GigCard";
const Gigs = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [sortType, setSortType] = useState("Sales");
  const resort = (type) => {
    setSortType(type);
    setOpenMenu(false);
  };
  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">
          JOBERR {">"} GRAPHICS & DESIGN {">"}
        </span>
        <h1>AI Artists</h1>
        <p>
          Explore the boundries of art and technology with Joberr{"'"}s AI
          artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="text" placeholder="min" />
            <input type="text" placeholder="max" />
            <button>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">SortBy</span>
            <span className="sortType">
              {sortType === "sales" ? "Best Selling" : "Newest"}
            </span>
            <img
              src="./imgs/down.png"
              alt=""
              onClick={() => setOpenMenu(!openMenu)}
              style={{ zIndex: 1 }}
            />
            {openMenu && (
              <div className="rightMenu">
                {sortType === "sales" ? (
                  <span onClick={() => resort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => resort("sales")}>Best Selling</span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {gigs.map((gig) => (
            <GigCard key={gig.id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
