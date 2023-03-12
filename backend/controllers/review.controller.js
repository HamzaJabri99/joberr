import Review from "../models/review.model.js";
import Gig from "../models/gig.model.js";
import errorHandle from "../utils/errorHandle.js";
export const getReviews = async (req, res, next) => {
  const reviews = await Review.find({ gigId: req.params.gigId });
  if (!reviews) return next(errorHandle(404, "no reviews Found"));
  try {
    res.status(200).json(reviews);
  } catch (error) {
    next(error);
  }
};
export const createReview = async (req, res, next) => {
  const gig = await Gig.findById(req.body.gigId);
  try {
    if (req.userId === gig.userId)
      return next(errorHandle(403, "You can't review Your Gig"));

    const review = new Review({
      userId: req.userId,
      gigId: req.body.gigId,
      desc: req.body.desc,
      star: req.body.star,
    });
    await review.save();
    res.status(200).send("review posted!");
  } catch (error) {
    next(error);
  }
};
export const deleteReview = async (req, res, next) => {};
