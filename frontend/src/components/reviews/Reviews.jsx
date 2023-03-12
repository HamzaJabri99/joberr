import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import request from "../../utils/request";
import Review from "../review/Review";
import "./Reviews.scss";
const Reviews = ({ gigId }) => {
  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery({
    queryKey: ["reviews"],
    queryFn: () => request.get(`/reviews/${gigId}`).then((res) => res.data),
  });
  const mutation = useMutation({
    mutationFn: (newReview) => {
      return request.post("/reviews", newReview);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["reviews"]);
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const desc = e.target[0].value;
    const star = e.target[1].value;
    mutation.mutate({ gigId, desc, star });
  };
  return (
    <div className="reviews">
      <h2>Reviews</h2>

      {isLoading
        ? "loading..."
        : error
        ? "error"
        : data?.map((review) => <Review key={review._id} review={review} />)}
      <hr />
      <div className="addReview">
        <h3>Add a review</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" name="desc" placeholder="write your review" />
          <select name="" id="" placeholder="Stars">
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Reviews;
