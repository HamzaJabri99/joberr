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
export const deleteGig = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.id);
    if (!gig) return next(errorHandle(404, "There's no gig"));
    if (gig.userId !== req.userId)
      return next(errorHandle((403, "You're not the owner of this gig!")));
    await Gig.findByIdAndDelete(req.params.id);
    return res.status(200).send("Gig has been deleted");
  } catch (error) {
    next(error);
  }
};
