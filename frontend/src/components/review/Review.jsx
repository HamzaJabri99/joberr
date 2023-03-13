import { useQuery } from "@tanstack/react-query";
import request from "../../utils/request";
import "./Review.scss";
const Review = ({ review }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: [review.userId],
    queryFn: () =>
      request.get(`/users/${review.userId}`).then((res) => res.data),
  });
  console.log(data);
  return (
    <div className="review">
      {isLoading ? (
        "loading..."
      ) : error ? (
        "error"
      ) : (
        <div className="user">
          <img className="pp" src={data.img || "/imgs/noavatar.jpg"} alt="" />
          <div className="info">
            <span>{data.username}</span>
            <div className="country">
              <img
                src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                alt=""
              />
              <span>{data.country}</span>
            </div>
          </div>
        </div>
      )}
      <div className="stars">
        {Array(review.star)
          .fill()
          .map((img, i) => (
            <img key={i} src="/imgs/star.png" alt="" />
          ))}
        <span>{review.star}</span>
      </div>
      <p>{review.desc}</p>
      <div className="helpful">
        <span>Helpful?</span>
        <img src="/imgs/like.png" alt="" />
        <span>Yes</span>
        <img src="/imgs/dislike.png" alt="" />
        <span>No</span>
      </div>
    </div>
  );
};

export default Review;
