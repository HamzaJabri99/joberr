import React from "react";
import Review from "../review/Review";
import "./reviews.scss";
const Reviews = () => {
  return (
    <div className="reviews">
      <h2>Reviews</h2>
      {Array(5)
        .fill()
        .map((review) => (
          <Review />
        ))}
      <hr />
    </div>
  );
};

export default Reviews;
