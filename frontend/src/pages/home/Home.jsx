import React from "react";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slider/Slide";
import CatCard from "../../components/catCard/CatCard";
import { useQuery } from "@tanstack/react-query";
import { cards, projects } from "../../data";
import "./Home.scss";
import ProjectCard from "../../components/projectCard/ProjectCard";
import request from "../../utils/request";
const Home = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["categories"],
    queryFn: () => request.get("/categories").then((res) => res.data),
  });

  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      {isLoading ? (
        "loading..."
      ) : error ? (
        "error"
      ) : (
        <Slide arrowsScroll={5} slidesToShow={5}>
          {data.map((card) => {
            return <CatCard key={card._id} item={card} />;
          })}
        </Slide>
      )}
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <img src="./imgs/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing
            </p>
            <div className="title">
              <img src="./imgs/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing
            </p>
            <div className="title">
              <img src="./imgs/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing
            </p>
            <div className="title">
              <img src="./imgs/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing
            </p>
          </div>
          <div className="item">
            <video src="./imgs/ladyFreeLance.mp4" controls loop></video>
          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>joberr business</h1>
            <h1>A business solution designed for teams</h1>
            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </p>
            <div className="title">
              <img src="./imgs/check.png" alt="" />
              Connect to freelancers with proven business experience
            </div>
            <div className="title">
              <img src="./imgs/check.png" alt="" />
              Get matched with the perfect talent by a customer success manager
            </div>
            <div className="title">
              <img src="./imgs/check.png" alt="" />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button>Explore Joberr Business</button>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <Slide arrowsScroll={4} slidesToShow={4}>
        {projects.map((project) => {
          return <ProjectCard item={project} key={project.id} />;
        })}
      </Slide>
    </div>
  );
};

export default Home;
