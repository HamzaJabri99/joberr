import Gig from "../models/gig.model.js";
import errorHandle from "../utils/errorHandle.js";
export const getGigs = async (req, res, next) => {};
export const getGig = (req, res, next) => {};
export const createGig = async (req, res, next) => {
  if (!req.isSeller)
    return next(errorHandle(403, "You have to be a seller to create a gag!"));
  const gig = new Gig({
    userId: req.userId,
    ...req.body,
  });
  try {
    const savedGig = await gig.save();
    return res.status(201).json(savedGig);
  } catch (error) {
    next(error);
  }
};
export const deleteGig = (req, res, next) => {};
