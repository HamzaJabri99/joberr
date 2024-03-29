import React, { useEffect } from "react";
import "./Gig.scss";
import { Slider } from "infinite-react-carousel/lib";
import { useQuery } from "@tanstack/react-query";
import request from "../../utils/request";
import { Link, useParams } from "react-router-dom";
import Reviews from "../../components/reviews/Reviews";
const Gig = () => {
  const { id: gigId } = useParams();
  const { isLoading, error, data } = useQuery({
    queryKey: ["gig"],
    queryFn: () => request.get(`/gigs/${gigId}`).then((res) => res.data),
  });
  const userId = data?.userId;
  const {
    isLoading: isLoadingUser,
    error: errorUser,
    data: dataUser,
  } = useQuery({
    queryKey: [userId],
    queryFn: () => request.get(`/users/${userId}`).then((res) => res.data),
    enabled: !!userId,
  });

  return (
    <div className="gig">
      {isLoading ? (
        "Loading..."
      ) : error ? (
        "error"
      ) : (
        <div className="container">
          <div className="left">
            <span className="breadcrumbs">
              Joberr {">"} Graphics & Design {">"}
            </span>
            <h1>{data.title}</h1>
            {isLoadingUser ? (
              "loading.."
            ) : errorUser ? (
              "error"
            ) : (
              <div className="user">
                <img
                  className="pp"
                  src={dataUser.img || "/imgs/noavatar.jpg"}
                  alt=""
                />
                <span>{dataUser.username}</span>
                {!isNaN(data.totalStars / data.starNumber) && (
                  <div className="stars">
                    {Array(Math.round(data.totalStars / data.starNumber))
                      .fill()
                      .map((star, i) => (
                        <img key={i} src="/imgs/star.png" alt="" />
                      ))}
                    <span>{Math.round(data.totalStars / data.starNumber)}</span>
                  </div>
                )}
              </div>
            )}
            {data.imgs.length > 0 && (
              <Slider slidesToShow={1} arrowsScroll={1} className="slider">
                {data?.imgs?.map((img) => (
                  <img key={img} src={img} alt="" />
                ))}
              </Slider>
            )}
            <h2>About This Gig</h2>
            <p>{data.desc}</p>
            {isLoadingUser ? (
              <div className="lds-dual-ring"></div>
            ) : errorUser ? (
              refetch()
            ) : (
              <div className="seller">
                <h2>About The Seller</h2>
                <div className="user">
                  <img src={dataUser.img || "/imgs/noavatar.jpg"} alt="" />
                  <div className="info">
                    <span>{dataUser.username}</span>
                    {!isNaN(data?.totalStars / data?.starNumber) && (
                      <div className="stars">
                        {Array(Math.round(data?.totalStars / data?.starNumber))
                          .fill()
                          .map((star, i) => (
                            <img key={i} src="/imgs/star.png" alt="" />
                          ))}
                        <span>
                          {Math.round(data?.totalStars / data?.starNumber)}
                        </span>
                      </div>
                    )}
                    <button>Contact Me</button>
                  </div>
                </div>
                <div className="box">
                  <div className="items">
                    <div className="item">
                      <span className="title">From</span>
                      <span className="desc">{dataUser?.country}</span>
                    </div>
                    <div className="item">
                      <span className="title">Member since</span>
                      <span className="desc">{dataUser?.createdAt}</span>
                    </div>
                    <div className="item">
                      <span className="title">Avg. response time</span>
                      <span className="desc">4 hours</span>
                    </div>
                    <div className="item">
                      <span className="title">Last delivery</span>
                      <span className="desc">1 day</span>
                    </div>
                    <div className="item">
                      <span className="title">Languages</span>
                      <span className="desc">English</span>
                    </div>
                  </div>
                  <hr />
                  <p>{dataUser.desc}</p>
                </div>
              </div>
            )}
            <Reviews gigId={gigId} />
          </div>
          <div className="right">
            <div className="price">
              <h3>{data?.shortTitle}</h3>
              <h2>$ {data?.price}</h2>
            </div>
            <p>{data?.shortDesc}</p>
            <div className="details">
              <div className="item">
                <img src="/imgs/clock.png" alt="" />
                <span>{data?.delivery} Days Delivery</span>
              </div>
              <div className="item">
                <img src="/imgs/recycle.png" alt="" />
                <span>{data?.revisionNumber} Revisions</span>
              </div>
            </div>
            <div className="features">
              {data?.features.map((feature) => (
                <div className="item" key={feature}>
                  <img src="/imgs/greencheck.png" alt="" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <Link to={`/pay/${gigId}`}>
              <button>Continue</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gig;
