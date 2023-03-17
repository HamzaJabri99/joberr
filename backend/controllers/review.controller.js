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
  if (req.userId === gig.userId)
    return next(errorHandle(403, "You can't review Your Gig"));

  const review = new Review({
    userId: req.userId,
    gigId: req.body.gigId,
    desc: req.body.desc,
    star: req.body.star,
  });
  try {
    const rev = await Review.findOne({
      userId: req.userId,
      gigId: req.body.gigId,
    });
    if (rev) return next(errorHandle(403, "You can't Review More than Once"));
    const savedReview = await review.save();
    await Gig.findOneAndUpdate(req.body.gigId, {
      $inc: { totalStars: req.body.star, starNumber: 1 },
    });
    res.status(201).send(savedReview);
  } catch (error) {
    next(error);
  }
};
export const deleteReview = async (req, res, next) => {
  const review = await Review.findById(req.params.id);
  try {
    if (!review) return next(errorHandle(404, "no review"));
    if (req.userId !== review.userId)
      return next(errorHandle(403, "not authorized"));
    const rev = await Review.findByIdAndDelete(req.params.id);
    return res.status(201).send(rev);
  } catch (error) {
    next(error);
  }
};
