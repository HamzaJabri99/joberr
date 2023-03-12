import { useQuery } from "@tanstack/react-query";
import React from "react";
import request from "../../utils/request";
import Review from "../review/Review";
import "./reviews.scss";
const Reviews = ({ gigId }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["reviews"],
    queryFn: () => request.get(`/reviews/${gigId}`).then((res) => res.data),
  });
  console.log(data);
  return (
    <div className="reviews">
      <h2>Reviews</h2>

      {isLoading
        ? "loading..."
        : error
        ? "error"
        : data?.map((review) => <Review key={review._id} review={review} />)}
      <hr />
    </div>
  );
};

export default Reviews;
