import React, { useEffect, useRef, useState } from "react";
import "./Gigs.scss";
import GigCard from "../../components/gigCard/GigCard";
import { useQuery } from "@tanstack/react-query";
import request from "../../utils/request";
import { useLocation } from "react-router-dom";
const Gigs = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [sortType, setSortType] = useState("sales");
  const minRef = useRef();
  const maxRef = useRef();
  const { search } = useLocation();
  const resort = (type) => {
    setSortType(type);
    setOpenMenu(false);
  };
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["gigs"],
    queryFn: () =>
      request
        .get(
          `/gigs${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sortType}`
        )
        .then((res) => {
          return res.data;
        }),
  });
  useEffect(() => {
    refetch();
  }, [sortType]);
  console.log(minRef);
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
            <input ref={minRef} type="number" placeholder="min" min={5} />
            <input ref={maxRef} type="number" placeholder="max" min={5} />
            <button onClick={() => refetch()}>Apply</button>
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
          {isLoading
            ? "loading"
            : error
            ? "error"
            : data?.map((gig) => <GigCard key={gig._id} item={gig} />)}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
