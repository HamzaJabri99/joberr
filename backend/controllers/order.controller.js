import Gig from "../models/gig.model.js";
import Order from "../models/order.model.js";
import errorHandle from "../utils/errorHandle.js";

export const createOrder = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.gigId);
    const order = new Order({
      gigId: gig._id,
      img: gig.cover,
      title: gig.title,
      buyerId: req.userId,
      sellerId: gig.userId,
      price: gig.price,
      payment_intent: "Temporary",
    });
    if (gig.userId === req.userId)
      return next(errorHandle(403, "You can't order to yourself"));
    await order.save();
    res.status(200).send("successful order");
  } catch (error) {
    next(error);
  }
};
export const getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({
      ...(req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }),
      isCompleted: true,
    });
    if (!orders) return next(errorHandle(404, "there are no orders!"));
    return res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
};
